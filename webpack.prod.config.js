const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  entry: {
    app: ['./src/index.ts'],
  },
  optimization: {
    minimize: true,
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          safari10: true,
        },
      }),
    ],
  },
  plugins: [],
  stats: {
    children: true,
  },
});
