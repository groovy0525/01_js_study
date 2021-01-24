const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './3_week/router/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './3_week/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './3_week/router/template/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './3_week/dist'),
    open: true,
    hot: true,
    inline: true,
  },
}
