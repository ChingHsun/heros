const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { path: path.join(__dirname, "dist"), filename: "index.bundle.js",  publicPath: "/" },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    devServer: {  contentBase: "./",
    historyApiFallback:  true,
        hot: true
    },
 
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                 use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/dist", "index.html"),
        }),
    ],
};



// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// module: {
//         rules: [
//             { 
//                 test: /\.(js|jsx)$/, 
//                 exclude: /node_modules/,
//                  use: ["babel-loader"] 
//             },
//             {
//                 test: /\.(css|scss)$/,
//                 use: ["style-loader", "css-loader"],
//             },
//             { 
//                 test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
//                 use: ["file-loader"] 
//             },
//         ],
//     },

//   devServer: {
//     contentBase: "./dist",
//     historyApiFallback: { index: "", disableDotRule: true },
//     },

// };