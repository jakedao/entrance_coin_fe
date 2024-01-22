const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),

    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/env", // Convert above ESCMA script 5 to version 5
            ],
            // Group of using babel plugins
            plugins: [],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    // Split the css and bundle file separately
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/styles": path.resolve(__dirname, "src/styles"),
    },
  },
};
