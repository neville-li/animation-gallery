const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    plugins: [
        new CleanWebpackPlugin(["public"]),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Animation Gallery"
        })
    ],
    watchOptions: {
        ignored: /node_modules/
    },
    module : {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, 
            {
                test: /\.s?css$/,
                exclude:/node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}