'use strict';
const webpack = require('webpack');
const path = require('path');
const node_modules_dir = path.resolve('node_modules');

function staticDirectory() {
	return path.resolve(__dirname, 'static');
}

const filesWithoutHash = true;

module.exports = {
	context: __dirname,
	entry: {
		index: './static/index.es6',
	},
	module: {
		rules: [
			{
				test: /\.es6$/,
				exclude: [node_modules_dir],
				use: [
					{
						loader: 'babel-loader',
					}

				]
			},
			{
				test: /\.tsx?$/,
				exclude: [node_modules_dir],
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.without-tests.json',
							silent: true,
						}
					}
				]
			},
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			Backbone: 'backbone',
		}),
	],
	output: {
		path: path.join(__dirname, 'static/bundles'),
		publicPath: '/static/bundles/',
		filename: '[name].js',
		chunkFilename: '[name].js',
		pathinfo: false,
	},
	mode: 'development',
	optimization: {
		runtimeChunk: 'single',
	},
	devtool: false,
	resolve: {
		alias: {
			jquery: '@tradingview/jquery/jquery-1.7.2.js',
		},
		extensions: ['*', '.ts', '.tsx', '.es6', '.js'],
		modules: [
			staticDirectory(),
			'node_modules',
		],
	},
	stats: {
		children: false,
	},
};
