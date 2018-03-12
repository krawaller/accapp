var path = require("path");

module.exports = {
  mode: 'development',
  entry: './code.js',
  output: {
    path: path.resolve(__dirname, "."),
    filename: 'bundle.js'
  }
};
