const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    client: './app/views/client.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './app/dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 80,
    hot: true,
    contentBase: './app/dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './app/views/index.html',
      title: 'Client App'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: []
        } 
      }
    ]
  }
}
