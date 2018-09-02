const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/app.jsx'),
  output: {
    path: path.join(__dirname, '/client'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'],
        },
      }],
  },
};
