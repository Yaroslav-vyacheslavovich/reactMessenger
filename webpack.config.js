const path = require("path");
const webpack = require('webpack');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
const getFileName = (ext = "[ext]", name = "[name]") => {
    return isDev ? `${name}.${ext}` : `${name}.[contenthash].${ext}`
}

module.exports = {
    mode: process.env.NODE_ENV || "development",
    context: path.resolve(__dirname, "src"),
    entry: {
       app: path.resolve(__dirname, 'src/index.js',)
    },
    output: {
       path: path.resolve(__dirname, "build"),
    },
    plugins:[
        new miniCssExtractPlugin({
            filename : `./css/${getFileName("css")}`,
            chunkFilename : getFileName("css", "[id]"),
            ignoreOrder : false,
        }),
        new htmlWebpackPlugin({
            title:"messenger",
            template : path.resolve(__dirname, "public/index.html"),
            inject : true,
            minify:{
                removeComments: !isDev,
                removeAttributeQuotes: !isDev,
            }
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [isDev ? "style-loader" : {
                    loader: miniCssExtractPlugin.loader,
                    options: {
                        publicPath: path.resolve(__dirname, "build/css"),
                    }
                },
            {
                loader: "css-loader",
                options: {
                    sourceMap: isDev,
                },
            }
            ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "build"),
        open: true,
        hot: true,
        port:3000,
    }
};