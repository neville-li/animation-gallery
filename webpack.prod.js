const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map"
})




// module.exports = {
//     mode: "production",
//     entry: "./src/app.js",
//     output: {
//         filename: "bundle.js",
//         path: path.join(__dirname, "public")
//     },
//     devtool: "source-map",
//     plugins: [
//         new CleanWebpackPlugin(["public"]),
//         new HtmlWebpackPlugin({
//             title: "Animation Gallery"
//         })
//     ],
//     watchOptions: {
//         ignored: /node_modules/
//     },
//     module : {
//         rules: [
//             {
//                 test:/\.js$/,
//                 exclude:/node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             }, 
//             {
//                 test: /\.s?css$/,
//                 exclude:/node_modules/,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                     "sass-loader"
//                 ]
//             }
//         ]
//     }
// }