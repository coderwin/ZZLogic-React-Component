webpackJsonp([11],{

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(474);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SlideLoader = function (_Component) {
	  _inherits(SlideLoader, _Component);

	  function SlideLoader(props) {
	    _classCallCheck(this, SlideLoader);

	    var _this = _possibleConstructorReturn(this, (SlideLoader.__proto__ || Object.getPrototypeOf(SlideLoader)).call(this, props));

	    _this.state = {
	      loadShow: false,
	      isLoading: false,
	      loadTip: _this.props.loadTip
	    };
	    // this property和UI没有关联的私有状态管理
	    // this._noMore 是否没有更多了
	    // this._canLoadMore 是否能够加载更多
	    // this._pageNum 加载页码
	    // this._start
	    // this._startY
	    // this._curScrollTop 当前scrollTop
	    _this._curScrollTop = 0;
	    return _this;
	  }

	  _createClass(SlideLoader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-ls' },
	        _react2.default.createElement(
	          'div',
	          { id: 'slideId' },
	          this.props.children
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-ls-w', style: _extends({}, this.loadShow) },
	          _react2.default.createElement('span', { className: 'zzrc-ls-w-icon', style: _extends({}, this.loadingShow) }),
	          _react2.default.createElement(
	            'span',
	            { className: 'zzrc-ls-w-text' },
	            this.state.loadTip
	          )
	        )
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(prev, next) {
	      if (prev.loadShow == next.loadShow && prev.isLoading == next.isLoading && prev.loadTip == next.loadTip) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.initEvents();
	      //初始化 加载第一页数据
	      this._pageNum = 1;
	      this.props.loadHandler(this._pageNum);
	    }
	    // 绑定事件

	  }, {
	    key: 'initEvents',
	    value: function initEvents() {
	      var slide = document.getElementById('slideId');
	      slide.addEventListener('touchstart', this.startHandler.bind(this), false);
	      slide.addEventListener('touchmove', this.moveHandler.bind(this), false);
	      // 能取消加载时才需要endHandler
	      if (this.props.canCancel) {
	        slide.addEventListener('touchend', this.endHandler.bind(this), false);
	      }
	    }
	  }, {
	    key: 'startHandler',
	    value: function startHandler(e) {
	      this._startY = e.changedTouches[0].clientY;
	      this._start = true;
	    }
	    // move时计算是否到底部

	  }, {
	    key: 'moveHandler',
	    value: function moveHandler(e) {
	      if (!this._start) return;
	      if (this._noMore) return;
	      // 判断方向
	      if (e.changedTouches[0].clientY - this._startY > 0) return;
	      // 滑动到底部了 或者内容内有占满一屏
	      if ((this.isScrollBottom() || this.notFullPage()) && !this.state.isLoading) {
	        this.showLoading(this.props.loadTip, true);
	        this._canLoadMore = true;
	        if (!this.props.canCancel) {
	          if (this._noMore) return;
	          this.loadMore();
	        }
	      }
	    }
	    // touchend时触发加载

	  }, {
	    key: 'endHandler',
	    value: function endHandler(e) {
	      if (e.changedTouches[0].clientY - this._startY > 0 || !this.isScrollBottom()) {
	        this.closeLoading();
	        return;
	      }
	      if (this._noMore) return;
	      if (this._canLoadMore) {
	        this.loadMore();
	      }
	    }

	    // 执行加载方法

	  }, {
	    key: 'loadMore',
	    value: function loadMore() {
	      var _this2 = this;

	      new Promise(function (resolve, reject) {
	        // 异步处理
	        _this2.props.loadHandler(++_this2._pageNum, resolve, reject);
	      }).then(function (success) {
	        _this2._canLoadMore = false;
	        _this2.closeLoading();
	        // 加载成功后的提示，如‘到底了’
	        if (success && success.noMore) {
	          _this2._noMore = true;
	          _this2.showLoading(success.tip || _this2.props.noMoreTip);
	        }
	      }, function (fail) {
	        _this2._canLoadMore = false;
	        _this2.closeLoading();
	        // 下次重新加载这一页
	        // 加载失败提示，如‘加载错误,请重试’
	        if (fail) {
	          _this2.showLoading(fail.tip || _this2.props.failTip);
	        }
	      });
	    }

	    // 隐藏和显示加载提示方法

	  }, {
	    key: 'showLoading',
	    value: function showLoading(tip) {
	      var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      if (tip) {
	        this.setState({
	          loadShow: true,
	          isLoading: isLoading,
	          loadTip: tip
	        });
	        return;
	      }
	      this.setState({
	        loadShow: true,
	        isLoading: true
	      });
	    }
	  }, {
	    key: 'closeLoading',
	    value: function closeLoading() {
	      this.setState({
	        loadShow: false,
	        isLoading: false
	      });
	    }

	    // 判断是否滑动到底部相关方法

	  }, {
	    key: 'notFullPage',
	    value: function notFullPage() {
	      return document.documentElement.clientHeight >= this.getDocHeight();
	    }
	  }, {
	    key: 'isScrollBottom',
	    value: function isScrollBottom() {
	      return this.getScrollTop() + this.getClientHeight() + 20 >= this.getDocHeight();
	    }
	  }, {
	    key: 'getScrollTop',
	    value: function getScrollTop() {
	      return Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	    }
	  }, {
	    key: 'getDocHeight',
	    value: function getDocHeight() {
	      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	    }
	  }, {
	    key: 'getClientHeight',
	    value: function getClientHeight() {
	      return document.documentElement.clientHeight;
	    }
	  }, {
	    key: 'loadShow',
	    get: function get() {
	      return {
	        display: this.state.loadShow ? "block" : "none"
	      };
	    }
	  }, {
	    key: 'loadingShow',
	    get: function get() {
	      return {
	        display: this.state.isLoading ? "inline-block" : "none"
	      };
	    }
	  }]);

	  return SlideLoader;
	}(_react.Component);

	SlideLoader.propTypes = {
	  loadTip: _react2.default.PropTypes.string,
	  noMoreTip: _react2.default.PropTypes.string,
	  failTip: _react2.default.PropTypes.string,
	  loadHandler: _react2.default.PropTypes.func,
	  canCancel: _react2.default.PropTypes.bool
	};
	SlideLoader.defaultProps = {
	  loadTip: '加载中...',
	  noMoreTip: '没有更多啦',
	  failTip: "加载出错，请重试",
	  canCancel: false,
	  loadHandler: function loadHandler() {}
	};
	exports.default = SlideLoader;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SlideLoader = __webpack_require__(259);

	var _SlideLoader2 = _interopRequireDefault(_SlideLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SlideLoaderDemo = function (_Component) {
	  _inherits(SlideLoaderDemo, _Component);

	  function SlideLoaderDemo(props) {
	    _classCallCheck(this, SlideLoaderDemo);

	    var _this = _possibleConstructorReturn(this, (SlideLoaderDemo.__proto__ || Object.getPrototypeOf(SlideLoaderDemo)).call(this, props));

	    _this.state = {
	      goods: []
	    };
	    _this.LISTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (item, index) {
	      return {
	        title: '我是列表的标题' + item
	      };
	    });
	    return _this;
	  }

	  _createClass(SlideLoaderDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { textAlign: 'center', marginTop: "20px" } },
	        _react2.default.createElement(
	          'span',
	          null,
	          'SlideLoader \u6D4B\u8BD5'
	        ),
	        _react2.default.createElement(
	          _SlideLoader2.default,
	          {
	            canCancel: false,
	            loadHandler: this.loadHandler.bind(this),
	            loadTip: '\u52A0\u8F7D\u4E2D...', noMoreTip: '\u6CA1\u6709\u66F4\u591A\u5566' },
	          this.state.goods.map(function (item, index) {
	            return _react2.default.createElement(
	              'div',
	              { key: index },
	              item.title
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'loadHandler',
	    value: function loadHandler() {
	      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	      var _this2 = this;

	      var resolve = arguments[1];
	      var reject = arguments[2];

	      // setTimeout as fetch
	      setTimeout(function () {
	        _this2.setState({
	          goods: _this2.state.goods.concat(_this2.LISTS).concat(_this2.LISTS)
	        });

	        if (_this2.LISTS.length == 0) {
	          resolve && resolve({
	            tip: "没有更多啦...",
	            noMore: true
	          });
	        } else {
	          resolve && resolve();
	        }
	        //reject("加载出错，请重试");
	      }, 100);
	    }
	  }]);

	  return SlideLoaderDemo;
	}(_react.Component);

	exports.default = SlideLoaderDemo;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes spinning {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    -webkit-transform: rotate(100deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n.zzrc-ls-w {\n  text-align: center;\n  margin: 0.26666667rem 0;\n}\n.zzrc-ls-w-icon {\n  display: inline-block;\n  width: 0.8rem;\n  height: 0.8rem;\n  border-color: #ccc;\n  border-radius: 50%;\n  border-width: 0.16rem;\n  border-style: solid;\n  border-bottom-color: transparent;\n  -webkit-animation: spinning 1s linear infinite;\n}\n.zzrc-ls-w-text {\n  margin-left: 0.53333333rem;\n  line-height: 1.06666667rem;\n  font-size: 0.74666667rem;\n  color: #444444;\n  position: relative;\n  top: -0.26666667rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(457);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./SlideLoader.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./SlideLoader.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});