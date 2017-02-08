webpackJsonp([10],{

/***/ 261:
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

	__webpack_require__(475);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	exports.default = (0, _reactRouter.withRouter)((_temp = _class = function (_Component) {
	  _inherits(TabBar, _Component);

	  function TabBar(props) {
	    _classCallCheck(this, TabBar);

	    var _this = _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(TabBar, [{
	    key: 'handleActive',
	    value: function handleActive(item, e) {
	      if (item.link) {
	        this.props.router.push(item.link);
	      }

	      item.activeCallback && item.activeCallback.call(this, item);
	      this.props.activeCallback && this.props.activeCallback.call(this, item);

	      if (e.target.getAttribute('class') != 'zzrc-tabbar-item') {
	        e.target = e.target.parentNode;
	      }

	      var childNodes = e.target.parentNode.childNodes;
	      for (var i = 0; i < childNodes.length; i++) {
	        childNodes[i].style.color = '#000';
	        childNodes[i].style.backgroundColor = "#FFF";
	      }

	      e.target.style.color = this.props.activeColor;
	      e.target.style.backgroundColor = this.props.activeBgColor;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var active = this.refs['item' + this.props.active];
	      active.style.color = this.props.activeColor;
	      active.style.backgroundColor = this.props.activeBgColor;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-tabbar' },
	        this.props.tabs.map(function (item, index) {
	          return _react2.default.createElement(
	            'div',
	            {
	              key: index,
	              ref: "item" + index,
	              className: 'zzrc-tabbar-item',
	              onClick: _this2.handleActive.bind(_this2, item),
	              style: { height: _this2.props.height, lineHeight: _this2.props.height } },
	            _react2.default.createElement('span', {
	              style: { height: '30px', width: '30px', backgroundImage: 'url(' + item.icon + ')', display: item.icon ? "block" : 'none', borderRadius: '50%', backgroundSize: 'cover' } }),
	            _react2.default.createElement(
	              'span',
	              { className: 'zzrc-tabbar-item-text' },
	              item.text
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return TabBar;
	}(_react.Component), _class.propTypes = {
	  tabType: _react2.default.PropTypes.string,
	  tabs: _react2.default.PropTypes.array,
	  active: _react2.default.PropTypes.number,
	  activeColor: _react2.default.PropTypes.string,
	  activeBgColor: _react2.default.PropTypes.string,
	  activeBgImg: _react2.default.PropTypes.string,
	  activeCallback: _react2.default.PropTypes.func
	}, _class.defaultProps = {
	  tabType: 'bottom',
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
	  height: '40px',
	  active: 0,
	  activeColor: 'red',
	  activeBgColor: '#ccc',
	  activeBgImage: '',
	  activeCallback: function activeCallback() {
	    console.log('我被点击了');
	  }
	}, _temp));

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TabBar = __webpack_require__(261);

	var _TabBar2 = _interopRequireDefault(_TabBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TabBarDemo = function (_Component) {
	  _inherits(TabBarDemo, _Component);

	  function TabBarDemo(props) {
	    _classCallCheck(this, TabBarDemo);

	    var _this = _possibleConstructorReturn(this, (TabBarDemo.__proto__ || Object.getPrototypeOf(TabBarDemo)).call(this, props));

	    _this.tabs = [{
	      text: '首页',
	      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200',
	      link: '/TabBar/c',
	      callback: null
	    }, {
	      text: '发现',
	      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200',
	      link: '/TabBar/a',
	      callback: null
	    }, {
	      text: '联系人',
	      icon: 'http://wx.qlogo.cn/mmopen/lCwVB66etfBcSSOJzKPib8kqSXVkksIj6OWWXCMHmZftrpokXwlVtIibS8nq6LYLibrIicQWUBugmb8ib4fkEahhGtg/96',
	      link: '/TabBar/b',
	      callback: null
	    }, {
	      text: '我的',
	      icon: 'http://avatars2.githubusercontent.com/u/8546902',
	      link: '/TabBar/b',
	      activeCallback: function activeCallback() {
	        alert('需要登录');
	        this.props.router.push('/login');
	      }
	    }];
	    return _this;
	  }

	  _createClass(TabBarDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_TabBar2.default, { tabs: this.tabs }),
	        this.props.children,
	        _react2.default.createElement(
	          'div',
	          { style: { textAlign: 'center', marginTop: "20px" } },
	          '\u5207\u6362TabBar'
	        )
	      );
	    }
	  }]);

	  return TabBarDemo;
	}(_react.Component);

	exports.default = TabBarDemo;

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-tabbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.zzrc-tabbar:last-child {\n  border-right: 1px solid #ccc;\n}\n.zzrc-tabbar-item {\n  color: #333;\n  font-size: 0.74666667rem;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #ccc;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-right: 0;\n  text-align: center;\n}\n.zzrc-tabbar-item-text {\n  display: inline-block;\n  margin-left: 0.53333333rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(458);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./TabBar.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./TabBar.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});