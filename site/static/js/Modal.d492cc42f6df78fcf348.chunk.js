webpackJsonp([12],{

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(81);

	__webpack_require__(471);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Modal = function () {
	  function Modal() {
	    _classCallCheck(this, Modal);

	    this.currentDOM = null;
	  }

	  _createClass(Modal, [{
	    key: 'component',
	    value: function component(type, title, message, actions) {
	      var _this2 = this;

	      var _this = this;
	      this.disable();
	      var hide = function hide() {
	        _this.hide();
	        ['hashchange', 'popstate'].map(function (event) {
	          window.removeEventListener(event, hide, false);
	        });
	      };
	      ['hashchange', 'popstate'].map(function (event) {
	        window.addEventListener(event, hide, false);
	      });

	      function handleClick(item, e) {
	        item.onPress(e);
	        hide.call(this);
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-modal' },
	        _react2.default.createElement('div', { className: 'zzrc-modal-mask' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-modal-wrap' },
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-modal-content zzrc-zoom-appear' },
	            _react2.default.createElement(
	              'div',
	              { className: 'zzrc-modal-header' },
	              _react2.default.createElement(
	                'div',
	                { className: 'zzrc-modal-title' },
	                title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'zzrc-modal-body' },
	              _react2.default.createElement(
	                'div',
	                null,
	                message
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: actions.length > 2 ? 'zzrc-modal-button-group-v' : 'zzrc-modal-button-group-h' },
	              actions.map(function (item, index) {
	                if (!item || (typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object' || !item.text) return;
	                return _react2.default.createElement(
	                  'span',
	                  {
	                    key: index,
	                    className: 'zzrc-modal-button',
	                    onClick: handleClick.bind(_this2, item) },
	                  item.text
	                );
	              })
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'alert',
	    value: function alert() {
	      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '标题';
	      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示信息';
	      var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{
	        text: '按钮1',
	        onPress: function onPress() {}
	      }, {
	        text: '按钮2',
	        onPress: function onPress() {}
	      }, {
	        text: '按钮3',
	        onPress: function onPress() {}
	      }];

	      var modal = document.createElement('div');
	      document.body.appendChild(modal);
	      this.currentDOM = modal;
	      (0, _reactDom.render)(this.component('alert', title, message, actions.filter(function (item) {
	        return item && item.text;
	      })), modal);
	    }
	  }, {
	    key: 'prompt',
	    value: function prompt() {
	      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '标题';
	      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示信息';
	      var callbackOrActions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.currentDOM && document.body.removeChild(this.currentDOM);
	      this.currentDOM = null;
	      // this.currentDOM.remove()
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

	  return Modal;
	}();

	exports.default = new Modal();

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Modal = __webpack_require__(252);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalDemo = function (_Component) {
	  _inherits(ModalDemo, _Component);

	  function ModalDemo() {
	    _classCallCheck(this, ModalDemo);

	    return _possibleConstructorReturn(this, (ModalDemo.__proto__ || Object.getPrototypeOf(ModalDemo)).apply(this, arguments));
	  }

	  _createClass(ModalDemo, [{
	    key: 'alert',
	    value: function alert(type) {
	      _Modal2.default.alert(type + '个按钮情况', _react2.default.createElement(
	        'div',
	        null,
	        '\u8FD9\u91CC\u6709' + type + '\u4E2A\u6309\u94AE, \u4F60\u8BD5\u8BD5' + type + '\u4E2A\u6309\u94AE\u7684\u60C5\u51B5\u3002'
	      ), [{
	        text: '按钮一', onPress: function onPress() {
	          return console.log('第1个按钮被点击了');
	        }
	      }, type > 1 && {
	        text: '按钮二', onPress: function onPress() {
	          return console.log('第2个按钮被点击了');
	        }
	      }, type > 2 && {
	        text: '按钮三', onPress: function onPress() {
	          return console.log('第3个按钮被点击了');
	        }
	      }]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { textAlign: 'center', marginTop: "20px" } },
	        '\u5F39\u7A97Modal',
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.createElement(
	            'li',
	            { onClick: this.alert.bind(this, 3) },
	            '\u4E09\u4E2A\u6309\u94AE'
	          ),
	          _react2.default.createElement(
	            'li',
	            { onClick: this.alert.bind(this, 2) },
	            '\u4E24\u4E2A\u6309\u94AE'
	          ),
	          _react2.default.createElement(
	            'li',
	            { onClick: this.alert.bind(this, 1) },
	            '\u4E00\u4E2A\u6309\u94AE'
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return ModalDemo;
	}(_react.Component);

	exports.default = ModalDemo;

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, ".zzrc-modal-mask, .zzrc-modal-wrap {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  z-index: 999;\n}\n.zzrc-modal-mask {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.zzrc-modal-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.zzrc-modal-content {\n  background: #fff;\n  width: 14.26666667rem;\n  border-radius: 0.26666667rem;\n  height: auto;\n}\n.zzrc-modal-title {\n  padding: 1.06666667rem 0.8rem 0.8rem;\n  text-align: center;\n  font-size: 0.96rem;\n  font-weight: 500;\n}\n.zzrc-modal-body {\n  overflow: hidden;\n  font-size: 0.85333333rem;\n  color: #333;\n  height: 100%;\n  text-align: center;\n  margin-bottom: 0.8rem;\n  padding: 0 0.8rem;\n  line-height: 1.06666667rem;\n}\n.zzrc-modal-button-group-h {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  border-top: 1px solid #ddd;\n}\n.zzrc-modal-button-group-h .zzrc-modal-button {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.zzrc-modal-button-group-h .zzrc-modal-button:first-child {\n  border: 0;\n  border-right: 1px solid #ddd;\n}\n.zzrc-modal-button-group-h .zzrc-modal-button:last-child {\n  border: 0;\n}\n.zzrc-modal-button {\n  border-top: 1px solid #ddd;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #108ee9;\n  font-size: 0.85333333rem;\n  height: 2.24rem;\n  line-height: 2.24rem;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.zzrc-zoom-appear {\n  opacity: 0;\n  -webkit-animation-duration: 0.2s;\n  animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n  -webkit-animation-name: amZoomIn;\n  animation-name: amZoomIn;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n@-webkit-keyframes amZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes amZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n", ""]);

	// exports


/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(455);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./Modal.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./Modal.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});