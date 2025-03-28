const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const {categories, categoriesPageOpory, categoriesPageMain} = require('./categories')

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
        pathGenerator: category.pathGenerator,
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

        ...standartClasses,

        //все категории для рекомендательной ленты
        allCats: categories.filter(item=> item.filename !== category.filename),
        nameGenerator: category.nameGenerator,
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
    let itemRoute = item.linkPath;
    let itemTitle = `Опора ${item.name}`;
    let gostName = item.gostName  || null;
    let sposobUstanovki;
    let type;
    let desc;
    let catForCrumbs;
    let categoryID = item.type;
    switch (item.type) {
      case 'sfg':
        type = 'силовая';
        sposobUstanovki = 'фланцевая';
        desc = `Опора силовая фланцевая граненая с возможностью подвески СИП с боковой нагрузкой ${item['P']} кг на высоте ${item['H1']} мм. Крепление к поверхности через фланец.`
        catForCrumbs = 'Опоры силовые фланцевые граненые';
        break;
      case 'nfg':
        type = 'несиловая';
        categoryID = 'nfg';
        sposobUstanovki = 'фланцевая';
        desc = `Опора несиловая фланцевая граненая без возможности подвески СИП. Крепление к поверхности через фланец.`;
        catForCrumbs = 'Опоры несиловые фланцевые граненые';
        break;
      case 'spg':
        type = 'силовая';
        categoryID = 'spg';
        sposobUstanovki = 'прямостоечная';
        desc = `Опора силовая прямостоечная граненая с возможностью подвески СИП с боковой нагрузкой ${item['P']} кг на высоте ${item['H1']} мм.`
        catForCrumbs = 'Опоры силовые прямостоечные граненые';
        break;
      case 'npg':
        categoryID = 'npg';
        desc = `Опора несиловая прямостоечная граненая без возможности подвески СИП.`;
        catForCrumbs = 'Опоры несиловые прямостоечные граненые';
        type = 'несиловая';
        sposobUstanovki = 'прямостоечная';
        break;
      case 'msofg':
        type = 'силовая';
        categoryID = 'msofg';
        sposobUstanovki = 'фланцевая';
        desc = `Опора силовая фланцевая граненая ГОСТ с возможностью подвески СИП с боковой нагрузкой ${item['P']} кг на высоте ${item['H1']} мм. Крепление к поверхности через фланец.`
        catForCrumbs = 'Опоры силовые фланцевые граненые ГОСТ';
        break;
      case 'mnofg':
        type = 'несиловая';
        categoryID = 'mnofg';
        sposobUstanovki = 'фланцевая';
        desc = `Опора несиловая фланцевая граненая ГОСТ без возможности подвески СИП. Крепление к поверхности через фланец.`;
        catForCrumbs = 'Опоры несиловые фланцевые граненые';
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
        ...standartClasses,
        gostName,
        sposobUstanovki,
        categoryID
      },
      title: itemTitle,
      template: './src/product-page.html', // путь к файлу index.html
      filename: itemRoute,
      chunks: ['index', 'form', 'ctaReactions'],
    })
  })
}

function sfdsdd(a,b)  {
  return a+b;
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

function generateConfig(oporyData, newsData, objectsData) {

  const htmlCategoriesPlugins = generateCategoriesHtmlPlugins(oporyData);
  const htmlArticlesPlugins = generateArticlesHtmlPlugins(newsData);
  const htmlProductsPlugins = generateProductsHtmlPlugins(oporyData);

  console.log(paths.length + generatedPaths.length)
  return {
    entry: { 
      index: './src/pages/index.js', 
      form: './src/pages/form.js',
      blogpage: './src/pages/blog-page.js',
      lpopory: './src/pages/lpopory.js',
      slider: './src/pages/mainPageSlider.js',
      popupWithImage: './src/pages/popupImage.js',
      frequently: './src/pages/frequently.js',
      ctaReactions: './src/pages/cta-reaction.js',
      hoverToImage: './src/pages/hover-to-main.js',
      accordeon: './src/pages/accord.js'
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
          sfdsdd,
          canonicalURL,
          ROUTES,
          categoriesPageMain,
          newsData: newsData.sort((a,b) => b.id - a.id),
          ...standartClasses //классы: контейнер, при клике на который открывается попап с картинкой
        },
        title: "СтанкоСтальКонструкция | Завод гранёных опор освещения",
        template: './src/index.html', // путь к файлу index.html
        chunks: ['index', 'form','ctaReactions', 'accordeon', 'popupWithImage'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          objectsData
        },
        title: "О производстве опор и география поставок",
        template: './src/about.html', // путь к файлу index.html
        filename: 'about/index.html',
        chunks: ['index', 'form'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          
        },
        title: "Проектировщикам дорог и дорожного освещения",
        template: './src/proektirovshchikam.html', // путь к файлу index.html
        filename: 'proektirovshchikam/index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          tableData: oporyData,
          techNames,
          categories,
          ...standartClasses
        },
        title: "Каталог опор освещения",
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
          categoriesPageOpory,
          ROUTES,
          ...standartClasses
        },
        title: "Опоры освещения конические многогранные ГОСТ 32947-2014",
        desc: "Производство опор освещения гранёных опор освещения: силовых фланцевых , несиловых фланцевых, силовых и несиловых прямостоечных опор освещения. Полный цикл производства.",
        template: './src/lpopory.html', // путь к файлу index.html
        filename: 'opory-osveshcheniya/index.html',
        chunks: ['index', 'lpopory', 'form', 'popupWithImage','ctaReactions', 'hoverToImage'],
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
        chunks: ['index', ,'ctaReactions'],
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
          newsData: newsData.sort((a,b) => b.id - a.id),
          ...standartClasses
        },
        title: "Парк оборудования и услуги",
        template: './src/about-factory-equipment.html', // путь к файлу index.html
        filename: `${ROUTES.uslugiAndEquip.slice(1,)}index.html`,
        chunks: ['index', 'form','ctaReactions','popupWithImage'],
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
          fetch1('https://api.ssk22.ru/data/techdata').then(res => res.json()), 
          fetch1('https://api.ssk22.ru/news').then(res => res.json()), 
          fetch1('https://api.ssk22.ru/data/objects').then(res => res.json()), 
        ])
        .then((data) => {
          resolve(generateConfig(data[0], articleDateMapper(data[1]), data[2]));
        })
     
  });
}