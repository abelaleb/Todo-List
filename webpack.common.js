const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Test for .css files
        use: ["style-loader", "css-loader"], // Use these loaders for CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
module.exports = config;
