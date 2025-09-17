const path = require("path");

const config = {
  devServer: {
    historyApiFallback: true,
  },
  // Production optimizations for better caching
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 10,
        },
        common: {
          name: "common",
          minChunks: 2,
          chunks: "all",
          priority: 5,
          reuseExistingChunk: true,
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: "runtime",
    },
  },
  // Add file hashing for better caching
  output: {
    filename:
      process.env.NODE_ENV === "production"
        ? "static/js/[name].[contenthash:8].js"
        : "static/js/[name].js",
    chunkFilename:
      process.env.NODE_ENV === "production"
        ? "static/js/[name].[contenthash:8].chunk.js"
        : "static/js/[name].chunk.js",
  },
  // Performance hints
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = config;
