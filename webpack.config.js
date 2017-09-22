module.exports = {
  entry: './src/index.js',
  output: {
    filename: './public/bundle.js',
    path: __dirname
  },
  devtool: 'eval-source-map',
  module: {
    loaders:  [
      {test:/\.js$/, loader:'babel-loader', exclude: /node_modules/, query: { presets: ['env']}}
    ]
  }
}
