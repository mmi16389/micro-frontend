const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');

module.exports = (env = {}) => ({
  mode: 'development',
  target: "web",
  entry: path.resolve(__dirname, "./src/main.js"),
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  // output: {
  //   publicPath: 'http://localhost:8082/',
  //   filename: '[name].js'
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
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      name: "micro_frontend_two",
      filename: "remoteEntry.js",
      remotes: {
        app_2: "micro_frontend_two@http://localhost:8082/remoteEntry.js",
      },
      exposes: {
        "./Header": './src/components/Header.vue'
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('./')
    }),
  ],
  devServer: {
    port: 8082,
    noInfo: true,
    overlay: true,
    contentBase: path.join(__dirname, "dist"),
  },
  performance: {
    hints: false
  }
});
