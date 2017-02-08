webpackJsonp([9],{

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(86);

	__webpack_require__(476);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	exports.default = (0, _reactRouter.withRouter)((_temp = _class = function (_Component) {
	  _inherits(TabRow, _Component);

	  function TabRow(props) {
	    _classCallCheck(this, TabRow);

	    var _this = _possibleConstructorReturn(this, (TabRow.__proto__ || Object.getPrototypeOf(TabRow)).call(this, props));

	    _this.state = {
	      containerWidth: '100%',
	      activeId: _this.props.activeId
	    };
	    return _this;
	  }

	  _createClass(TabRow, [{
	    key: 'handleActive',
	    value: function handleActive(item, e) {
	      var _item$activeCallback, _props$activeCallback;

	      // 执行点击回调
	      item.activeCallback && (_item$activeCallback = item.activeCallback).call.apply(_item$activeCallback, [this].concat(Array.prototype.slice.call(arguments)));
	      this.props.activeCallback && (_props$activeCallback = this.props.activeCallback).call.apply(_props$activeCallback, [this].concat(Array.prototype.slice.call(arguments)));

	      this.setState({
	        activeId: e.target.getAttribute('data-id')
	      });

	      var offsetLeft = e.target.offsetLeft + e.target.offsetWidth / 2;
	      if (offsetLeft <= document.documentElement.clientWidth / 2) {
	        this.refs.wrap.scrollLeft = 0;
	        return;
	      }
	      this.refs.wrap.scrollLeft = offsetLeft - document.documentElement.clientWidth / 2;
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
	        containerWidth: width
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.initContainerWidth();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var height = this.props.height - 10 + 'px';
	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-tabrow', ref: 'wrap' },
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'zzrc-tabrow-container',
	            style: { width: this.state.containerWidth + 1 }, ref: 'container' },
	          this.props.tabs.map(function (item, index) {
	            return _react2.default.createElement(
	              'span',
	              {
	                key: index,
	                'data-id': item.id,
	                className: 'zzrc-tabrow-item',
	                style: {
	                  height: height, lineHeight: height,
	                  color: _this2.state.activeId == index ? _this2.props.activeColor : '#000',
	                  backgroundColor: _this2.state.activeId == index ? _this2.props.activeBgColor : '#fff'
	                },
	                onClick: _this2.handleActive.bind(_this2, item) },
	              item.text
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return TabRow;
	}(_react.Component), _class.propTypes = {
	  tabs: _react2.default.PropTypes.array,
	  height: _react2.default.PropTypes.number,
	  activeId: _react2.default.PropTypes.number,
	  activeColor: _react2.default.PropTypes.string,
	  activeBgColor: _react2.default.PropTypes.string,
	  activeBgImg: _react2.default.PropTypes.string,
	  activeCallback: _react2.default.PropTypes.func
	}, _class.defaultProps = {
	  tabs: [{
	    text: '首页',
	    icon: '',
	    link: '/',
	    activeCallback: null
	  }, {
	    text: '发现',
	    icon: '',
	    link: '/IMGPreview',
	    activeCallback: null
	  }, {
	    text: '我的',
	    icon: '',
	    link: '/IMGSwipe',
	    activeCallback: null
	  }],
	  height: 40,
	  activeId: 0,
	  activeColor: 'red',
	  activeBgColor: '#ccc',
	  activeBgImage: '',
	  activeCallback: function activeCallback() {
	    console.log('我被点击了');
	  }
	}, _temp));

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TabRow = __webpack_require__(263);

	var _TabRow2 = _interopRequireDefault(_TabRow);

	var _Toast = __webpack_require__(110);

	var _Toast2 = _interopRequireDefault(_Toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TabRowDemo = function (_Component) {
	  _inherits(TabRowDemo, _Component);

	  function TabRowDemo(props) {
	    _classCallCheck(this, TabRowDemo);

	    var _this = _possibleConstructorReturn(this, (TabRowDemo.__proto__ || Object.getPrototypeOf(TabRowDemo)).call(this, props));

	    _this.tabs = [{
	      text: '母婴服饰',
	      id: '0'
	    }, {
	      text: '童车',
	      id: '1',
	      callback: null
	    }, {
	      text: '玩具图书',
	      id: '2'
	    }, {
	      text: '尿裤',
	      id: '3'
	    }, {
	      text: '母婴服饰',
	      id: '4'
	    }, {
	      text: '童车童',
	      id: '5',
	      callback: null
	    }, {
	      text: '玩具图书玩具图书',
	      id: '6'
	    }, {
	      text: '尿裤湿巾玩具图书玩具图书',
	      id: '7'
	    }];
	    return _this;
	  }

	  _createClass(TabRowDemo, [{
	    key: 'activeCallback',
	    value: function activeCallback(item, e) {
	      _Toast2.default.info("选中了值为" + item.id + "的item");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_TabRow2.default, { tabs: this.tabs, activeCallback: this.activeCallback.bind(this) }),
	        this.props.children,
	        _react2.default.createElement(
	          'div',
	          { style: { textAlign: 'center', marginTop: "20px" } },
	          '\u70B9\u51FB\u7B5B\u9009TabRow'
	        )
	      );
	    }
	  }]);

	  return TabRowDemo;
	}(_react.Component);

	exports.default = TabRowDemo;

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  display: none;\n}\n.zzrc-tabrow {\n  font-size: 0;\n  width: 100%;\n  overflow-x: scroll;\n}\n.zzrc-tabrow-item:last-child {\n  position: relative;\n  border: none!important;\n}\n.zzrc-tabrow-item:last-child:before {\n  content: '';\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: 0;\n  left: 0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  border-radius: 0px;\n  border-right: 1px solid #ccc;\n}\n.zzrc-tabrow-item {\n  display: inline-block;\n  padding: 0.26666667rem 0.53333333rem;\n  color: #333;\n  font-size: 0.74666667rem;\n  text-align: center;\n  position: relative;\n  border: none!important;\n}\n.zzrc-tabrow-item:before {\n  content: '';\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: 0;\n  left: 0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  border-radius: 0px;\n  border: 1px solid #ccc;\n}\n.zzrc-tabrow-item:before {\n  content: '';\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: 0;\n  left: 0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  border-radius: 0px;\n  border-right: 1px solid transparent;\n}\n", ""]);

	// exports


/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(459);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./TabRow.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./TabRow.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});