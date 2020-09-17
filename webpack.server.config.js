const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: './serve/www.js',
  output: {
    filename: 'serve.bundle.js',
    path: path.resolve(__dirname, './serve/build')
  },
  externals: [WebpackNodeExternals()]
});