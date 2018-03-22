const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelSettings = {
  extends: `${__dirname}/.babelrc`,
};

const dist = 'dist';
const src = 'src';

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: {
    script: `${__dirname}/${src}/index.js`,
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: `babel-loader?${JSON.stringify(babelSettings)}`,
          },
        ],
      },
    ],
  },
  output: {
    filename: 'dist/[name].js',
    path: `${__dirname}/${dist}`,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    modules: [path.resolve(src), 'node_modules'],
  },
};
