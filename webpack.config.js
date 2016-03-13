var path = require('path');
var config = {
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/main.jsx')],
    output: {
        path: path.resolve(__dirname, 'public/build'),
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
        }, {
            test: require.resolve("react"), loader: "expose?React"
        }, {
            test: require.resolve("react-dom"), loader: "expose?ReactDOM"
        }]
    }
};

module.exports = config;
