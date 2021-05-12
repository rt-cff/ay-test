const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app/"),
      "@components": path.resolve(__dirname, "src/components/"),
    },
    extensions: [".js", ".jsx", "..."],
  },
};
