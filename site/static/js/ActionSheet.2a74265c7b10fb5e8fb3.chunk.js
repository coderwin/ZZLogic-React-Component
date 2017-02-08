webpackJsonp([14],{

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(81);

	__webpack_require__(465);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ActionSheet = function () {
	  function ActionSheet() {
	    _classCallCheck(this, ActionSheet);
	  }

	  _createClass(ActionSheet, [{
	    key: 'render',
	    value: function render(buttons, message, closeable) {
	      var _this2 = this;

	      var _this = this;
	      var cancel = buttons.pop();

	      // 事件绑定
	      ['hashchange', 'popstate'].map(function (event) {
	        window.addEventListener(event, hide, false);
	      });
	      function hide() {
	        ['hashchange', 'popstate'].map(function (event) {
	          window.removeEventListener(event, hide, false);
	        });
	        _this.hide();
	      }

	      // 点击处理函数
	      function itemClick(item, index) {
	        this.selectedCallback(item, index);
	        hide.call(this);
	      }
	      function cancelClick(cancel) {
	        this.selectedCallback(cancel, cancel.val);
	        hide.call(this);
	      }
	      function maskClick(closeable) {
	        if (closeable) {
	          hide.call(this);
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-as' },
	        _react2.default.createElement('div', { onClick: maskClick.bind(this, closeable), className: 'zzrc-as-mask' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-as-wrap zzrc-slideup-appear' },
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-as-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'zzrc-as-title' },
	              message
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'zzrc-as-lists' },
	              buttons.map(function (item, index) {
	                return _react2.default.createElement(
	                  'li',
	                  {
	                    key: index,
	                    className: 'zzrc-as-list',
	                    onClick: itemClick.bind(_this2, item, index) },
	                  typeof item == 'string' ? item : item.text
	                );
	              })
	            ),
	            _react2.default.createElement('div', { className: 'zzrc-as-split' }),
	            _react2.default.createElement(
	              'div',
	              { className: 'zzrc-as-cancel', onClick: cancelClick.bind(this, cancel) },
	              typeof cancel == 'string' ? cancel : cancel.text
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'show',
	    value: function show(opts, callback) {
	      // this.bindHashChange()
	      var buttons = opts.buttons,
	          message = opts.message,
	          closeable = true;
	      this.selectedCallback = callback;

	      var actionSheet = document.createElement('div');
	      document.body.appendChild(actionSheet);
	      (0, _reactDom.render)(this.render(buttons, message, closeable), actionSheet);

	      this.currentDOM = actionSheet;
	      this.disable();
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      document.body.removeChild(this.currentDOM);
	      this.currentDOM = null;
	      this.enable();
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      document.body.style.overflow = 'hidden';
	      document.body.addEventListener('touchmove', this.forbidden, false);
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      document.body.style.overflow = '';
	      document.body.removeEventListener('touchmove', this.forbidden);
	    }
	  }, {
	    key: 'forbidden',
	    value: function forbidden(e) {
	      e.preventDefault();
	      e.stopPropagation();
	    }
	  }]);

	  return ActionSheet;
	}();

	exports.default = new ActionSheet();

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ActionSheet = __webpack_require__(239);

	var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ActionSheetDemo = function (_Component) {
	  _inherits(ActionSheetDemo, _Component);

	  function ActionSheetDemo(props) {
	    _classCallCheck(this, ActionSheetDemo);

	    var _this = _possibleConstructorReturn(this, (ActionSheetDemo.__proto__ || Object.getPrototypeOf(ActionSheetDemo)).call(this, props));

	    _this.state = {
	      selectedText: null,
	      selectedVal: null
	    };
	    return _this;
	  }

	  _createClass(ActionSheetDemo, [{
	    key: 'handleActionSheet',
	    value: function handleActionSheet() {
	      var _this2 = this;

	      var BUTTONS = [{
	        text: '操作一', val: '0'
	      }, {
	        text: '操作二', val: '0'
	      }, {
	        text: '操作三', val: '0'
	      }, {
	        text: '取消', val: 'cancel'
	      }];
	      _ActionSheet2.default.show({
	        buttons: BUTTONS,
	        message: '我是描述我是描述',
	        closeable: true
	      }, function (item, val) {
	        console.log(item, val);
	        _this2.setState({
	          selectedText: item.text,
	          selectedVal: val
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { textAlign: 'center', marginTop: "20px" } },
	        _react2.default.createElement(
	          'div',
	          null,
	          '\u52A8\u4F5C\u9762\u677FActionSheet'
	        ),
	        _react2.default.createElement(
	          'div',
	          { onClick: this.handleActionSheet.bind(this) },
	          '\u8C03\u8D77'
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          this.state.selectedText
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          this.state.selectedVal
	        )
	      );
	    }
	  }]);

	  return ActionSheetDemo;
	}(_react.Component);

	exports.default = ActionSheetDemo;

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-as-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.zzrc-as-wrap {\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n  height: auto;\n  text-align: center;\n}\n.zzrc-as-title {\n  padding: 0.8rem;\n  font-size: 0.69333333rem;\n  color: #999;\n}\n.zzrc-as-list, .zzrc-as-cancel {\n  font-size: 0.85333333rem;\n  height: 2.13333333rem;\n  line-height: 2.13333333rem;\n  border-top: 1px solid #f5f5f5;\n}\n.zzrc-as-split {\n  height: 0.42666667rem;\n  background: #eee;\n}\n.zzrc-slideup-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  -webkit-animation-name: slideUp;\n          animation-name: slideUp;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes slideUp {\n  0% {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@keyframes slideUp {\n  0% {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n", ""]);

	// exports


/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(449);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./ActionSheet.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./ActionSheet.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});