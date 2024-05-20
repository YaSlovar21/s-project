const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

const {categories} = require('./categories')

const canonicalURL = 'https://www.ssk22.ru'

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
module.exports = {
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
    port: 8081, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
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
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        exclude: [
          path.resolve(__dirname, "./src/images/favicon.svg"),
        ],
      },
      {
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
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
        categories
      },
      title: "СтанкоСтальКонструкция | Производство гранёных опор освещения",
      template: './src/index.html', // путь к файлу index.html
      chunks: ['index'],
    }),
    /*new HtmlWebpackPlugin({
      templateParameters: {
        canonicalURL,
      },
      title: "О Купцове",
      template: './src/about.html', // путь к файлу index.html
      filename: 'about/index.html',
      chunks: ['index', 'all'],
    }),*/
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ], 
}