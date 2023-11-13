const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const HOST = 'localhost';
const PORT = 3000;

module.exports = merge(config, {
  mode: 'development',
  entry: {
    app: [`webpack-dev-server/client?http://${HOST}:${PORT}`, 'webpack/hot/only-dev-server', './src/index.ts'],
  },
  devServer: {
    hot: true,
    host: HOST,
    port: PORT,
  },
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules/,
  },
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        configFile: './tsconfig.json',
      },
    }),
    new ESLintPlugin({
      context: path.resolve(__dirname, 'src'),
      extensions: ['js', 'jsx'],
      quiet: false,
      lintDirtyModulesOnly: true,
      threads: true,
    }),
  ],
  stats: {
    children: false,
  },
});
