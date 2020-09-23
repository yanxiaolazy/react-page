const {resolve} = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'web',
  entry: {
    client: './app/views/client.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, './app/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/views/index.html', 
      title: 'React-Page',
      filename: resolve(__dirname, './serve/build/index.html'),
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
  ]
});
