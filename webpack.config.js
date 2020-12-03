const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './script/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /\.module\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.module\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: path.resolve(__dirname, 'dist'),
                    outputPath: 'dist/',
                },
            },
        ],
        },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
  },
};

module.exports = config;