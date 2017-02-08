var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  entry: {
    'index': ['./components/index'],
    'ActionSheet': ['./components/ActionSheet/ActionSheet'],
    'Carousel': ['./components/Carousel/Carousel'],
    'Goods': ['./components/Goods/Goods'],
    'IMGPreview': ['./components/IMGPreview/IMGPreview'],
    'IMGScrollRow': ['./components/IMGScrollRow/IMGScrollRow'],
    'IMGSwipe': ['./components/IMGSwipe/IMGSwipe'],
    'Modal': ['./components/Modal/Modal'],
    'RefreshControl': ['./components/RefreshControl/RefreshControl'],
    'ScrollTop': ['./components/ScrollTop/ScrollTop'],
    'SlideLoader': ['./components/SlideLoader/SlideLoader'],
    'TabBar': ['./components/TabBar/TabBar'],
    'TabRow': ['./components/TabRow/TabRow'],
    'Toast': ['./components/Toast/Toast']
  },
  output: {
    path: './',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals : {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'react-router': {
      root: 'ReactRouter',
      commonjs2: 'react-router',
      commonjs: 'react-router',
      amd: 'react-router',
    },
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', "stage-0", 'react']
      }
    },{
      test: /\.(less|css)$/,
      loader: 'css!postcss!less'
      //loader: ExtractTextPlugin.extract('style', 'css!postcss!less')//'css!postcss!less'
    },{
      test: /\.(?:jpg|gif|png|svg)$/,
      loaders: [
        'url?limit=10000&name=static/img/[name].[hash:20].[ext]',
        'image-webpack'
      ]
    }]
  },
  resolve: {
    extensions: ['', '.js', 'less']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new ExtractTextPlugin('[name].css')
  ]
}
