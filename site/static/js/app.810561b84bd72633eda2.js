webpackJsonp([18],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(267);
	module.exports = __webpack_require__(238);


/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(86);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	exports.default = (0, _reactRouter.withRouter)(function (_Component) {
	  _inherits(Profile, _Component);

	  function Profile() {
	    _classCallCheck(this, Profile);

	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }

	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      // if(this.props.children) return this.props.children
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Profile'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: 'profile/a' },
	            'ProfileA'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: 'profile/b' },
	            'ProfileB'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            'HOME'
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.gohome.bind(this) },
	          '\u56DE\u5230HOME'
	        ),
	        this.props.children
	      );
	    }
	  }, {
	    key: 'gohome',
	    value: function gohome() {
	      this.props.router.push('/');
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log(this.props.router);
	      this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	      this.props.router.listen(this.routerChange);
	    }
	  }, {
	    key: 'routerChange',
	    value: function routerChange() {
	      console.log('routerChange');
	    }
	  }, {
	    key: 'routerWillLeave',
	    value: function routerWillLeave() {
	      console.log('routerWillLeave');
	    }
	  }]);

	  return Profile;
	}(_react.Component));

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(81);

	__webpack_require__(477);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Toast = function () {
	  function Toast() {
	    _classCallCheck(this, Toast);

	    this.currentDOM = null;
	  }

	  _createClass(Toast, [{
	    key: 'commonDOM',
	    value: function commonDOM(content, Type) {
	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-toast' },
	        _react2.default.createElement(
	          'div',
	          { className: 'zzrc-toast-text' },
	          Type && _react2.default.createElement(Type, null),
	          _react2.default.createElement(
	            'div',
	            null,
	            content
	          )
	        )
	      );
	    }
	  }, {
	    key: 'component',
	    value: function component(type, content, duration, onClose) {
	      var _this2 = this;

	      var _this = this;
	      var hide = function hide() {
	        _this.hide();
	        ['hashchange', 'popstate'].map(function (event) {
	          window.removeEventListener(event, hide, false);
	        });
	      };
	      ['hashchange', 'popstate'].map(function (event) {
	        window.addEventListener(event, hide, false);
	      });

	      this.timer = setTimeout(function () {
	        onClose();
	        _this2.hide();
	      }, duration);

	      this.disable();
	      switch (type) {
	        case 'info':
	          return this.commonDOM(content);
	          break;

	        case 'loading':
	          return this.commonDOM(content, _react2.default.createClass({
	            render: function render() {
	              return _react2.default.createElement('i', { className: 'zzrc-toast-text-loading' });
	            }
	          }));
	          break;

	        case 'success':
	          return this.commonDOM(content, _react2.default.createClass({
	            render: function render() {
	              return _react2.default.createElement(
	                'i',
	                { className: 'zzrc-toast-text-success' },
	                _react2.default.createElement('i', { className: 'success' })
	              );
	            }
	          }));
	          break;

	        case 'fail':
	          return this.commonDOM(content, _react2.default.createClass({
	            render: function render() {
	              return _react2.default.createElement(
	                'i',
	                { className: 'zzrc-toast-text-fail' },
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement('i', { className: 'top' }),
	                  _react2.default.createElement('i', { className: 'bottom' })
	                )
	              );
	            }
	          }));
	          break;
	      }
	    }
	  }, {
	    key: 'success',
	    value: function success() {
	      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载成功';
	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
	      var onClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	      // if(this.currentDOM) return;
	      var success = document.createElement('div');
	      document.body.appendChild(success);
	      (0, _reactDom.render)(this.component('success', content, duration, onClose), success);
	      this.currentDOM = success;
	    }
	  }, {
	    key: 'fail',
	    value: function fail() {
	      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载失败';
	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
	      var onClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	      var fail = document.createElement('div');
	      document.body.appendChild(fail);
	      (0, _reactDom.render)(this.component('fail', content, duration, onClose), fail);
	      this.currentDOM = fail;
	    }
	  }, {
	    key: 'info',
	    value: function info() {
	      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '这是纯文本toast提示！！';
	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
	      var onClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	      var info = document.createElement('div');
	      document.body.appendChild(info);
	      (0, _reactDom.render)(this.component('info', content, duration, onClose), info);
	      this.currentDOM = info;
	    }
	  }, {
	    key: 'loading',
	    value: function loading() {
	      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';
	      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
	      var onClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	      var loading = document.createElement('div');
	      document.body.appendChild(loading);
	      (0, _reactDom.render)(this.component('loading', content, timeout, onClose), loading);
	      this.currentDOM = loading;
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.currentDOM && document.body.removeChild(this.currentDOM);
	      this.currentDOM = null;
	      clearTimeout(this.timer);
	      this.timer = null;
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

	  return Toast;
	}();

	exports.default = new Toast();

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var requireAuth = function requireAuth(nextState, replace) {
	  alert('需要登录');
	  replace('/login');
	};
	exports.default = {
	  path: '/',
	  component: __webpack_require__(237).default,
	  childRoutes: [{
	    path: 'SlideLoader',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(11, function (require) {
	        cb(null, __webpack_require__(260).default);
	      });
	    }
	  }, {
	    path: 'ScrollTop',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(4, function (require) {
	        cb(null, __webpack_require__(258).default);
	      });
	    }
	  }, {
	    path: 'ListView',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(13, function (require) {
	        cb(null, __webpack_require__(251).default);
	      });
	    }
	  }, {
	    path: 'ActionSheet',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(14, function (require) {
	        cb(null, __webpack_require__(240).default);
	      });
	    }
	  }, {
	    path: 'Modal',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(12, function (require) {
	        cb(null, __webpack_require__(253).default);
	      });
	    }
	  }, {
	    path: 'Toast',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(15, function (require) {
	        cb(null, __webpack_require__(265).default);
	      });
	    }
	  }, {
	    path: 'Carousel',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(8, function (require) {
	        cb(null, __webpack_require__(242).default);
	      });
	    }
	  }, {
	    path: 'IMGScrollRow',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(7, function (require) {
	        cb(null, __webpack_require__(247).default);
	      });
	    }
	  }, {
	    path: 'Goods',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(3, function (require) {
	        cb(null, __webpack_require__(244).default);
	      });
	    }
	  }, {
	    path: 'TabRow',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(9, function (require) {
	        cb(null, __webpack_require__(264).default);
	      });
	    }
	  }, {
	    path: 'TabBar',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(10, function (require) {
	        cb(null, __webpack_require__(262).default);
	      });
	    },

	    indexRoute: {
	      component: __webpack_require__(109).default
	    },
	    childRoutes: [{
	      path: 'c',
	      getComponent: function getComponent(nextState, cb) {
	        !/* require.ensure */(function (require) {
	          cb(null, __webpack_require__(109).default);
	        }(__webpack_require__));
	      }
	    }, {
	      path: 'a',
	      getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	          cb(null, __webpack_require__(165).default);
	        });
	      }
	    }, {
	      path: 'b',
	      getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(0, function (require) {
	          cb(null, __webpack_require__(166).default);
	        });
	      }
	    }]
	  }, {
	    path: 'IMGPreview',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(6, function (require) {
	        cb(null, __webpack_require__(246).default);
	      });
	    }
	  }, {
	    path: 'IMGSwipe',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(5, function (require) {
	        cb(null, __webpack_require__(249).default);
	      });
	    }
	  }, {
	    path: 'login',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(17, function (require) {
	        cb(null, __webpack_require__(255).default);
	      });
	    }
	  }, {
	    path: 'messages',
	    name: 'messages',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(16, function (require) {
	        cb(null, __webpack_require__(256).default);
	      });
	    },
	    onEnter: function onEnter(nextState, replace) {
	      requireAuth(nextState, replace);
	    }
	  }, {
	    path: 'profile',
	    getComponent: function getComponent(nextState, cb) {
	      !/* require.ensure */(function (require) {
	        cb(null, __webpack_require__(109).default);
	      }(__webpack_require__));
	    },

	    childRoutes: [{
	      path: 'a',
	      getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(1/* duplicate */, function (require) {
	          cb(null, __webpack_require__(165).default);
	        });
	      }
	    }, {
	      path: 'b',
	      getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(0/* duplicate */, function (require) {
	          cb(null, __webpack_require__(166).default);
	        });
	      }
	    }]
	  }]
	};

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(86);

	__webpack_require__(463);

	var _RefreshControl = __webpack_require__(254);

	var _RefreshControl2 = _interopRequireDefault(_RefreshControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'loadHandler',
	    value: function loadHandler(resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 2000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        return this.props.children;
	      }
	      return _react2.default.createElement(
	        _RefreshControl2.default,
	        { loadHandler: this.loadHandler.bind(this) },
	        _react2.default.createElement(
	          'div',
	          { className: 'home' },
	          _react2.default.createElement(
	            'header',
	            { className: 'home-title' },
	            'ZZLogic-React-Component'
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: 'home-component' },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/ActionSheet' },
	                'ActionSheet \u4E0B\u65B9\u9009\u62E9'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/Carousel' },
	                'Carousel icon\u5207\u6362'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/Goods' },
	                'Goods \u5546\u54C1\u5361\u7247'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/IMGPreview' },
	                'IMGPreview \u56FE\u7247\u9884\u89C8'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/IMGScrollRow' },
	                'IMGScrollRow \u56FE\u7247\u884C\u663E\u793A'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/IMGSwipe' },
	                'IMGSwipe \u56FE\u7247\u8F6E\u64AD'
	              )
	            ),
	            _react2.default.createElement(
	              's',
	              null,
	              _react2.default.createElement(
	                'i',
	                null,
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  'ListView \u957F\u5217\u8868'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/Modal' },
	                'Modal \u5F39\u7A97'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/ScrollTop' },
	                'ScrollTop \u8FD4\u56DE\u9876\u90E8'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/SlideLoader' },
	                'SlideLoader \u52A0\u8F7D\u66F4\u591A'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/TabBar' },
	                'TabBar bar\u5207\u6362'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/TabRow' },
	                'TabRow tab\u5207\u6362'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: 'last-child' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/Toast' },
	                'Toast \u8F7B\u63D0\u793A'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: 'hide' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/login' },
	                'Login'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: 'hide' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/messages' },
	                'messages'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: 'hide' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/profile' },
	                'profile'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            { style: { textAlign: 'left', fontSize: '14px', color: '#666' } },
	            '1\u3001Home and TabRow Component show the 1px ui',
	            _react2.default.createElement('br', null),
	            '2\u3001Home included the refreshControl, you can pull the page and look the component',
	            _react2.default.createElement('br', null),
	            '3\u3001ListView TODO'
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(81);

	var _reactRouter = __webpack_require__(86);

	var _Router = __webpack_require__(236);

	var _Router2 = _interopRequireDefault(_Router);

	__webpack_require__(464);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, {
	  history: _reactRouter.hashHistory,
	  routes: _Router2.default
	}), document.getElementById('app'));

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(472);

	var _Toast = __webpack_require__(110);

	var _Toast2 = _interopRequireDefault(_Toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RefreshControl = function (_Component) {
	  _inherits(RefreshControl, _Component);

	  function RefreshControl(props) {
	    _classCallCheck(this, RefreshControl);

	    var _this = _possibleConstructorReturn(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).call(this, props));

	    _this.state = {
	      pullText: '下拉刷新',
	      canRefresh: false
	    };
	    return _this;
	  }

	  _createClass(RefreshControl, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'zzrc-rc' },
	        _react2.default.createElement(
	          'div',
	          { ref: 'rc' },
	          _react2.default.createElement(
	            'div',
	            { className: 'zzrc-rc-w', ref: 'rcw' },
	            _react2.default.createElement(
	              'div',
	              { className: 'zzrc-rc-w-loading' },
	              _react2.default.createElement('i', { className: 'zzrc-rc-w-loading-icon' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'zzrc-rc-w-text' },
	              this.state.pullText
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { id: 'pullId' },
	            this.props.children
	          )
	        )
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(prev, next) {
	      if (prev.pullText == next.pullText && prev.canRefresh == next.canRefresh) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var Root = document.getElementById('pullId');
	      var RootPull = function RootPull() {
	        var reset = function reset() {
	          var pullText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '下拉刷新';

	          // this.refs.rc.style.marginTop = "-"+this.getRealPX(120)+"px"
	          _this2.refs.rc.style.WebkitTransform = "translateY(0)";
	          // this.refs.rc.style.WebkitTransition = ".5s"
	          setTimeout(function () {
	            _this2.setState({
	              pullText: pullText
	            });
	          }, 500);
	        };
	        var start = void 0,
	            moving = void 0,
	            startX = void 0,
	            startY = void 0,
	            relativeX = void 0,
	            relativeY = void 0,
	            moveX = void 0,
	            moveY = void 0,
	            pulling = false;
	        Root.addEventListener('touchstart', function (e) {
	          start = true;
	          startX = e.changedTouches[0].clientX;
	          startY = e.changedTouches[0].clientY;
	        }, false);
	        Root.addEventListener('touchmove', function (e) {
	          if (!start || pulling == true) return;
	          moveX = e.changedTouches[0].clientX;
	          moveY = e.changedTouches[0].clientY;
	          relativeY = moveY - startY;
	          relativeX = moveX - startX;
	          if (relativeY < 0) return;
	          // 阻止默认事件
	          var scrollTop = document.body.scrollTop;
	          if (scrollTop <= 0) e.preventDefault();

	          moving = true;
	          // this.refs.rc.style.marginTop = relativeY/6 - this.getRealPX(120)+"px"
	          _this2.refs.rc.style.WebkitTransform = "translateY(" + relativeY / 4 + "px)";
	          var canRefresh = relativeY / 2 - _this2.getRealPX(120) > 0;

	          _this2.setState({
	            pullText: canRefresh ? "释放刷新" : "下拉刷新",
	            canRefresh: canRefresh
	          });
	        }, false);
	        Root.addEventListener('touchend', function (e) {
	          if (!start || !moving) return;
	          moving = false;
	          start = false;

	          if (_this2.state.canRefresh) {
	            _this2.setState({
	              pullText: "加载中..."
	            });
	            // this.refs.rc.style.marginTop = 0
	            _this2.refs.rc.style.WebkitTransform = "translateY(" + _this2.getRealPX(120) + "px)";

	            new Promise(function (resolve, reject) {
	              pulling = true;
	              _this2.props.loadHandler(resolve, reject);
	              // timeout
	              setTimeout(function () {
	                reset();
	              }, 10000);
	            }).then(function (success) {
	              pulling = false;
	              _Toast2.default.success();
	              reset();
	            }, function (fail) {
	              pulling = false;
	              _Toast2.default.fail();
	              reset();
	            });
	            // this.props.loadHandler();
	            // window.EventEmitter.emit('PULL_REFRESH')
	            // location.reload()
	          } else {
	            reset();
	          }
	        }, false);
	      };
	      RootPull();
	    }
	  }, {
	    key: 'getRealPX',
	    value: function getRealPX(px) {
	      var width = document.documentElement.clientWidth;
	      var rem2px = width / 320 * 16;
	      return px * 320 / 750 / 16 * 1 * rem2px;
	    }
	  }]);

	  return RefreshControl;
	}(_react.Component);

	exports.default = RefreshControl;

/***/ },

/***/ 463:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 464:
463,

/***/ 472:
463,

/***/ 477:
463

});