const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    devtool: "cheap-module-eval-source-map",
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
                test: /\.s?css/,
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