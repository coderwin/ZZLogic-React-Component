webpackJsonp([6],{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var Swipeable = React.createClass({
	  displayName: 'Swipeable',

	  propTypes: {
	    onSwiped: React.PropTypes.func,
	    onSwiping: React.PropTypes.func,
	    onSwipingUp: React.PropTypes.func,
	    onSwipingRight: React.PropTypes.func,
	    onSwipingDown: React.PropTypes.func,
	    onSwipingLeft: React.PropTypes.func,
	    onSwipedUp: React.PropTypes.func,
	    onSwipedRight: React.PropTypes.func,
	    onSwipedDown: React.PropTypes.func,
	    onSwipedLeft: React.PropTypes.func,
	    flickThreshold: React.PropTypes.number,
	    delta: React.PropTypes.number,
	    preventDefaultTouchmoveEvent: React.PropTypes.bool,
	    stopPropagation: React.PropTypes.bool,
	    nodeName: React.PropTypes.string,
	    trackMouse: React.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    return {
	      x: null,
	      y: null,
	      swiping: false,
	      start: 0
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      flickThreshold: 0.6,
	      delta: 10,
	      preventDefaultTouchmoveEvent: true,
	      stopPropagation: false,
	      nodeName: 'div'
	    };
	  },

	  calculatePos: function calculatePos(e) {
	    var x = void 0,
	        y = void 0;
	    // If not a touch, determine point from mouse coordinates
	    if (e.changedTouches) {
	      x = e.changedTouches[0].clientX;
	      y = e.changedTouches[0].clientY;
	    } else {
	      x = e.clientX;
	      y = e.clientY;
	    }

	    var xd = this.state.x - x;
	    var yd = this.state.y - y;

	    var axd = Math.abs(xd);
	    var ayd = Math.abs(yd);

	    var time = Date.now() - this.state.start;
	    var velocity = Math.sqrt(axd * axd + ayd * ayd) / time;

	    return {
	      deltaX: xd,
	      deltaY: yd,
	      absX: axd,
	      absY: ayd,
	      velocity: velocity
	    };
	  },

	  eventStart: function eventStart(e) {
	    if (e.touches && e.touches.length > 1) {
	      return;
	    }
	    // If not a touch, determine point from mouse coordinates
	    var touches = e.touches;
	    if (!touches) {
	      touches = [{ clientX: e.clientX, clientY: e.clientY }];
	    }
	    if (this.props.stopPropagation) e.stopPropagation();

	    this.setState({
	      start: Date.now(),
	      x: touches[0].clientX,
	      y: touches[0].clientY,
	      swiping: false
	    });
	  },

	  eventMove: function eventMove(e) {
	    if (!this.state.x || !this.state.y || e.touches && e.touches.length > 1) {
	      return;
	    }

	    var cancelPageSwipe = false;
	    var pos = this.calculatePos(e);

	    if (pos.absX < this.props.delta && pos.absY < this.props.delta) {
	      return;
	    }

	    if (this.props.stopPropagation) e.stopPropagation();

	    if (this.props.onSwiping) {
	      this.props.onSwiping(e, pos.deltaX, pos.deltaY, pos.absX, pos.absY, pos.velocity);
	    }

	    if (pos.absX > pos.absY) {
	      if (pos.deltaX > 0) {
	        if (this.props.onSwipingLeft || this.props.onSwipedLeft) {
	          this.props.onSwipingLeft && this.props.onSwipingLeft(e, pos.absX);
	          cancelPageSwipe = true;
	        }
	      } else {
	        if (this.props.onSwipingRight || this.props.onSwipedRight) {
	          this.props.onSwipingRight && this.props.onSwipingRight(e, pos.absX);
	          cancelPageSwipe = true;
	        }
	      }
	    } else {
	      if (pos.deltaY > 0) {
	        if (this.props.onSwipingUp || this.props.onSwipedUp) {
	          this.props.onSwipingUp && this.props.onSwipingUp(e, pos.absY);
	          cancelPageSwipe = true;
	        }
	      } else {
	        if (this.props.onSwipingDown || this.props.onSwipedDown) {
	          this.props.onSwipingDown && this.props.onSwipingDown(e, pos.absY);
	          cancelPageSwipe = true;
	        }
	      }
	    }

	    this.setState({ swiping: true });

	    if (cancelPageSwipe && this.props.preventDefaultTouchmoveEvent) {
	      e.preventDefault();
	    }
	  },

	  eventEnd: function eventEnd(e) {
	    if (this.state.swiping) {
	      var pos = this.calculatePos(e);

	      if (this.props.stopPropagation) e.stopPropagation();

	      var isFlick = pos.velocity > this.props.flickThreshold;

	      this.props.onSwiped && this.props.onSwiped(e, pos.deltaX, pos.deltaY, isFlick, pos.velocity);

	      if (pos.absX > pos.absY) {
	        if (pos.deltaX > 0) {
	          this.props.onSwipedLeft && this.props.onSwipedLeft(e, pos.deltaX, isFlick);
	        } else {
	          this.props.onSwipedRight && this.props.onSwipedRight(e, pos.deltaX, isFlick);
	        }
	      } else {
	        if (pos.deltaY > 0) {
	          this.props.onSwipedUp && this.props.onSwipedUp(e, pos.deltaY, isFlick);
	        } else {
	          this.props.onSwipedDown && this.props.onSwipedDown(e, pos.deltaY, isFlick);
	        }
	      }
	    }

	    this.setState(this.getInitialState());
	  },

	  render: function render() {
	    var newProps = Object.assign({}, this.props, {
	      onTouchStart: this.eventStart,
	      onTouchMove: this.eventMove,
	      onTouchEnd: this.eventEnd,
	      onMouseDown: this.props.trackMouse && this.eventStart,
	      onMouseMove: this.props.trackMouse && this.eventMove,
	      onMouseUp: this.props.trackMouse && this.eventEnd
	    });

	    delete newProps.onSwiped;
	    delete newProps.onSwiping;
	    delete newProps.onSwipingUp;
	    delete newProps.onSwipingRight;
	    delete newProps.onSwipingDown;
	    delete newProps.onSwipingLeft;
	    delete newProps.onSwipedUp;
	    delete newProps.onSwipedRight;
	    delete newProps.onSwipedDown;
	    delete newProps.onSwipedLeft;
	    delete newProps.flickThreshold;
	    delete newProps.delta;
	    delete newProps.preventDefaultTouchmoveEvent;
	    delete newProps.stopPropagation;
	    delete newProps.nodeName;
	    delete newProps.children;
	    delete newProps.trackMouse;

	    return React.createElement(this.props.nodeName, newProps, this.props.children);
	  }
	});

	module.exports = Swipeable;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(81);

	__webpack_require__(468);

	var _Swipeable = __webpack_require__(76);

	var _Swipeable2 = _interopRequireDefault(_Swipeable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IMGPreview = function (_Component) {
	  _inherits(IMGPreview, _Component);

	  function IMGPreview(props) {
	    _classCallCheck(this, IMGPreview);

	    var _this = _possibleConstructorReturn(this, (IMGPreview.__proto__ || Object.getPrototypeOf(IMGPreview)).call(this, props));

	    _this.state = {
	      currentIndex: 0,
	      currentTranslateX: 0,
	      toast: false,
	      tosatMsg: _this.props.toastMsg
	    };
	    _this.initProps();
	    return _this;
	  }

	  _createClass(IMGPreview, [{
	    key: 'initProps',
	    value: function initProps() {
	      console.log(this.props.imgs);
	      this.isAmaniting = false;
	      this.imgsURL = this.getImgsURL();
	      this.clientWidth = document.documentElement.clientWidth;
	      this.clientHeight = document.documentElement.clientHeight;
	      this.imgsWidth = (this.props.imgs.length + 2) * this.clientWidth + 'px';
	      this.isMultiple = this.props.imgs.length > 1;
	    }
	  }, {
	    key: 'getImgsURL',
	    value: function getImgsURL() {
	      if (typeof this.props.imgs[0] == 'string') {
	        return this.props.imgs;
	      }
	      var imgsURL = [];
	      for (var i = 0, len = this.props.imgs.length; i < len; i++) {
	        imgsURL.push(this.props.imgs[i].src);
	      }
	      console.log(imgsURL);
	      return imgsURL;
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state.currentTranslateX == nextState.currentTranslateX && this.state.toast == nextState.toast) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setTransform(this.refs.preview, 'translate3d(' + this.state.currentTranslateX + ',0,0)');
	    }
	  }, {
	    key: 'imageSwipe',
	    value: function imageSwipe(type) {
	      var _this2 = this;

	      // 正在移动 不能继续滑动
	      if (this.isAmaniting) return;
	      if (this.state.currentIndex == this.props.imgs.length - 1 && type == 'left' && this.props.toastShow) {
	        this.setState({ toast: true });
	        setTimeout(function () {
	          _this2.setState({ toast: false });
	        }, 1000);
	        return;
	      }
	      if (this.state.currentIndex == 0 && type == 'right' && this.props.toastShow) {
	        this.setState({ toast: true });
	        setTimeout(function () {
	          _this2.setState({ toast: false });
	        }, 1000);
	        return;
	      }

	      var swipeWidth = this.clientWidth,
	          imgsLength = this.props.imgs.length,
	          currentIndex = this.state.currentIndex;

	      if (type == 'left') {
	        this.setState({
	          isAmaniting: true,
	          currentIndex: currentIndex + 1,
	          currentTranslateX: -1 * (currentIndex + 1) * this.clientWidth + 'px'
	        });
	      } else {
	        this.setState({
	          isAmaniting: true,
	          currentIndex: currentIndex - 1,
	          currentTranslateX: -1 * (currentIndex - 1) * this.clientWidth + 'px'
	        });
	      }
	      this.setTransition(this.refs.preview, 'transform ' + this.props.duration + 'ms ease-in-out');

	      setTimeout(function () {
	        _this2.isAmaniting = false;
	      }, this.props.duration);

	      console.log('swipe-' + type + this.state.currentIndex);
	    }
	  }, {
	    key: 'setTransition',
	    value: function setTransition(ele, val) {
	      ele.style.transition = val;
	      ele.style.WebkitTransition = '-webkit-' + val;
	      ele.style.MozTransition = '-moz-' + val;
	      ele.style.OTransition = '-o-' + val;
	    }
	  }, {
	    key: 'setTransform',
	    value: function setTransform(ele, val) {
	      ele.classList.remove('zzrc-swipe-reset-transiton');
	      ele.style.transform = val;
	      ele.style.WebkitTransform = val;
	      ele.style.MozTransform = val;
	      ele.style.OTransform = val;
	    }
	  }, {
	    key: 'callback',
	    value: function callback() {
	      this.props.nextTask();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        _Swipeable2.default,
	        {
	          onSwipedRight: this.imageSwipe.bind(this, 'right'),
	          onSwipedLeft: this.imageSwipe.bind(this, 'left') },
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-preview',
	            onClick: this.callback.bind(this) },
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-preview-imgs', style: { width: this.imgsWidth }, ref: 'preview' },
	            this.imgsURL.map(function (item, index) {
	              console.log(item);
	              return _react2.default.createElement('img', {
	                key: index,
	                className: 'zzrc-preview-item',
	                src: item,
	                style: { width: _this3.clientWidth + 'px' }
	              });
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-preview-index', style: {
	                top: this.props.indexPosition,
	                display: this.props.indexShow && this.isMultiple ? 'block' : 'none' } },
	            this.props.indexType == 'process' ? this.props.imgs.map(function (item, index) {
	              return _react2.default.createElement(
	                'span',
	                {
	                  className: 'zzrc-preview-index-item',
	                  key: index },
	                '-'
	              );
	            }) : _react2.default.createElement(
	              'span',
	              null,
	              this.state.currentIndex + 1 + "/" + this.props.imgs.length
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { display: this.state.toast ? 'block' : 'none' }, className: 'zzrc-preview-toast' },
	            this.props.toastMsg
	          )
	        )
	      );
	    }
	  }]);

	  return IMGPreview;
	}(_react.Component);

	IMGPreview.propTypes = {
	  imgs: _react2.default.PropTypes.array,
	  autoPlay: _react2.default.PropTypes.bool,
	  duration: _react2.default.PropTypes.number,
	  indexShow: _react2.default.PropTypes.bool,
	  indexType: _react2.default.PropTypes.string,
	  indexColor: _react2.default.PropTypes.string,
	  indexPosition: _react2.default.PropTypes.string,
	  currentIndexColor: _react2.default.PropTypes.string,
	  toastShow: _react2.default.PropTypes.bool,
	  toastMsg: _react2.default.PropTypes.string
	};
	IMGPreview.defaultProps = {
	  /**
	   * 可直接传入url数组，也可以传入对象数组
	   * @imgs[index].src 图片路径
	   * @imgs[index].href 图片跳转链接
	   */
	  imgs: [],

	  /**
	   * 自动轮播间隔时间，<=duration不启用
	   */
	  autoPlay: true,

	  /**
	   * 轮播滑动过程耗时
	   * 单位：ms
	   */
	  duration: 600,

	  /**
	   * 展示当前位置的几种不同的方式[显示数字/显示进度条等]
	   */
	  indexType: 'number',

	  /**
	   * 是否显示当前是第几张
	   */
	  indexShow: true,

	  /**
	   * index颜色
	   */
	  indexColor: '#dbd8d8',

	  /**
	   * 圆点位置（离底部高度）
	   */
	  indexPosition: '1rem',

	  /**
	   * 正在展示的图片对应圆点的颜色
	   */
	  currentIndexColor: '#ffffff',

	  /**
	   * 是否展示滑到首位的toast
	   */
	  toastShow: true,

	  /**
	   * toast提示文案
	   */
	  toastMsg: '不能再翻了'
	};

	var Preview = function () {
	  function Preview() {
	    _classCallCheck(this, Preview);
	  }

	  _createClass(Preview, [{
	    key: 'init',
	    value: function init(props) {
	      var _this4 = this;

	      this.bindHashChange();
	      this._preview = document.createElement('div');
	      document.body.appendChild(this._preview);
	      props.nextTask = function () {
	        _this4.close();
	        props.callback && props.callback();
	      };
	      (0, _reactDom.render)(_react2.default.createElement(IMGPreview, props), this._preview);
	      return this;
	    }
	  }, {
	    key: 'bindHashChange',
	    value: function bindHashChange() {
	      var _this5 = this;

	      var hide = function hide() {
	        _this5.close()[('hashchange', 'popstate')].map(function (event) {
	          window.removeEventListener(event, hide, false);
	        });
	      };
	      ['hashchange', 'popstate'].map(function (event) {
	        window.addEventListener(event, hide, false);
	      });
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      document.body.removeChild(this._preview);
	      this._preview = null;
	      // this._preview.remove()
	    }
	  }]);

	  return Preview;
	}();

	exports.default = Preview;

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IMGPreview = __webpack_require__(245);

	var _IMGPreview2 = _interopRequireDefault(_IMGPreview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IMGPreviewDemo = function (_Component) {
	  _inherits(IMGPreviewDemo, _Component);

	  function IMGPreviewDemo(props) {
	    _classCallCheck(this, IMGPreviewDemo);

	    var _this = _possibleConstructorReturn(this, (IMGPreviewDemo.__proto__ || Object.getPrototypeOf(IMGPreviewDemo)).call(this, props));

	    _this.imgs = [{
	      src: 'http://pic1.58cdn.com.cn/p1/big/n_v1bl2lwkadoesvqeovmmsq_d016075a4f426d09.png',
	      href: 'http://baidu.com'
	    }, {
	      src: 'http://pic1.58cdn.com.cn/p1/big/n_v1bl2lwwihkimfqvk22brq_6666f81f38fd44ce.png',
	      href: 'http://baidu.com'
	    }, {
	      src: 'http://pic1.58cdn.com.cn//p1/big/n_v1bl2lwklxlxlvooxwzzaq_d016075a4f426d09.png',
	      href: 'http://baidu.com'
	    }];
	    return _this;
	  }

	  _createClass(IMGPreviewDemo, [{
	    key: 'close',
	    value: function close() {
	      console.log('关闭回调');
	    }
	  }, {
	    key: 'preview',
	    value: function preview() {
	      this._preview = new _IMGPreview2.default().init({
	        imgs: this.imgs,
	        callback: this.close.bind(this)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { textAlign: 'center', marginTop: "20px" } },
	        _react2.default.createElement(
	          'li',
	          null,
	          '\u56FE\u7247\u5927\u56FE\u9884\u89C8IMGPreview'
	        ),
	        _react2.default.createElement(
	          'li',
	          { onClick: this.preview.bind(this) },
	          '\u70B9\u6211\u9884\u89C8'
	        )
	      );
	    }
	  }]);

	  return IMGPreviewDemo;
	}(_react.Component);

	exports.default = IMGPreviewDemo;

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-preview {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: #000;\n}\n.zzrc-preview-imgs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n.zzrc-preview-index {\n  display: block;\n  position: absolute;\n  color: #fff;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.zzrc-preview-toast {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  color: #fff;\n  background: #000;\n  opacity: .7;\n  padding: 0.26666667rem;\n  border-radius: 0.21333333rem;\n  font-size: 0.74666667rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(452);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./IMGPreview.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./IMGPreview.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});