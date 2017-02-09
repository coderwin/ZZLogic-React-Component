var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsWebpackPlugin = require('assets-webpack-plugin');
var path = require('path');
// 辅助函数
var utils = require('./utils');
var fullPath  = utils.fullPath;
var pickFiles = utils.pickFiles;

// 项目根路径
var ROOT_PATH = fullPath('../');
// 项目源码路径
var SRC_PATH = ROOT_PATH + '/src';
// 产出路径
var DIST_PATH = fullPath('../../') + '/site'

// node_modules
var NODE_MODULES_PATH =  ROOT_PATH + '/node_modules';

var __DEV__ = process.env.NODE_ENV !== 'production';

var args = process.argv;

// conf
// import api from 'conf/api';
var alias = pickFiles({
  id: /(conf\/[^\/]+).js$/,
  pattern: SRC_PATH + '/conf/*.js'
});

// components
// import Alert from 'components/alert';
alias = Object.assign(alias, pickFiles({
  id: /(components\/[^\/]+)/,
  pattern: SRC_PATH + '/components/*/index.js'
}));

// reducers
// import reducers from 'reducers/index';
alias = Object.assign(alias, pickFiles({
  id: /(reducers\/[^\/]+).js/,
  pattern: SRC_PATH + '/js/reducers/*'
}));

// actions
// import actions from 'actions/index';
alias = Object.assign(alias, pickFiles({
  id: /(actions\/[^\/]+).js/,
  pattern: SRC_PATH + '/js/actions/*'
}));




var config = {
  context: SRC_PATH,
  entry: {
    app: ['babel-polyfill', SRC_PATH + '/main.js']
  },
  output: {
    path: DIST_PATH,
    filename: __DEV__ ? 'static/js/[name].js' : 'static/js/[name].[chunkhash].js',
    chunkFilename: __DEV__ ? 'static/[name].chunk.js' : 'static/js/[name].[chunkhash].chunk.js'
  },
  module: {},
  resolve: {
    root: SRC_PATH,
    alias: alias
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new AssetsWebpackPlugin({
    //   filename: 'asset-manifest.json',
    //   path: DIST_PATH
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    })
  ]
};

// loaders
var CACHE_PATH = ROOT_PATH + '/cache';
config.module.loaders = [];

// 使用 babel 编译 jsx、es6
config.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
    exclude: /node_modules/
});


// 编译 less
if (__DEV__) {
  config.module.loaders.push({
    test: /\.(less|css)$/,
    loaders: ['style', 'css', 'postcss', 'less']
  });
} else {
  config.module.loaders.push({
    test: /\.(less|css)$/,
    loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
  });
  config.plugins.push(
    new ExtractTextPlugin('static/css/[name].[contenthash:20].css')
  );
}

// css autoprefix
var precss = require('precss');
var autoprefixer = require('autoprefixer');
config.postcss = function() {
  return [precss, autoprefixer];
}

// 图片路径处理，压缩
config.module.loaders.push({
  test: /\.(?:jpg|gif|png|svg)$/,
  loaders: [
    'url?limit=10000&name=static/img/[name].[hash:20].[ext]',
    'image-webpack'
  ]
});

// 压缩 js, css
if (!__DEV__) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  );
}

// 去掉重复模块
if (!__DEV__) {
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
}

// html 页面
var HtmlwebpackPlugin = require('html-webpack-plugin');
config.plugins.push(
  new HtmlwebpackPlugin({
    filename: 'index.html',
    chunks: ['app', 'vendor'],
    template: ROOT_PATH + '/index.html',
    minify: __DEV__ ? false : {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  })
);

// px=>rem 1px
config.plugins.push(function() {
  this.plugin('compilation', function(compilation) {

    compilation.plugin('html-webpack-plugin-after-emit', function(file, callback) {
      var manifest = '';
      var flexable = '(function(){var k=document,i=k.documentElement,g=k.querySelector(\'meta[name="viewport"]\'),l;function j(){var a=i.getBoundingClientRect().width;i.style.fontSize=(a/320*16)+"px";}function h(){var a=1;g=k.createElement("meta");g.setAttribute("name","viewport");g.setAttribute("content","initial-scale="+a+", maximum-scale="+a+", minimum-scale="+a+", user-scalable=no");i.firstElementChild.appendChild(g)}h();j();window.addEventListener("resize",function(){clearTimeout(l);l=setTimeout(j,100)},false);window.addEventListener("pageshow",function(a){if(a.persisted){clearTimeout(l);l=setTimeout(j,100)}},false)})();';
      // var hairline = ';(function(){if(window.devicePixelRatio&&devicePixelRatio>=2){var a=document.createElement("div");a.style.border=".5px solid transparent";document.body.appendChild(a);if(a.offsetHeight==1){var b=document.querySelector("html");if(devicePixelRatio==2){b.classList.add("dpr2")}else{if(devicePixelRatio==3){b.classList.add("dpr3")}}}document.body.removeChild(a)}})();';
      
      // manifest in HTML

      Object.keys(compilation.assets).forEach(function(filename) {
        if (/\/?manifest.[^\/]*js$/.test(filename)) {
          manifest = compilation.assets[filename].source();
        }
      });

      var FM ='<script>' +flexable+manifest+ '<\/script>';
      // var HL ='<script>' +hairline+ '<\/script>';

      var htmlSource = file.html.source();
      htmlSource = htmlSource.replace(/(<\/head>)/, FM + '$1');
      // htmlSource = htmlSource.replace(/(<body>)/, '$1' + HL);
      file.html.source = function() {
        return htmlSource;
      };

      callback(null, file);
    });
  });
});
module.exports = config;
