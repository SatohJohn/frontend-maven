module.exports = {
  entry: {
    'test': __dirname + '/js/test.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['flow', 'es2015']
        }
      }
    ]
  }
};