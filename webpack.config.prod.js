// Production Webpack Configuration
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const validate = require('webpack-validator');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
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
  devtool: 'source-map',
  stats: {
    errorDetails: true
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
        removeViewBox: false
      }, {
        removeEmptyAttrs: false
      }]
    }
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyWebpackPlugin([
      { from: PATHS.fonts, to: 'fonts' }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      }
    })
  ]
}];
