const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').load();
const env = process.env.NODE_ENV || "development";
require('babel-polyfill');

module.exports = {
    entry: [
        'babel-polyfill', './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            exclude: /(node_modules|bower_components|config)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            },
            test: /\.jsx?$/
        },
        {
            test:/\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        inline: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(env)
            }
        })
    ]
};