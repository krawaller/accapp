var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  mode: 'development',
  entry: './code.js',
  output: {
    path: path.resolve(__dirname, "distribution"),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "distribution"),
    watchContentBase: true,
    port: 9000,
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
};
