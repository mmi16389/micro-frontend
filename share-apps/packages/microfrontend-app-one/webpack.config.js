const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env = {}) => ({
    mode: 'development',
    entry: path.resolve(__dirname, "./src/main.js"),
    devtool: "source-map",
    // output: {
    //     publicPath: 'http://localhost:8081/',
    //     filename: '[name].js'
    // },
    output: {
        publicPath: "auto",
    },
    resolve: {
        extensions: [".vue", ".jsx", ".js", ".json"],
        alias: {
            // this isn't technically needed, since the default `vue` entry for bundlers
            // is a simple `export * from '@vue/runtime-dom`. However having this
            // extra re-export somehow causes webpack to always invalidate the module
            // on the first HMR update and causes the page to reload.
            // vue: "@vue/runtime-dom",
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: { limit: 8192 },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: !env.prod },
                    },
                    "css-loader",
                ],
            },
        ],
    },
    devServer: {
        port: 3001,
        noInfo: false,
        overlay: true,
        contentBase: path.join(__dirname),
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new ModuleFederationPlugin({
            name: "micro_frontend_one",
            filename: "remoteEntry.js",
            remotes: {
                header: "header@http://localhost:3002/remoteEntry.js",
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html", 
            chunks: ["main"],
        })
    ]
});