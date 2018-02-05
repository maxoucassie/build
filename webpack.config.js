var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   resolve: {
    extensions: ['', '.js', '.jsx']
},
module: {
    loaders: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
    },{
        test: /\.css$/,
        loader: 'style!css'
    },{
        test: /\.scss$/,
        loader: 'style!css!sass'
    }]
},
plugins: [
    new webpack.ProvidePlugin({
        fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
]
};

module.exports = config;