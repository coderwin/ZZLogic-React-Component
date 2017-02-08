webpackJsonp([7],{

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

/***/ 247:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IMGScrollRowDemo = function (_Component) {
	  _inherits(IMGScrollRowDemo, _Component);

	  function IMGScrollRowDemo(props) {
	    _classCallCheck(this, IMGScrollRowDemo);

	    var _this = _possibleConstructorReturn(this, (IMGScrollRowDemo.__proto__ || Object.getPrototypeOf(IMGScrollRowDemo)).call(this, props));

	    _this.defaultProps = {
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
	      }, {
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
	        height: 100,
	        width: 60,
	        split: 5
	      },
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    };
	    return _this;
	  }

	  _createClass(IMGScrollRowDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_IMGScrollRow2.default, { imgs: this.defaultProps.imgs, height: this.defaultProps.height, tapCallback: this.defaultProps.tapCallback });
	    }
	  }]);

	  return IMGScrollRowDemo;
	}(_react.Component);

	exports.default = IMGScrollRowDemo;

/***/ }

});