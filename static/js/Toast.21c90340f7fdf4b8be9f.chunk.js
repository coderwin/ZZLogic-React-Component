webpackJsonp([6,19],{565:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(304),c=o(l),f=n(540),s=o(f),p=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"toastInfo",value:function(){s.default.info("我是toast提示！！！")}},{key:"toastLoading",value:function(){s.default.loading("加载中..."),setTimeout(function(){s.default.hide()},3e3)}},{key:"toastSuccess",value:function(){s.default.success("加载成功")}},{key:"toastFail",value:function(){s.default.fail("加载失败")}},{key:"render",value:function(){return c.default.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},"轻提示Toast",c.default.createElement("ul",null,c.default.createElement("li",{onClick:this.toastInfo.bind(this)},"纯文本提示"),c.default.createElement("li",{onClick:this.toastLoading.bind(this)},"加载中提示"),c.default.createElement("li",{onClick:this.toastSuccess.bind(this)},"加载成功提示"),c.default.createElement("li",{onClick:this.toastFail.bind(this)},"加载失败提示")),this.props.children)}}]),t}(l.Component);t.default=p}});