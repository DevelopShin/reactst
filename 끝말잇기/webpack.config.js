const path = require("path");

module.exports = {
  name: 'wordrelay-settings',
  node: 'development',
  devtool: 'eval',
  resolve: ['.js', 'jsx'],
  entry: { //입력
    app: ['./client']
  },


  output: { //출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',

  }
}