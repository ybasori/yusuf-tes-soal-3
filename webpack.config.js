const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: "eval-source-map",
    resolve: {
      extensions: [".js", ".css", ".scss"],
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve("node_modules")],
                use: [
                    'babel-loader'
                ]
            },
            {
              test: /\.(scss|sass|css)$/i,
              exclude: [path.resolve("node_modules")],
              use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                use: ["url-loader?limit=100000"],
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            encoding: false,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    output: {
      path: path.resolve("public/assets"),
      filename: "bundle.js",
    },
}