const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'code.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname,
    watchContentBase: true,
    port: 9000,
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
};
