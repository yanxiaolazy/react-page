const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'web',
  entry: {
    static: './app/views/client.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './app/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/views/index.html', title: 'Css Webpack'}),
  ]
});
