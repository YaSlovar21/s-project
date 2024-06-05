const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

const {categories} = require('./categories')

const canonicalURL = 'http://станкостальконструкция.рф.website.yandexcloud.net'

const HttpsProxyAgent = require('https-proxy-agent');
const fetch1 = require('node-fetch');

const {
  ROUTES,
  techNames
} = require('./constants');
console.log(ROUTES);


function generateCategoriesHtmlPlugins(oporyData) {
  return categories.map(category => {
    return new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
        ROUTES,
        tableData: oporyData.filter(i => i.type === category.type),
        h1Title: category.h1,
        staticData: category.staticData,
        techNames
      },
      title: category.title,
      template: './src/category-page.html', // путь к файлу index.html
      filename: category.filename,
      chunks: ['index'],
    })
  })
};

function generateArticlesHtmlPlugins(newsData) {
  console.log(newsData);
  return newsData.sort((a,b) => b.id - a.id).map(post => {
    console.log(post.isStaticPage.substr(1));
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
      },
      title: post.title,
      template: './src/blog-page.html', // путь к файлу index.html
      filename: post.isStaticPage.substr(1),
      chunks: ['index'],
    })
  })
};

function generateConfig(oporyData, newsData) {

  const htmlCategoriesPlugins = generateCategoriesHtmlPlugins(oporyData);
  const htmlArticlesPlugins = generateArticlesHtmlPlugins(newsData);

  return {
    entry: { 
      index: './src/pages/index.js', 
      blogpage: './src/pages/blog-page.js',
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
        },
        title: "СтанкоСтальКонструкция | Производство гранёных опор освещения",
        template: './src/index.html', // путь к файлу index.html
        chunks: ['index'],
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
          newsData: newsData.sort((a,b) => b.id - a.id),
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
          newsData: newsData.sort((a,b) => b.id - a.id),
        },
        title: "Новости производства",
        template: './src/news-page.html', // путь к файлу index.html
        filename: 'novosti-proizvodstva/index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
        },
        title: "Опора МСО-ФГ-4",
        template: './src/product-page.html', // путь к файлу index.html
        filename: 'opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-4-sfg-400-c/index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        templateParameters: {
          canonicalURL,
          ROUTES,
          newsData: newsData.sort((a,b) => b.id - a.id),
        },
        title: "Контакты ООО «Станкостальконструкция»",
        template: './src/contacts.html', // путь к файлу index.html
        filename: 'contacts/index.html',
        chunks: ['index'],
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ].concat(htmlCategoriesPlugins,htmlArticlesPlugins), 
  }
}
const proxyAgent = new HttpsProxyAgent.HttpsProxyAgent('http://10.10.14.14:3128');

module.exports = () => {
  return new Promise((resolve, reject) => {
      Promise.all([
          fetch1('https://functions.yandexcloud.net/d4e9aq1evmfdb0cc7uo4', { agent: proxyAgent}).then(res => res.json()), 
          fetch1('https://functions.yandexcloud.net/d4e9aq1evmfdb0cc7uo4?base=news', { agent: proxyAgent}).then(res => res.json()), 
        ])
        .then((data) => {
          resolve(generateConfig(data[0], data[1]));
        })
     
  });
}