const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: { app: "./src/index.js" },
  output: {
    path: path.resolve(__dirname),
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin({ filename: "[name]-bundle.css" })]
};
