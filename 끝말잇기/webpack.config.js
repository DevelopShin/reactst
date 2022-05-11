const path = require("path");
const refreshwebpack = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  name: 'wordrelay-settings',
  mode: 'development',
  // devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: { //입력

    app: ['./client']
  },
  module: {

    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      // exclude: path.resolve(__dirname, 'node_modules/'),
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['react-refresh/babel']
      }
    }]
  },
  plugins: [
    new refreshwebpack(),
  ],
  output: { //출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',


  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  }
};