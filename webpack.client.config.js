const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'web',
  entry: {
    client: './app/views/client.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './app/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/views/index.html',
      title: 'Client App'
    })
  ],
});
