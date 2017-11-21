module.exports = {
  entry: './code.ts',
  output: {
    filename: 'distribution/bundle.js'
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
  devtool: 'inline-source-map'
};
