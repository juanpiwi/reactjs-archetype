var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')

const config = {
  context: path.join(__dirname, '..', 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/client.js',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=../build/styles/fonts/[name].[ext]'
      }
    ]
  },
  output: {    
    filename: 'client.min.js',
    path: './built/statics',
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://platzi-react-sfs.now.sh'
      : 'http://localhost:5000/'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    host: '0.0.0.0',
    port: 5000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      }
    })
 )
}

module.exports = config
