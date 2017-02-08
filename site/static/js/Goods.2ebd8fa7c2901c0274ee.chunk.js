webpackJsonp([3],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IMGLoad = function (_Component) {
	  _inherits(IMGLoad, _Component);

	  function IMGLoad() {
	    _classCallCheck(this, IMGLoad);

	    return _possibleConstructorReturn(this, (IMGLoad.__proto__ || Object.getPrototypeOf(IMGLoad)).apply(this, arguments));
	  }

	  _createClass(IMGLoad, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      new LazyLoad(this.refs.img);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("img", { ref: "img", "data-src": this.props.src });
	    }
	  }]);

	  return IMGLoad;
	}(_react.Component);

	exports.default = IMGLoad;

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(138);

	var _IMGLazyLoad = __webpack_require__(107);

	var _IMGLazyLoad2 = _interopRequireDefault(_IMGLazyLoad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IMGScrollRow = function (_Component) {
	  _inherits(IMGScrollRow, _Component);

	  function IMGScrollRow(props) {
	    _classCallCheck(this, IMGScrollRow);

	    var _this = _possibleConstructorReturn(this, (IMGScrollRow.__proto__ || Object.getPrototypeOf(IMGScrollRow)).call(this, props));

	    _this.state = {
	      containerWidth: '100%'
	    };
	    return _this;
	  }

	  _createClass(IMGScrollRow, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.initContainerWidth();
	    }
	  }, {
	    key: 'initContainerWidth',
	    value: function initContainerWidth() {
	      var width = 0;
	      var items = this.refs.container.children;
	      var len = items.length;
	      for (var i = 0; i < len; i++) {
	        console.log(items[i].offsetWidth);
	        width += items[i].offsetWidth;
	      }
	      this.setState({
	        containerWidth: width + (len - 1) * this.props.view.split
	      });
	    }
	  }, {
	    key: 'handleIMGClick',
	    value: function handleIMGClick(item, e) {
	      item.tapCallback && item.tapCallback();
	      this.props.tapCallback && this.props.tapCallback();
	      if (item.href) {
	        location.href = item.href;
	      }
	    }
	  }, {
	    key: 'px2REM',
	    value: function px2REM(px) {
	      return px * 320 / 750 / 16 + "rem";
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-IMGScrollRow', ref: 'wrap' },
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'zzrc-IMGScrollRow-container clearfix',
	            style: { width: this.state.containerWidth }, ref: 'container' },
	          this.props.imgs.map(function (item, index) {
	            return _react2.default.createElement(
	              'div',
	              {
	                key: index,
	                className: 'zzrc-IMGScrollRow-item',
	                onClick: _this2.handleIMGClick.bind(_this2, item),
	                style: {
	                  width: _this2.px2REM(parseInt(_this2.props.view.width)),
	                  height: _this2.px2REM(parseInt(_this2.props.view.height)),

	                  marginRight: index == _this2.props.imgs.length - 1 ? 0 : _this2.props.view.split + 'px'
	                } },
	              _react2.default.createElement(_IMGLazyLoad2.default, { src: item.url || item })
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return IMGScrollRow;
	}(_react.Component);

	IMGScrollRow.propTypes = {
	  imgs: _react2.default.PropTypes.array,
	  view: _react2.default.PropTypes.object,
	  tapCallback: _react2.default.PropTypes.func
	};
	IMGScrollRow.defaultProps = {
	  imgs: [{
	    url: 'http://pic3.58cdn.com.cn/zhuanzh/n_v1bl2lwxqsdh6vos6ciiya_750_1274.jpg',
	    href: 'http://www.baidu.com',
	    tapCallback: function tapCallback() {
	      console.log(0);
	    }
	  }, {
	    url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
	    href: 'http://www.baidu.com',
	    tapCallback: function tapCallback() {
	      console.log(1);
	    }
	  }, {
	    url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
	    href: 'http://www.baidu.com',
	    tapCallback: function tapCallback() {
	      console.log(2);
	    }
	  }, {
	    url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
	    href: 'http://www.baidu.com',
	    tapCallback: function tapCallback() {
	      console.log(3);
	    }
	  }, {
	    url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
	    href: 'http://www.baidu.com',
	    tapCallback: function tapCallback() {
	      console.log(4);
	    }
	  }],
	  view: {
	    height: 200,
	    width: 160,
	    split: 2,
	    splitColor: '#ccc'
	  },
	  tapCallback: function tapCallback() {
	    console.log('我被点击了');
	  }
	};
	exports.default = IMGScrollRow;

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  display: none;\n}\n.zzrc-IMGScrollRow {\n  width: 100%;\n  overflow: auto;\n}\n.zzrc-IMGScrollRow-container {\n  -webkit-overflow-scrolling: touch;\n  overflow-y: hidden;\n}\n.zzrc-IMGScrollRow-item {\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  float: left;\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.zzrc-IMGScrollRow-item:last-child {\n  margin-right: 0;\n}\n", ""]);

	// exports


/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./IMGScrollRow.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./IMGScrollRow.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IMGScrollRow = __webpack_require__(108);

	var _IMGScrollRow2 = _interopRequireDefault(_IMGScrollRow);

	var _TransImg2Url = __webpack_require__(266);

	var _TransImg2Url2 = _interopRequireDefault(_TransImg2Url);

	__webpack_require__(467);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Goods = function (_Component) {
	  _inherits(Goods, _Component);

	  function Goods(props) {
	    _classCallCheck(this, Goods);

	    var _this = _possibleConstructorReturn(this, (Goods.__proto__ || Object.getPrototypeOf(Goods)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Goods, [{
	    key: 'handleClick',
	    value: function handleClick(info, e) {
	      if (this.props.infoClick) {
	        this.props.infoClick(info, e);
	      }
	      // const ua = window.navigator.userAgent
	      // const iszz = ua.toLowerCase().indexOf('zhuanzhuan') > 0
	      // const DETAIL_URL = 'http://m.zhuanzhuan.58.com/Mzhuanzhuan/zzapp/detail/index.html'
	      // if(iszz){
	      //   ZZAPP.enterDetail({
	      //     infoId: info.infoId
	      //   })
	      // }else{
	      //   location.href = DETAIL_URL+ '?infoId='+ info.infoId
	      // }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var itemClass = this.props.itemClass;
	      var info = this.props.info;

	      return _react2.default.createElement(
	        'div',
	        {
	          className: itemClass + " zzrc-goods",
	          onClick: this.handleClick.bind(this, info) },
	        _react2.default.createElement(
	          'div',
	          { className: itemClass + '-nav zzrc-goods-nav' },
	          _react2.default.createElement('span', {
	            className: 'zzrc-goods-nav-avatar',
	            style: { backgroundImage: 'url(' + info.userPic + ')' } }),
	          _react2.default.createElement(
	            'span',
	            { className: 'zzrc-goods-nav-username' },
	            info.userName
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'zzrc-goods-nav-time' },
	            info.time
	          )
	        ),
	        _react2.default.createElement(_IMGScrollRow2.default, { src: _TransImg2Url2.default.handleBundle(info.imgs.join("|")) }),
	        _react2.default.createElement(
	          'div',
	          { className: itemClass + '-price zzrc-goods-price' },
	          _react2.default.createElement(
	            'span',
	            null,
	            '￥' + info.price
	          ),
	          info.originPrice && info.originPrice > 0 ? _react2.default.createElement(
	            'span',
	            null,
	            '￥' + info.originPrice
	          ) : ''
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: itemClass + '-describe zzrc-goods-describe' },
	          info.describe
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: itemClass + '-label zzrc-goods-label' },
	          info.infoLabels.map(function (item, index) {
	            return _react2.default.createElement(
	              'span',
	              { key: index },
	              item
	            );
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: itemClass + '-footer zzrc-goods-footer' },
	          _react2.default.createElement('span', { className: 'zzrc-goods-address' }),
	          _react2.default.createElement(
	            'span',
	            null,
	            info.address
	          )
	        )
	      );
	    }
	  }]);

	  return Goods;
	}(_react.Component);

	Goods.PropTypes = {
	  info: _react2.default.PropTypes.object,
	  type: _react2.default.PropTypes.string,
	  itemClass: _react2.default.PropTypes.string,
	  infoClick: _react2.default.PropTypes.func
	};
	Goods.defaultProps = {
	  type: 'card',
	  itemClass: 'goods-item',
	  info: {
	    "userId": "43055704613652",
	    "infoId": "806029615090417668",
	    "userName": "两个小妞的妈咪",
	    "infoTitle": "千趣会 连衣裙",
	    "describe": "日本代购，没穿几次，搭配短款羽绒服啥的特别漂亮，两岁左右宝宝穿。搭配短款羽绒服啥的特别漂亮",
	    "infoLabels": ['全新'],
	    "price": 1212,
	    "originPrice": 0,
	    "time": "2分钟前",
	    "address": "合肥 政务",
	    "userPic": "http://zzpic4.58cdn.com.cn/zhuanzh/n_v1bl2lwkfacejvqqqxzuva.png",
	    "imgs": ["n_v1bkujjd75mbdfqc6c6bha.jpg", "n_v1bl2lwkh7mbdfr4kvuyga.jpg", "n_v1bj3gzr76mbdfq7wtmrra.jpg"]
	  },
	  infoClick: function infoClick() {}
	};
	exports.default = Goods;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Goods = __webpack_require__(243);

	var _Goods2 = _interopRequireDefault(_Goods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GoodsDemo = function (_Component) {
	  _inherits(GoodsDemo, _Component);

	  function GoodsDemo(props) {
	    _classCallCheck(this, GoodsDemo);

	    var _this = _possibleConstructorReturn(this, (GoodsDemo.__proto__ || Object.getPrototypeOf(GoodsDemo)).call(this, props));

	    _this.info = {
	      "userId": "43055704613652",
	      "infoId": "806029615090417668",
	      "userName": "两个小妞的妈咪",
	      "infoTitle": "千趣会 连衣裙",
	      "describe": "日本代购，没穿几次，搭配短款羽绒服啥的特别漂亮，两岁左右宝宝穿,两岁左右宝宝穿,两岁左右宝宝穿,两岁左右宝宝穿",
	      "infoLabels": ['全新'],
	      "price": 1212,
	      "originPrice": 0,
	      "time": "2分钟前",
	      "address": "合肥 政务",
	      "userPic": "http://zzpic4.58cdn.com.cn/zhuanzh/n_v1bl2lwkfacejvqqqxzuva.png",
	      "imgs": ["n_v1bkujjd75mbdfqc6c6bha.jpg", "n_v1bl2lwkh7mbdfr4kvuyga.jpg", "n_v1bj3gzr76mbdfq7wtmrra.jpg"]
	    };
	    return _this;
	  }

	  _createClass(GoodsDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Goods2.default, { info: this.info, type: 'card', itemClass: 'goods-item' }),
	        _react2.default.createElement(_Goods2.default, { info: this.info, type: 'card', itemClass: 'goods-item' }),
	        _react2.default.createElement(_Goods2.default, { info: this.info, type: 'card', itemClass: 'goods-item' }),
	        this.props.children
	      );
	    }
	  }]);

	  return GoodsDemo;
	}(_react.Component);

	exports.default = GoodsDemo;

/***/ },

/***/ 266:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 *  处理图片尺寸的js
	 */

	var _ref = [window.navigator.appVersion.match(/iphone/gi), window.devicePixelRatio],
	    isIPhone = _ref[0],
	    _ref$ = _ref[1],
	    dpr = _ref$ === undefined ? 1 : _ref$;
	var wxReg = /^http\:\/\/wx.qlogo.cn/,
	    imgReg = /^http\:\/\/img\.58cdn\.com\.cn/,
	    prefixReg = /^http:\/\/pic[1-8]\.58cdn\.com\.cn\/zhuanzh\//,
	    prefixPic = /^http:\/\/pic\.58\.com\//,
	    suffix = /(\.(png|jpg|gif))/;


	function randomPrefix() {
	  var prefix = "http://picx.58cdn.com.cn/zhuanzh/";
	  var random = Math.ceil(Math.random() * 8);
	  return prefix.replace('x', random);
	}

	exports.default = {

	  /**
	   *  处理单个url(或者不带前缀)图片
	   *
	   *  eg: http://pic2.58cdn.com.cn/zhuanzh/xxx.png
	   *      n_dgspdjfkogsgdaflfkg.png
	   */
	  handleSingle: function handleSingle(str) {
	    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
	    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

	    var size = '_' + width + '_' + height;

	    if (!str || str === '') {

	      return '';
	    }

	    if (wxReg.test(str)) {
	      var index = str.lastIndexOf('/');
	      str = str.substr(0, index);
	      return str + '/96';
	    }

	    if (imgReg.test(str)) {
	      return str;
	    }

	    if (prefixPic.test(str)) {
	      return str.replace(suffix, size + '$1');
	    }

	    return prefixReg.test(str) ? str.replace(suffix, size + '$1') : randomPrefix() + str.replace(suffix, size + '$1');
	  },


	  /**
	   *  处理多个url组成（用|分割）的字符串
	   *
	   *  eg: http://pic2.58cdn.com.cn/zhuanzh/xxx.png|http://pic1.58cdn.com.cn/zhuanzh/xxx.png|http://pic4.58cdn.com.cn/zhuanzh/xxx.png
	   *      n_dgspdjfkogsgdaflfkg.png|n_dgspdjfkogsgdaflfkg.png|n_dgspdjfkogsgdaflfkg.png|n_dgspdjfkogsgdaflfkg.png
	   */
	  handleBundle: function handleBundle(str) {
	    var _this = this;

	    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
	    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;


	    //if(source)

	    var arr = str ? str.split('|') : [];
	    if (!arr.length) {
	      return [];
	    }

	    var result = [];

	    arr.map(function (value) {
	      result.push(_this.handleSingle(value, width, height));
	    });

	    return result;
	  }
	};

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-goods {\n  padding: 0.8rem;\n  font-size: 0.8rem;\n  border-top: 0.32rem solid #f5f5f5;\n}\n.zzrc-goods-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 1.6rem;\n  margin-bottom: 0.53333333rem;\n}\n.zzrc-goods-nav-avatar {\n  height: 1.6rem;\n  width: 1.6rem;\n  display: inline-block;\n  background-size: cover;\n  border-radius: 50%;\n  margin-right: 0.53333333rem;\n}\n.zzrc-goods-nav-time {\n  position: absolute;\n  right: 0.8rem;\n  font-size: 0.69333333rem;\n  color: #aaaeb9;\n}\n.zzrc-goods-imgs {\n  height: 5.33333333rem;\n  line-height: 5.33333333rem;\n}\n.zzrc-goods-price {\n  margin-top: 0.53333333rem;\n  color: #ff583f;\n}\n.zzrc-goods-describe {\n  margin-top: 0.53333333rem;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.zzrc-goods-label {\n  margin-top: 0.53333333rem;\n  display: inline-block;\n  color: #fe5117;\n  font-size: 0.64rem;\n  width: 1.81333333rem;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  text-align: center;\n  background-color: #fce0cb;\n  margin-right: 0.21333333rem;\n  border-radius: 0.10666667rem;\n}\n.zzrc-goods-footer {\n  margin-top: 10px;\n  color: #aaaeb9;\n}\n", ""]);

	// exports


/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(451);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./Goods.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./Goods.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});