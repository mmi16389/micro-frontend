const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
var path = require('path');

module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  entry: "./src/main.js",

  resolve: {
    extensions: [".jsx", ".js", ".json",".ts"],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
				test: /\.ts$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'ts-loader',
						options: {
							// Skip type checking for speed
							transpileOnly: false
						}
					}
				]
			},
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      remotes: {
      },
      exposes: {
      }
    }),
    new HtmlWebPackPlugin({
      template: "public/index.html",
    }),
  ],
};
