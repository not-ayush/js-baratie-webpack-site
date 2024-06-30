const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cool Restaurant Site',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
  ],
};