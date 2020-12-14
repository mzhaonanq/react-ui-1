const path = require('path')
module.exports = {
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}