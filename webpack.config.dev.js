const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({title: "React-UI", template: "./src/index.html"}),
  ],
})
