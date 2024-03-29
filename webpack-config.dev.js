const { merge } = require("webpack-merge");
const common = require("./webpack-config.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    client: {
      logging: "info",
      overlay: true,
    },
    compress: true,
    open: true,
    static: "./build",
  },
  stats: {
    errorDetails: true,
  },
});
