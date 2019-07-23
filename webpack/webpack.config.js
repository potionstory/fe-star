require("dotenv").config({ silent: true });

const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:8000/' : 'http://fe-star.herokuapp.com/';

module.exports = {
  entry: {
    app: ['@babel/polyfill', path.resolve("src/index.jsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'BASE_URL': JSON.stringify(baseURL),
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: process.env.NODE_ENV === "development" },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: "[name]--[hash:base64:5]",
              },
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
    ],
  },
};
