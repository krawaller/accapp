var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  mode: 'development',
  entry: './code.js',
  output: {
    path: path.resolve(__dirname, "."),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "."),
    watchContentBase: true,
    port: 9000,
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
};
