var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
    devtool: 'source-map',
    entry: ['./app/index.jsx', './app/assets/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, "./build/"),
        filename: "app.[hash].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                    publicPath: "./build/"
                })
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig,
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin({filename:"main.[contenthash].css"})
],
    devServer: {
        port: 8081,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        }
    }
};