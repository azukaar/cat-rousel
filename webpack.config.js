var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
      new webpack.DefinePlugin({
        CONFIG: JSON.stringify(require("config"))
      })
  ],
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    index: 'src/index.html'
  }
};