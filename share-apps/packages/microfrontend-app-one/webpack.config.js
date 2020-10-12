var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin") 

module.exports = {
    mode: 'development',
    entry: { app: './src/main.ts' },
    output: {
        publicPath: 'http://localhost:8081/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'assets': path.resolve(__dirname, './src/assets'),
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, './src')
        }
    },
    devServer: {
        port: 8081,
        noInfo: false,
        overlay: true,
        contentBase: path.join(__dirname, "dist"),
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: "micro_frontend_one",
            filename: "remoteEntry.js",
            remotes: {
                app_2: "micro_frontend_two@http://localhost:8082/remoteEntry.js",
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            title: 'Micro frontend one'
        }),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('./')
        })
    ]
}