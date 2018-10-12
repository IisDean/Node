var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './a.js',
	output: {
		filename: './b.js',
	},
	devtool: 'source-map',
	devServer: {
		port: 1377
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: 'style-loader!css-loader'
			},{
				test: /\.(jpg|png|gif|jpeg)$/i,
				loaders: 'url-loader?limit=4096&name=image/[hash:10].[ext]'
			},{
				test: /\.html$/,
				loaders: 'html-withimg-loader'
			},{
				test: /\.(svg|ttf|woff|woff2)$/i,
				loaders: 'url-loader?limit=4096&name=image/[hash:10].[ext]'
			},
		]
	},
	plugins: [
		new webpack.BannerPlugin('this js for dean;'),
		new htmlWebpackPlugin({
			'template': './index.html',
			'filename': './index.min.html'
		})
	]
}