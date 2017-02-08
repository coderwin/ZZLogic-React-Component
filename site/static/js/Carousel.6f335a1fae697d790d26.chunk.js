webpackJsonp([8],{

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

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(466);

	var _Swipeable = __webpack_require__(76);

	var _Swipeable2 = _interopRequireDefault(_Swipeable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Carousel = function (_Component) {
	  _inherits(Carousel, _Component);

	  function Carousel(props) {
	    _classCallCheck(this, Carousel);

	    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

	    _this.state = {
	      selected: 0,
	      currentTranslateX: 0
	    };
	    _this.isAmaniting = false;
	    _this.clientWidth = document.documentElement.clientWidth;
	    return _this;
	  }

	  _createClass(Carousel, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state.currentTranslateX == nextState.currentTranslateX) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setTransform(this.refs.pages, 'translate3d(' + this.state.currentTranslateX + ',0,0)');
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
	    key: 'pannelChange',
	    value: function pannelChange(type) {
	      var _this2 = this;

	      // 正在移动 不能继续滑动
	      if (this.isAmaniting) return;

	      if (this.state.selected == this.props.items.length - 1 && type == 'left') {
	        return;
	      }
	      if (this.state.selected == 0 && type == 'right') {
	        return;
	      }

	      var swipeWidth = this.clientWidth,
	          imgsLength = this.props.items.length,
	          selected = this.state.selected;

	      if (type == 'left') {
	        this.setState({
	          isAmaniting: true,
	          selected: selected + 1,
	          currentTranslateX: -1 * (selected + 1) * this.clientWidth + 'px'
	        });
	      } else {
	        this.setState({
	          isAmaniting: true,
	          selected: selected - 1,
	          currentTranslateX: -1 * (selected - 1) * this.clientWidth + 'px'
	        });
	      }
	      this.setTransition(this.refs.pages, 'transform ' + this.props.duration + 'ms ease-in-out');

	      setTimeout(function () {
	        _this2.isAmaniting = false;
	      }, this.props.duration);

	      console.log('swipe-' + type + this.state.selected);
	    }
	  }, {
	    key: 'getRealPX',
	    value: function getRealPX(px) {
	      var width = document.documentElement.clientWidth;
	      var rem2px = width / 320 * 16;
	      return px * 320 / 750 / 16 * 1 * rem2px;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        _Swipeable2.default,
	        {
	          onSwipedRight: this.pannelChange.bind(this, 'right'),
	          onSwipedLeft: this.pannelChange.bind(this, 'left') },
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-carousel' },
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'zzrc-carousel-pages clearfix',
	              style: { width: this.props.items.length * this.clientWidth + 'px' }, ref: 'pages' },
	            this.props.items.map(function (page, index) {
	              return _react2.default.createElement(
	                'ul',
	                { key: index, className: 'page', style: { width: _this3.clientWidth } },
	                page.map(function (item, index1) {
	                  return _react2.default.createElement(
	                    'li',
	                    {
	                      key: index1, className: 'icon',
	                      style: { width: _this3.clientWidth / 5 - _this3.getRealPX(20) + 'px' } },
	                    _react2.default.createElement('img', { src: item.icon || 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200', alt: '显示' + item.text }),
	                    _react2.default.createElement(
	                      'div',
	                      null,
	                      item.text
	                    )
	                  );
	                })
	              );
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-carousel-points' },
	            this.props.items.map(function (page, index) {
	              return _react2.default.createElement('span', { key: index, className: 'point', style: {
	                  background: index == _this3.state.selected && 'red'
	                } });
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return Carousel;
	}(_react.Component);

	Carousel.PropTypes = {
	  items: _react2.default.PropTypes.array,
	  height: _react2.default.PropTypes.string,
	  selected: _react2.default.PropTypes.number,
	  showDots: _react2.default.PropTypes.bool,
	  beforeChange: _react2.default.PropTypes.func,
	  afterChange: _react2.default.PropTypes.func
	};
	Carousel.defaultProps = {
	  items: [[{
	    icon: '', // 显示的图标
	    text: '图标1', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标2', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标3', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标4', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标5', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标6', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }], [{
	    icon: '', // 显示的图标
	    text: '图标7', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标8', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标9', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标10', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标11', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标12', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }], [{
	    icon: '', // 显示的图标
	    text: '图标13', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标14', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }, {
	    icon: '', // 显示的图标
	    text: '图标15', // 显示的文案
	    link: '', // 跳转URL
	    tapCallback: function tapCallback() {
	      console.log('我被点击了');
	    }
	  }]],
	  selected: 0,
	  showDots: true,
	  duration: 400,
	  beforeChange: function beforeChange() {},
	  afterChange: function afterChange() {}
	};
	exports.default = Carousel;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Carousel = __webpack_require__(241);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CarouselDemo = function (_Component) {
	  _inherits(CarouselDemo, _Component);

	  function CarouselDemo(props) {
	    _classCallCheck(this, CarouselDemo);

	    var _this = _possibleConstructorReturn(this, (CarouselDemo.__proto__ || Object.getPrototypeOf(CarouselDemo)).call(this, props));

	    _this.items = [[{
	      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200', // 显示的图标
	      text: '图标1', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200', // 显示的图标
	      text: '图标2', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200', // 显示的图标
	      text: '图标3', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200', // 显示的图标
	      text: '图标4', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200', // 显示的图标
	      text: '图标5', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200', // 显示的图标
	      text: '图标6', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标7', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标8', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标9', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标10', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }], [{
	      icon: '', // 显示的图标
	      text: '图标11', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标12', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标13', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标14', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标15', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标16', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }, {
	      icon: '', // 显示的图标
	      text: '图标17', // 显示的文案
	      link: '', // 跳转URL
	      tapCallback: function tapCallback() {
	        console.log('我被点击了');
	      }
	    }]];
	    return _this;
	  }

	  _createClass(CarouselDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Carousel2.default, { items: this.items, selected: 0, showDots: true })
	      );
	    }
	  }]);

	  return CarouselDemo;
	}(_react.Component);

	exports.default = CarouselDemo;

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-carousel {\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 0.26666667rem solid #f5f5f5;\n  padding-top: 0.26666667rem;\n  padding-bottom: 0.42666667rem;\n}\n.zzrc-carousel-pages .page {\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.zzrc-carousel-pages .page .icon {\n  text-align: center;\n  font-size: 0.74666667rem;\n  color: #444;\n  padding: 0.26666667rem;\n}\n.zzrc-carousel-pages .page .icon img {\n  border-radius: 0.10666667rem;\n  width: 2.13333333rem;\n}\n.zzrc-carousel-points {\n  text-align: center;\n}\n.zzrc-carousel-points .point {\n  display: inline-block;\n  width: 0.32rem;\n  height: 0.32rem;\n  background: #ccc;\n  border-radius: 50%;\n  margin: 0 0.21333333rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(450);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./Carousel.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./Carousel.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});