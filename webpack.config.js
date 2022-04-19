const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js",
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    devServer: {
        port: 4000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: "head",
            scriptLoading: "defer",
        }),
        // new CopyWebpackPlugin({
        //   patterns: [{ from: "./src/global.css", to: "./style.css" }],
        // }),
    ],
};
