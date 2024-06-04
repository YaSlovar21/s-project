const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

const {categories} = require('./categories')

const canonicalURL = 'https://www.ssk22.ru'

const HttpsProxyAgent = require('https-proxy-agent');
const fetch1 = require('node-fetch');

/*
function generateArticleHtmlPlugins() {
  return bpages.map(articleData => {
    return new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL: canonicalURL,
        articleId: articleData.articleId,
      },
      title: articleData.title,
      heading: articleData.h1,
      meta: {
        keywords: articleData.keywords,
        description: articleData.description,
      },
      template: "./src/abstract-blog-page.html",
      filename: articleData.fileName,
      chunks: ["blogpage", "aside", 'all'],
    })
  })
};

const htmlArticlePlugins = generateArticleHtmlPlugins();
*/

const ROUTES = {
  brackets: '/kronshtejny-pod-svetilniki/',

  oporyMain: '/opory-osveshcheniya/',
  sfg: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/',
  sfg400: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-4-sfg-400-c/',
  sfg700: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-7-sfg-700-c/',
  sfg1000: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-10-sfg-1000-c/',
  sfg1300: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-13-sfg-1300-c/',

  spg: '/opory-osveshcheniya/opory-silovye-pryamostoechnye-granenye/',
  nfg: '/opory-osveshcheniya/opory-nesilovye-flancevye-granenye/',
  npg: '/opory-osveshcheniya/opory-nesilovye-pryamostoechnye-granenye/',

  machty: '/vysokomachtovye-opory/',

  fundamenty: '/fundamenty-pod-opory/',

  about: '/about/'
};
function generateConfig(oporyData) {
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
          categories,
          ROUTES
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
          tableData: oporyData.filter(i => i.type === 'sfg')
        },
        title: "Опоры силовые фланцевые граненые",
        template: './src/category-page.html', // путь к файлу index.html
        filename: 'opory-osveshcheniya/opory-silovye-flancevye-granenye/index.html',
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
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ], 
  }
}
const proxyAgent = new HttpsProxyAgent.HttpsProxyAgent('http://10.10.14.14:3128');

module.exports = () => {
  return new Promise((resolve, reject) => {
      Promise.all([
          fetch1('https://functions.yandexcloud.net/d4e9aq1evmfdb0cc7uo4', { agent: proxyAgent}).then(res => res.json()), 
        ])
        .then((data) => {
          resolve(generateConfig(data[0]));
        })
     
  });
}