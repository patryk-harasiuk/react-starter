const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const ENV = getEnvironment();

function getEnvironment() {
  const envOptions = ["development", "production", "none"];
  const env = process.env.NODE_ENV;

  return envOptions.includes(env) ? env : "production";
}

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },

  mode: ENV,

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
    new BundleAnalyzerPlugin(),

    // new CopyWebpackPlugin({
    //   patterns: [{ from: "./src/global.css", to: "./style.css" }],
    // }),
  ],
};
