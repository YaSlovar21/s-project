const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const {categories} = require('./categories')

//const canonicalURL = 'http://xn--80aaygbafnegdzdefffgu5dvg6c.xn--p1ai.website.yandexcloud.net'
//const canonicalURL = 'http://ssk22.ru.website.yandexcloud.net';

const canonicalURL = 'https://станкостальконструкция.рф'

const HttpsProxyAgent = require('https-proxy-agent');
const fetch1 = require('node-fetch');

const {
  ROUTES,
  techNames,
  standartClasses,
  featuresForCats
} = require('./constants');
const { paths } = require('./sitemap');

console.log(ROUTES);


function generateCategoriesHtmlPlugins(oporyData) {
  console.log(oporyData);
  return categories.map(category => {
    return new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
        ROUTES,
        tableData: oporyData.filter(i => i.type === category.type),
        h1Title: category.h1,
        staticData: category.staticData,
        techNames,
        categoryType: category.type,

        itemAlias: category.itemName,
        gost1: category.gost1,
        featsArr: featuresForCats[category.type],

        ...standartClasses
      },
      title: category.title,
      template: './src/category-page.html', // путь к файлу index.html
      filename: category.filename,
      chunks: ['index', 'form', 'popupWithImage','ctaReactions'],
    })
  })
};

const dateNow = (new Date()).toString();
let generatedPaths = [];


/* -------------- СТРАНИЦЫ ПРОДУКТОВ ------------------------------------ */

function generateProductsHtmlPlugins(oporyData) {
  return oporyData.map((item) => {
    let itemRoute;
    let itemTitle;
    let type;
    let desc;
    let catForCrumbs;
    switch (item.type) {
      case 'sfg':
        itemRoute =  `opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-${item['H']}-${item['Db']}-${item['P']}kg.html`;
        itemTitle = `Опора МСО-ФГ-${Number(item['P'])/100} | СФГ-${item['H']} (${item['Db']})`;
        type = 'силовая';
        desc = `Опора силовая фланцевая граненая с возможностью подвески СИП с боковой нагрузкой ${item['P']} кг на высоте ${item['H1']} мм. Крепление к поверхности через фланец.`
        catForCrumbs = 'Опоры силовые фланцевые граненые';
        break;
      case 'spg':
        itemRoute = `opory-osveshcheniya/opory-silovye-pryamostoechnye-granenye/mso-pg-${item['H']}-${item['Db']}-${item['P']}kg.html`;
        itemTitle = `Опора МСО-ПГ-${Number(item['P'])/100} | СПГ-${item['H']} (${item['Db']})`;
        type = 'силовая';
        desc = `Опора силовая прямостоечная граненая с возможностью подвески СИП с боковой нагрузкой ${item['P']} кг на высоте ${item['H1']} мм.`
        catForCrumbs = 'Опоры силовые прямостоечные граненые';
        break;
      case 'nfg':
        itemRoute = `opory-osveshcheniya/opory-nesilovye-flancevye-granenye/mno-fg-${item['H']}-${item['Db']}.html`;
        itemTitle = `Опора МНО-ФГ-${item['H']} НФГ-${item['H']} (${item['Db']})`
        type = 'несиловая';
        desc = `Опора несиловая фланцевая граненая без возможностиподвески СИП. Крепление к поверхности через фланец.`;
        catForCrumbs = 'Опоры несиловые фланцевые граненые';
        break;
      case 'npg':
        itemRoute = `opory-osveshcheniya/opory-nesilovye-pryamostoechnye-granenye/mno-pg-${item['H']}-${item['Db']}.html`;
        itemTitle = `Опора МНО-ПГ-${item['H']} НФГ-${item['H']} (${item['Db']})`;
        desc = `Опора несиловая прямостоечная граненая без возможностиподвески СИП.`;
        catForCrumbs = 'Опоры несиловые прямостоечные граненые';
        type = 'несиловая';
        break;
    }
    console.log(itemRoute);
    generatedPaths.push(
      {
        path: `/${itemRoute}`,
        lastmod: dateNow,
        priority: 1,
        changefreq: 'monthly'
      }
    )
    return new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
        ROUTES,
        oporaData: item,
        type,
        desc,
        catForCrumbs,
        ...standartClasses
      },
      title: itemTitle,
      template: './src/product-page.html', // путь к файлу index.html
      filename: itemRoute,
      chunks: ['index', 'form', 'ctaReactions', 'popupWithImage'],
    })
  })
}

/* -------------------------СТАТЬИ---------------------*/

function generateArticlesHtmlPlugins(newsData) {
  console.log(newsData);
  return newsData.filter(i => i.isStaticPage).sort((a,b) => b.id - a.id).map(post => {
    
    generatedPaths.push(
      {
        path: `${ROUTES.news}${post.isStaticPage}`,
        lastmod: dateNow,
        priority: 0.8,
        changefreq: 'monthly'
      }
    )
    return new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
        ROUTES,
        textArticleId: post.textId,
        h1Title: post.title,
        staticData: {
          ...post
        },
        newsData,
        ...standartClasses
      },
      title: post.title,
      template: './src/blog-page.html', // путь к файлу index.html
      filename: `${ROUTES.news.substr(1)}${post.isStaticPage}`,
      chunks: ['index', 'form','ctaReactions', 'popupWithImage'],
    })
  })
};

function generateConfig(oporyData, newsData) {

  const htmlCategoriesPlugins = generateCategoriesHtmlPlugins(oporyData);
  const htmlArticlesPlugins = generateArticlesHtmlPlugins(newsData);
  const htmlProductsPlugins = generateProductsHtmlPlugins(oporyData);
  console.log(paths.length + generatedPaths.length)
  return {
    entry: { 
      index: './src/pages/index.js', 
      form: './src/pages/form.js',
      blogpage: './src/pages/blog-page.js',
      slider: './src/pages/mainPageSlider.js',
      popupWithImage: './src/pages/popupImage.js',
      frequently: './src/pages/frequently.js',
      ctaReactions: './src/pages/cta-reaction.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      assetModuleFilename: 'images/[hash][ext]',
      //publicPath: ''
    },
      // добавили режим разработчика
    mode: 'development',
    devServer: {
      static: path.resolve(__dirname, "./dist"), // путь, куда "смотрит" режим разработчика
      compress: true, // это ускорит загрузку в режиме разработки
      port: 8081,
      open: true, // сайт будет открываться сам при запуске npm run dev
    },
    module: {
      rules: [ 
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
        },
        {
          test: /favicon\.svg/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "",
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource',
          exclude: [
            path.resolve(__dirname, "./src/images/favicon.svg"),
          ],
        },
        {
          // загрузка документов в documents/
          test: /\.(doc|docx|pdf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "docs",
              },
            },
          ],
        },
        {
          test: /\.css$/,
          // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { importLoaders: 1 },
            },
            // Добавьте postcss-loader
            "postcss-loader",
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          newsData: newsData.sort((a,b) => b.id - a.id),
          ...standartClasses //классы: контейнер, при клике на который открывается попап с картинкой
        },
        title: "СтанкоСтальКонструкция | Производство гранёных опор освещения",
        template: './src/index.html', // путь к файлу index.html
        chunks: ['index', 'form','ctaReactions', 'slider', 'popupWithImage'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES
        },
        title: "О производстве",
        template: './src/about.html', // путь к файлу index.html
        filename: 'about/index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          
        },
        title: "Проектировщикам",
        template: './src/proektirovshchikam.html', // путь к файлу index.html
        filename: 'proektirovshchikam/index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          ...standartClasses
        },
        title: "Каталог",
        template: './src/production.html', // путь к файлу index.html
        filename: 'catalog/index.html',
        chunks: ['index', 'form','ctaReactions' ]
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          ...standartClasses
        },
        title: "Фудаменты под граненые конические опоры",
        template: './src/funds.html', // путь к файлу index.html
        filename: `${ROUTES.fundamenty.slice(1,)}index.html`,
        chunks: ['index', 'form','ctaReactions' ]
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          ...standartClasses
        },
        title: "Кронштейны под светильники для опор освещения",
        template: './src/brackets.html', // путь к файлу index.html
        filename: `${ROUTES.brackets.slice(1,)}index.html`,
        chunks: ['index', 'form','ctaReactions' ]
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          ...standartClasses
        },
        title: "Высокомачтовые опоры",
        template: './src/machty.html', // путь к файлу index.html
        filename: `${ROUTES.machty.slice(1,)}index.html`,
        chunks: ['index', 'form' , 'popupWithImage','ctaReactions']
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          ...standartClasses
        },
        title: "Опоры освещения",
        template: './src/lpopory.html', // путь к файлу index.html
        filename: 'opory-osveshcheniya/index.html',
        chunks: ['index', 'form', 'popupWithImage', 'frequently','ctaReactions'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          newsData: newsData.sort((a,b) => b.id - a.id),
          ...standartClasses
        },
        title: "Новости производства",
        template: './src/news-page.html', // путь к файлу index.html
        filename: 'news/index.html',
        chunks: ['index', 'form','ctaReactions'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          newsData: newsData.sort((a,b) => b.id - a.id),
          ...standartClasses
        },
        title: "Наши ценности",
        template: './src/cennosti.html', // путь к файлу index.html
        filename: 'about/nashi-cennosti/index.html',
        chunks: ['index', 'form','ctaReactions'],
      }),
      
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          
        },
        title: "Контакты ООО «Станкостальконструкция»",
        template: './src/contacts.html', // путь к файлу index.html
        filename: 'contacts/index.html',
        chunks: ['index'],
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new SitemapPlugin({ base: canonicalURL, paths: paths.concat(generatedPaths) }),
    ].concat(htmlCategoriesPlugins, htmlProductsPlugins, htmlArticlesPlugins), 
  }
}
const proxyAgent = new HttpsProxyAgent.HttpsProxyAgent('http://10.10.14.14:3128');

/*
  const date = new Date(dateTime);
  const month = date.getMonth() + 1;
  this._dateString = `${date.getDate()}.${month < 10 ? '0' : ''}${month}.${date.getFullYear()}`
*/

function articleDateMapper(newsArr) {
  return newsArr.map((item) => {
    const date = new Date(item.dateTime);
    const month = date.getMonth() + 1;
    return {
      ...item,
      formattedDate: `${date.getDate()}.${month < 10 ? '0' : ''}${month}.${date.getFullYear()}`
    }
  })
}

module.exports = () => {
  return new Promise((resolve, reject) => {
      Promise.all([
          fetch1('https://functions.yandexcloud.net/d4e9aq1evmfdb0cc7uo4', { agent: proxyAgent}).then(res => res.json()), 
          fetch1('https://functions.yandexcloud.net/d4e9aq1evmfdb0cc7uo4?base=news', { agent: proxyAgent}).then(res => res.json()), 
        ])
        .then((data) => {
          resolve(generateConfig(data[0], articleDateMapper(data[1])));
        })
     
  });
}