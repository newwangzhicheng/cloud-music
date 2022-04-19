const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    filename: 'assets/js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  externals: {
    axios: 'axios'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        },
        generator: {
          filename: 'assets/img/[contenthash:6][ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      title: '网易云音乐'
    }),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: true
    }),
    new CopyPlugin({
      patterns: [{ from: 'static', to: './' }]
    })
  ]
};
