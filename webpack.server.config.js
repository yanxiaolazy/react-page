const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: {server: './serve/www.js'},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './serve/build')
  },
  externals: [WebpackNodeExternals()],
});