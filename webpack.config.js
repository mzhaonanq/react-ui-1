const path = require('path')
module.exports = {
  entry: './src/index.tsx',
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
      },
      {
        test:/\.svg$/,
        loader:"svg-sprite-loader"
      },
      {
        test:/\.scss$/,
        use:["style-loader","css-loader","sass-loader"]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}