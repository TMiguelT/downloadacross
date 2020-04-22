const ExtensionReloader = require('webpack-extension-reloader');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: "cheap-module-source-map",
    entry: {
        popup: './reactsrc/index.js',
        background: './background.js'
    },  
    plugins: [
        new ExtensionReloader({
            // manifest: path.resolve(__dirname, 'manifest.json'),
            entries: {
                // extensionPage: 'popup',
                background: 'background'
            }
        }),
        new CopyPlugin([
            {from: './manifest.json'},
            {from: './reactsrc/index.html'},
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};