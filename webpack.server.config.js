const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: {static: './serve/www.js'},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './serve/build')
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/views/index.html', title: 'css'})
  ],
  externals: [WebpackNodeExternals()],
});