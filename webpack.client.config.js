const path = require('path');
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
});
