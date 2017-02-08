webpackJsonp([5],{

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

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(469);

	var _Swipeable = __webpack_require__(76);

	var _Swipeable2 = _interopRequireDefault(_Swipeable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IMGSwipe = function (_Component) {
	  _inherits(IMGSwipe, _Component);

	  function IMGSwipe(props) {
	    _classCallCheck(this, IMGSwipe);

	    var _this = _possibleConstructorReturn(this, (IMGSwipe.__proto__ || Object.getPrototypeOf(IMGSwipe)).call(this, props));

	    _this.state = {
	      currentIndex: 0,
	      currentTranslateX: 0
	    };
	    _this.initProps();
	    return _this;
	  }

	  _createClass(IMGSwipe, [{
	    key: 'initProps',
	    value: function initProps() {

	      this.isAmaniting = false;

	      this.imgsURL = this.getImgsURL();
	      this.clientWidth = document.documentElement.clientWidth;
	      this.initLeft = -this.clientWidth + 'px';
	      this.imgsWidth = (this.props.imgs.length + 2) * this.clientWidth + 'px';
	      this.isMultiple = this.props.imgs.length > 1;
	      this.spacingVal = this.getSpacingVal();
	    }
	  }, {
	    key: 'px2REM',
	    value: function px2REM(px) {
	      return px * 320 / 750 / 16 + "rem";
	    }
	  }, {
	    key: 'getImgsURL',
	    value: function getImgsURL() {
	      if (typeof this.props.imgs[0] == 'string') {
	        return this.props.imgs;
	      }
	      var IMGURL = [];
	      for (var i = 0, len = this.props.imgs.length; i < len; i++) {
	        IMGURL.push(this.props.imgs[i].src);
	      }
	      return IMGURL;
	    }
	  }, {
	    key: 'getSpacingVal',
	    value: function getSpacingVal() {
	      var val = this.props.indicatorsSpacing,
	          num = /^[\d\.]+/g.exec(val)[0],
	          unit = val.replace(num, '');

	      return '0 ' + parseFloat(num) / 2 + unit + ' 0 ' + parseFloat(num) / 2 + unit;
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      console.log(this.state.currentTranslateX, nextState.currentTranslateX);
	      if (this.state.currentTranslateX == nextState.currentTranslateX) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setTransform(this.refs.swipe, 'translate3d(' + this.state.currentTranslateX + ',0,0)');
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
	    key: 'resetTransiton',
	    value: function resetTransiton(el) {
	      el.classList.add('zzrc-swipe-reset-transiton');
	    }
	  }, {
	    key: 'imageSwipe',
	    value: function imageSwipe(type) {
	      var _this2 = this;

	      // 正在移动 不能继续滑动
	      if (this.isAmaniting) return;

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

	      this.setTransition(this.refs.swipe, 'transform ' + this.props.duration + 'ms ease-in-out');

	      setTimeout(function () {
	        _this2.isAmaniting = false;
	      }, this.props.duration);

	      setTimeout(function () {
	        console.log(_this2.state.currentIndex);
	        // last img
	        if (_this2.state.currentIndex < 0) _this2.resetBoundaryImg('right');

	        // first img
	        if (_this2.state.currentIndex == imgsLength) _this2.resetBoundaryImg('left');
	      });
	    }

	    /*
	     * reset
	     */

	  }, {
	    key: 'resetBoundaryImg',
	    value: function resetBoundaryImg(direction) {
	      var _this3 = this;

	      var newIndex = 0,
	          swipe = this.refs.swipe,
	          childrenCount = this.props.imgs.length;

	      if (direction === 'right') {
	        newIndex = childrenCount - 1;
	      }
	      this.setState({
	        currentIndex: newIndex
	      });

	      setTimeout(function () {
	        _this3.setState({
	          currentTranslateX: -_this3.clientWidth * newIndex + 'px'
	        });
	        _this3.resetTransiton(swipe);
	      }, this.props.duration);
	    }
	  }, {
	    key: 'clickImg',
	    value: function clickImg(index) {
	      if (this.props.imgs[index].href) {
	        location.href = this.props.imgs[index].href;
	      } else if (this.clickHandler) {
	        this.clickHandler(index);
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // var hammer = new Hammer(document.querySelector(".zzrc-swipe"))
	      // hammer.on("swipeleft", e => {
	      //   if (this.disableCustom) return;
	      //   this.imageSwipe('left')
	      // })
	      // hammer.on("swiperight", e => {
	      //   if (this.disableCustom) return;
	      //   this.imageSwipe('right')
	      // })
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      return _react2.default.createElement(
	        _Swipeable2.default,
	        {
	          onSwipedRight: this.imageSwipe.bind(this, 'right'),
	          onSwipedLeft: this.imageSwipe.bind(this, 'left')
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-swipe', style: { height: this.px2REM(parseInt(this.props.height)) } },
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-swipe-imgs', style: { width: this.imgsWidth, left: this.initLeft }, ref: 'swipe' },
	            _react2.default.createElement('div', {
	              className: 'zzrc-swipe-item ' + (this.showWholeImg ? 'zzrc-show-whole' : ''),
	              style: { width: this.clientWidth + 'px', backgroundImage: 'url(' + this.imgsURL[this.imgsURL.length - 1] + ')' },
	              onClick: this.clickImg.bind(this, this.imgsURL.length - 1) }),
	            this.imgsURL.map(function (item, index) {
	              return _react2.default.createElement('div', {
	                key: index,
	                onClick: _this4.clickImg.bind(_this4, index),
	                className: 'zzrc-swipe-item ' + (_this4.showWholeImg ? 'zzrc-show-whole' : ''),
	                style: { width: _this4.clientWidth + 'px', backgroundImage: 'url(' + item + ')' } });
	            }),
	            _react2.default.createElement('div', {
	              onClick: this.clickImg.bind(this, 0),
	              className: 'zzrc-swipe-item ' + (this.showWholeImg ? 'zzrc-show-whole' : ''),
	              style: { width: this.clientWidth + 'px', backgroundImage: 'url(' + this.imgsURL[0] + ')' } })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-swipe-points', style: {
	                bottom: this.props.indicatorsPosition,
	                display: this.props.showIndicators && this.isMultiple ? 'block' : 'none' } },
	            this.props.imgs.map(function (item, index) {
	              return _react2.default.createElement('span', {
	                className: 'zzrc-swipe-point',
	                key: index,
	                style: {
	                  backgroundColor: index == _this4.state.currentIndex ? _this4.props.indicatorsActiveColor : _this4.props.indicatorsColor,
	                  width: _this4.props.indicatorsSize,
	                  height: _this4.props.indicatorsSize,
	                  margin: _this4.spacingVal
	                } });
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return IMGSwipe;
	}(_react.Component);

	IMGSwipe.propTypes = {
	  imgs: _react2.default.PropTypes.array,
	  auto: _react2.default.PropTypes.number,
	  disableCustom: _react2.default.PropTypes.bool,
	  duration: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.string,
	  clickHandler: _react2.default.PropTypes.func,
	  showWholeImg: _react2.default.PropTypes.bool,
	  showIndicators: _react2.default.PropTypes.bool,
	  indicatorsColor: _react2.default.PropTypes.string,
	  indicatorsActiveColor: _react2.default.PropTypes.string,
	  indicatorsPosition: _react2.default.PropTypes.string,
	  indicatorsSize: _react2.default.PropTypes.string,
	  indicatorsSpacing: _react2.default.PropTypes.string
	};
	IMGSwipe.defaultProps = {
	  /* 可直接传入url数组，也可以传入对象数组
	   * @imgs[index].src 图片路径
	   * @imgs[index].href 图片跳转链接
	   */
	  imgs: [],
	  /*
	   * 自动轮播间隔时间，<=duration不启用
	   */
	  auto: 0,
	  /*
	   * 是否禁用手动轮播
	   */
	  disableCustom: false,
	  /*
	   * 轮播滑动过程耗时
	   * 单位：ms
	   */
	  duration: 600,
	  /*
	   * 轮播框高度
	   * 单位：rem || px
	   */
	  height: '160px',
	  /*
	   * 点击某图片时执行
	   * @argument [Number] index 所点击图片对应index
	   */
	  clickHandler: function clickHandler() {},
	  /*
	   * 针对不规则图片（长宽比不等于container长宽比）
	   * false默认居中显示，只显示图片中间部分；
	   * true图片长宽设为100%，显示全貌，但图片变形，不建议使用
	   */
	  showWholeImg: false,
	  /*
	   * 是否显示底部小圆点
	   */
	  showIndicators: true,
	  /*
	   * 圆点默认颜色
	   */
	  indicatorsColor: '#dbd8d8',
	  /*
	   * 正在展示的图片对应圆点的颜色
	   */
	  indicatorsActiveColor: '#ffffff',
	  /*
	   * 圆点位置（离底部高度）
	   */
	  indicatorsPosition: '0.53rem',
	  /*
	   * 圆点尺寸
	   */
	  indicatorsSize: '0.53rem',
	  /*
	   * 圆点之间的距离
	   */
	  indicatorsSpacing: '0.53rem'
	};
	exports.default = IMGSwipe;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IMGSwipe = __webpack_require__(248);

	var _IMGSwipe2 = _interopRequireDefault(_IMGSwipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IMGSwipeDemo = function (_Component) {
	  _inherits(IMGSwipeDemo, _Component);

	  function IMGSwipeDemo(props) {
	    _classCallCheck(this, IMGSwipeDemo);

	    var _this = _possibleConstructorReturn(this, (IMGSwipeDemo.__proto__ || Object.getPrototypeOf(IMGSwipeDemo)).call(this, props));

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

	  _createClass(IMGSwipeDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_IMGSwipe2.default, { imgs: this.imgs, height: '260px' });
	    }
	  }]);

	  return IMGSwipeDemo;
	}(_react.Component);

	exports.default = IMGSwipeDemo;

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-swipe {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.zzrc-swipe-imgs {\n  height: 100%;\n  position: absolute;\n  left: 0;\n}\n.zzrc-swipe-item {\n  height: 100%;\n  float: left;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.zzrc-show-whole {\n  background-size: 100% 100%;\n}\n.zzrc-swipe-points {\n  position: absolute;\n  bottom: 0.21333333rem;\n  left: 50%;\n  z-index: 10;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n.zzrc-swipe-point {\n  display: inline-block;\n  width: 0.21333333rem;\n  height: 0.21333333rem;\n  border-radius: 50%;\n  margin: 0 0.05333333rem 0 0.05333333rem;\n}\n.zzrc-swipe-reset-transiton {\n  -webkit-transition: -webkit-transform 0ms!important;\n  transition: -webkit-transform 0ms!important;\n  transition: transform 0ms!important;\n  transition: transform 0ms, -webkit-transform 0ms!important;\n}\n", ""]);

	// exports


/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(453);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./IMGSwipe.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./IMGSwipe.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});