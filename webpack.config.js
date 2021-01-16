const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './2_week/pokemon/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './2_week/dist'),
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
      template: path.resolve(__dirname, './2_week/pokemon/template/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './2_week/dist'),
    open: true,
    hot: true,
    inline: true,
  },
}
