const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  entry: {
    app: path.join(__dirname, "/client/src", "index.js"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Prakrishth",
      favicon: false,
      showErrors: true,
      cache: true,
      template: path.join(__dirname, "/client/src", "index.html"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new MiniCssExtractPlugin(),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: "Prakrishth",
      short_name: "Prakrishth",
      description: "Prakrishth",
      background_color: "#ffffff",
      theme_color: "#3367D6",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("./client/public/images/prakrishth.png"),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons"),
          purpose: "any maskable",
          ios: true,
        },
      ],
      orientation: "portrait",
      display: "standalone",
      start_url: ".",
      inject: true,
      fingerprints: true,
      ios: false,
      publicPath: null,
      includeDirectory: true,
      splash: null,
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname + "/client", "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};
