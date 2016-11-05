const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProvidePluginConfig = new webpack.ProvidePlugin({
   $: 'jquery',
   jQuery: 'jquery'
});
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/app/index.html',
   filename: 'index.html',
   inject: 'body'
})

module.exports = {
   entry: './app/index.js',
   module: {
      loaders: [
         {
            test: /\.(js|jsx)$/,
            exclude: ['node_modules'],
            loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            exclude: ['node_modules'],
            loader: 'style-loader!css-loader'
         }
      ]
   },
   output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
   },
   plugins: [
      HTMLWebpackPluginConfig,
      ProvidePluginConfig
   ]
}