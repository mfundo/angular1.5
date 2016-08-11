var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {

	context : __dirname + '/src',
	entry : './app.js',
	output : {
		filename : 'bundle.js'
	},
	watch : true,
	devtool : 'sourcemap',
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				include : __dirname,
				loader : 'babel-loader',
				query : {
					presets : [ 'es2015' ]
				}
			},
			{
				test : /\.css$/,
				loader : 'style!css!autoprefixer-loader'
			},
			{
				test : /\.scss$/,
				loader : "css-loader!sass-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			}
		]
	},
	resolve : {
		extensions : [ '', '.js' ]
	}

};
