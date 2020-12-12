const path = require('path')
module.exports = {
  mode: "production",
  entry: {
    index: './lib/index.tsx'
  },
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      }
    ]
  }
}