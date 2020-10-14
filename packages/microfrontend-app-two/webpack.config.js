const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');

const deps = require("./package.json").dependencies;

module.exports = (env = {}) => ({
  mode: 'development',
  target: "web",
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".vue", ".jsx", ".js", ".json"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, './src')
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: { loader: "vue-loader", }
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require('sass'),
              indentedSyntax: true // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true // optional
              },
            },
          },
        ],
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      remotes: {
        header: "header@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./Header": './src/components/Layouts/Header.vue',
        "./Footer": './src/components/Layouts/Footer.vue'
      },
      shared: {
        "vuetify": {
          eager: true,
          singleton: true,
          requiredVersion: deps["vuetify"],
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Remote App: Module Federation"
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 3002,
    hot: true,
  },
});
