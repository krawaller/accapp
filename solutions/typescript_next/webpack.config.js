let path = require("path");

module.exports = {
  entry: path.resolve(__dirname, 'code.ts'),
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  mode: "development"
};
