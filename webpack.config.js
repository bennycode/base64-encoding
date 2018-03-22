const pkg = require('./package.json');
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
    contentBase: dist,
    hot: true,
    open: true,
  },
  entry: {
    [pkg.name]: `${__dirname}/${pkg.main}`,
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
    filename: '[name].bundle.js',
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
