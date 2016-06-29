module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app-client.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},

	module: {
		loaders: [

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}

			}
		]		
	},

	devServer: {
		contentBase: './public',
		port: 8000,
		colors: true,
		historyApiFallback: true,
		inline: true
	}

}