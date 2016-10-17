// Development Webpack Configuration
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const validate = require('webpack-validator');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
};

const PATHS = {
  app: path.join(__dirname, 'assets/js/app.js'),
  images: path.join(__dirname, 'assets/images/'),
  fonts: path.join(__dirname, 'assets/fonts/'),
  build: path.join(__dirname, 'static')
};

module.exports = [{
  name: 'app',
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
  stats: {
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    publicPath: false
  },
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, '/assets/js'),
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', ['css-loader',
        'postcss-loader', 'sass-loader'
      ])
    }, {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file?name=images/[name].[ext]',
        'image-webpack'
      ]
    }]
  },
  postcss: function() {
    return [autoprefixer, precss];
  },
  sassLoader: {
    includePaths: [
      path.join(__dirname, '/node_modules/foundation-sites/scss'),
      path.join(__dirname, '/node_modules/motion-ui')
    ]
  },
  imageWebpackLoader: {
    progressive: true,
    optimizationLevel: 7,
    interlaced: false,
    pngquant: {
      quality: "65-90",
      speed: 4
    },
    svgo: {
      plugins: [{
        removeEmptyAttrs: true
      }]
    }
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new webpack.DefinePlugin(GLOBALS),
    new CopyWebpackPlugin([
      { from: PATHS.fonts, to: 'fonts' }
    ]),
    new DashboardPlugin(dashboard.setData)
  ]
}];
