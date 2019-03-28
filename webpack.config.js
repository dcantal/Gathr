const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/gathr_entry.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
            },
            {
                test: /\.mp4$/,
                loader: 'url-loader?limit=10000&mimetype=video/mp4'
            },
            {
                test: /\.(svg|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
