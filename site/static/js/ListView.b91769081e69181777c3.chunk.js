webpackJsonp([13],{

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(470);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 未完成 TODO
	var ListView = function (_Component) {
	  _inherits(ListView, _Component);

	  function ListView(props) {
	    _classCallCheck(this, ListView);

	    var _this = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));

	    _this.state = {
	      showPullRefresh: false
	    };
	    return _this;
	  }

	  _createClass(ListView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'handleStart',
	    value: function handleStart(e) {
	      var pos = e.touches[0];
	      this.startX = pos.clientX;
	      this.startY = pos.clientY;
	    }
	  }, {
	    key: 'handleMove',
	    value: function handleMove(e) {
	      this.scrollTop = this.refs.listview.scrollTop;
	      if (this.scrollTop <= 0) {
	        this.setState({
	          showPullRefresh: true
	        });
	      }
	    }
	  }, {
	    key: 'handleEnd',
	    value: function handleEnd(e) {
	      var _this2 = this;

	      console.log(e);
	      setTimeout(function () {
	        _this2.setState({
	          showPullRefresh: false
	        });
	      }, 1000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: 'listview',
	          className: 'zzrc-listview',
	          style: _extends({}, this.props.view),
	          onTouchStart: this.handleStart.bind(this),
	          onTouchMove: this.handleMove.bind(this),
	          onTouchEnd: this.handleEnd.bind(this),
	          onTouchCancel: this.handleEnd.bind(this)
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-listview-wrap' },
	          _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88681'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88682'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88683'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88684'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88685'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88686'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88687'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88688'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u88689'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886810'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886811'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886812'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886813'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886814'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886815'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886816'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886817'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886818'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886819'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886820'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886821'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886822'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886823'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886824'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886825'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886826'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886827'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886828'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886829'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886830'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886831'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886832'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886833'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886834'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886835'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886836'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886837'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886838'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u6211\u662F\u5546\u54C1\u5217\u886839'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'pullShow',
	    get: function get() {
	      return {
	        display: this.state.showPullRefresh ? 'block' : 'none'
	      };
	    }
	  }], [{
	    key: 'dataSource',
	    value: function dataSource() {}
	  }]);

	  return ListView;
	}(_react.Component);

	ListView.PropTypes = {
	  view: _react2.default.PropTypes.object,
	  pullRefresh: _react2.default.PropTypes.object,
	  slideLoader: _react2.default.PropTypes.object
	};
	ListView.defaultProps = {
	  view: {
	    height: '400px'
	  },
	  pullRefresh: {},
	  slideLoader: {}
	};
	exports.default = ListView;

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ListView = __webpack_require__(250);

	var _ListView2 = _interopRequireDefault(_ListView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListViewDemo = function (_Component) {
	  _inherits(ListViewDemo, _Component);

	  function ListViewDemo() {
	    _classCallCheck(this, ListViewDemo);

	    return _possibleConstructorReturn(this, (ListViewDemo.__proto__ || Object.getPrototypeOf(ListViewDemo)).apply(this, arguments));
	  }

	  _createClass(ListViewDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Fheader'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Fnav'
	        ),
	        _react2.default.createElement(_ListView2.default, null),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Ffooter'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Ffooter'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Ffooter'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Ffooter'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Ffooter'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Ffooter'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u6211\u662Ffooter'
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return ListViewDemo;
	}(_react.Component);

	exports.default = ListViewDemo;

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-listview {\n  overflow: auto;\n}\n", ""]);

	// exports


/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(454);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./ListView.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./ListView.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});