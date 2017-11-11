module.exports = {
  entry: {
    'test': __dirname + '/js/test.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [['env', {
            }]]
          }
        }]
      }
    ]
  }
};