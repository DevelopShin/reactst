const path = require("path");

module.exports = {
  name: 'wordrelay-settings',
  node: 'development',
  devtool: 'eval',
  
  entry: { //입력

  },

  output: { //출력
    path: path.join(__dirname, 'dist')

  }
}