webpackJsonp([18],{0:function(e,t,n){n(267),e.exports=n(238)},109:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),c=o(i),f=n(86);t.default=(0,f.withRouter)(function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),r(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h2",null,"Profile"),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"profile/a"},"ProfileA")),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"profile/b"},"ProfileB")),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/"},"HOME")),c.default.createElement("button",{onClick:this.gohome.bind(this)},"回到HOME"),this.props.children)}},{key:"gohome",value:function(){this.props.router.push("/")}},{key:"componentDidMount",value:function(){console.log(this.props.router),this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave),this.props.router.listen(this.routerChange)}},{key:"routerChange",value:function(){console.log("routerChange")}},{key:"routerWillLeave",value:function(){console.log("routerWillLeave")}}]),t}(i.Component))},110:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),r=o(u),i=n(81);n(478);var c=function(){function e(){l(this,e),this.currentDOM=null}return a(e,[{key:"commonDOM",value:function(e,t){return r.default.createElement("div",{className:"zzrc-toast"},r.default.createElement("div",{className:"zzrc-toast-text"},t&&r.default.createElement(t,null),r.default.createElement("div",null,e)))}},{key:"component",value:function(e,t,n,o){var l=this,a=this,u=function e(){a.hide(),["hashchange","popstate"].map(function(t){window.removeEventListener(t,e,!1)})};switch(["hashchange","popstate"].map(function(e){window.addEventListener(e,u,!1)}),this.timer=setTimeout(function(){o(),l.hide()},n),this.disable(),e){case"info":return this.commonDOM(t);case"loading":return this.commonDOM(t,r.default.createClass({render:function(){return r.default.createElement("i",{className:"zzrc-toast-text-loading"})}}));case"success":return this.commonDOM(t,r.default.createClass({render:function(){return r.default.createElement("i",{className:"zzrc-toast-text-success"},r.default.createElement("i",{className:"success"}))}}));case"fail":return this.commonDOM(t,r.default.createClass({render:function(){return r.default.createElement("i",{className:"zzrc-toast-text-fail"},r.default.createElement("span",null,r.default.createElement("i",{className:"top"}),r.default.createElement("i",{className:"bottom"})))}}))}}},{key:"success",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载成功",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=document.createElement("div");document.body.appendChild(e),(0,i.render)(this.component("success",t,n,o),e),this.currentDOM=e}},{key:"fail",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载失败",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=document.createElement("div");document.body.appendChild(e),(0,i.render)(this.component("fail",t,n,o),e),this.currentDOM=e}},{key:"info",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"这是纯文本toast提示！！",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=document.createElement("div");document.body.appendChild(e),(0,i.render)(this.component("info",t,n,o),e),this.currentDOM=e}},{key:"loading",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=document.createElement("div");document.body.appendChild(e),(0,i.render)(this.component("loading",t,n,o),e),this.currentDOM=e}},{key:"hide",value:function(){this.currentDOM&&document.body.removeChild(this.currentDOM),this.currentDOM=null,clearTimeout(this.timer),this.timer=null,this.enable()}},{key:"disable",value:function(){document.body.style.overflow="hidden",document.body.addEventListener("touchmove",this.forbidden,!1)}},{key:"enable",value:function(){document.body.style.overflow="",document.body.removeEventListener("touchmove",this.forbidden)}},{key:"forbidden",value:function(e){e.preventDefault(),e.stopPropagation()}}]),e}();t.default=new c},236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){alert("需要登录"),t("/login")};t.default={path:"/",component:n(237).default,childRoutes:[{path:"SlideLoader",getComponent:function(e,t){n.e(11,function(e){t(null,n(260).default)})}},{path:"ScrollTop",getComponent:function(e,t){n.e(4,function(e){t(null,n(258).default)})}},{path:"ListView",getComponent:function(e,t){n.e(13,function(e){t(null,n(251).default)})}},{path:"ActionSheet",getComponent:function(e,t){n.e(14,function(e){t(null,n(240).default)})}},{path:"Modal",getComponent:function(e,t){n.e(12,function(e){t(null,n(253).default)})}},{path:"Toast",getComponent:function(e,t){n.e(15,function(e){t(null,n(265).default)})}},{path:"Carousel",getComponent:function(e,t){n.e(8,function(e){t(null,n(242).default)})}},{path:"IMGScrollRow",getComponent:function(e,t){n.e(7,function(e){t(null,n(247).default)})}},{path:"Goods",getComponent:function(e,t){n.e(3,function(e){t(null,n(244).default)})}},{path:"TabRow",getComponent:function(e,t){n.e(9,function(e){t(null,n(264).default)})}},{path:"TabBar",getComponent:function(e,t){n.e(10,function(e){t(null,n(262).default)})},indexRoute:{component:n(109).default},childRoutes:[{path:"c",getComponent:function(e,t){!function(e){t(null,n(109).default)}(n)}},{path:"a",getComponent:function(e,t){n.e(1,function(e){t(null,n(165).default)})}},{path:"b",getComponent:function(e,t){n.e(0,function(e){t(null,n(166).default)})}}]},{path:"IMGPreview",getComponent:function(e,t){n.e(6,function(e){t(null,n(246).default)})}},{path:"IMGSwipe",getComponent:function(e,t){n.e(5,function(e){t(null,n(249).default)})}},{path:"login",getComponent:function(e,t){n.e(17,function(e){t(null,n(255).default)})}},{path:"messages",name:"messages",getComponent:function(e,t){n.e(16,function(e){t(null,n(256).default)})},onEnter:function(e,t){o(e,t)}},{path:"profile",getComponent:function(e,t){!function(e){t(null,n(109).default)}(n)},childRoutes:[{path:"a",getComponent:function(e,t){n.e(1,function(e){t(null,n(165).default)})}},{path:"b",getComponent:function(e,t){n.e(0,function(e){t(null,n(166).default)})}}]}]}},237:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),c=o(i),f=n(86);n(464);var d=n(254),s=o(d),p=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),r(t,[{key:"loadHandler",value:function(e,t){setTimeout(function(){e()},2e3)}},{key:"render",value:function(){return this.props.children?this.props.children:c.default.createElement(s.default,{loadHandler:this.loadHandler.bind(this)},c.default.createElement("div",{className:"home"},c.default.createElement("header",{className:"home-title"},"ZZLogic-React-Component"),c.default.createElement("ul",{className:"home-component"},c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/ActionSheet"},"ActionSheet 下方选择")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/Carousel"},"Carousel icon切换")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/Goods"},"Goods 商品卡片")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/IMGPreview"},"IMGPreview 图片预览")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/IMGScrollRow"},"IMGScrollRow 图片行显示")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/IMGSwipe"},"IMGSwipe 图片轮播")),c.default.createElement("s",null,c.default.createElement("i",null,c.default.createElement("li",null,"ListView 长列表"))),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/Modal"},"Modal 弹窗")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/ScrollTop"},"ScrollTop 返回顶部")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/SlideLoader"},"SlideLoader 加载更多")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/TabBar"},"TabBar bar切换")),c.default.createElement("li",null,c.default.createElement(f.Link,{to:"/TabRow"},"TabRow tab切换")),c.default.createElement("li",{className:"last-child"},c.default.createElement(f.Link,{to:"/Toast"},"Toast 轻提示")),c.default.createElement("li",{className:"hide"},c.default.createElement(f.Link,{to:"/login"},"Login")),c.default.createElement("li",{className:"hide"},c.default.createElement(f.Link,{to:"/messages"},"messages")),c.default.createElement("li",{className:"hide"},c.default.createElement(f.Link,{to:"/profile"},"profile"))),c.default.createElement("p",{style:{textAlign:"left",fontSize:"14px",color:"#666"}},"1、Home and TabRow Component show the 1px ui",c.default.createElement("br",null),"2、Home included the refreshControl, you can pull the page and look the component",c.default.createElement("br",null),"3、ListView TODO")))}}]),t}(i.Component);t.default=p},238:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var l=n(2),a=o(l),u=n(81),r=n(86),i=n(236),c=o(i);n(465),(0,u.render)(a.default.createElement(r.Router,{history:r.hashHistory,routes:c.default}),document.getElementById("app"))},254:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),c=o(i);n(473);var f=n(110),d=o(f),s=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={pullText:"下拉刷新",canRefresh:!1},n}return u(t,e),r(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"zzrc-rc"},c.default.createElement("div",{ref:"rc"},c.default.createElement("div",{className:"zzrc-rc-w",ref:"rcw"},c.default.createElement("div",{className:"zzrc-rc-w-loading"},c.default.createElement("i",{className:"zzrc-rc-w-loading-icon"})),c.default.createElement("div",{className:"zzrc-rc-w-text"},this.state.pullText)),c.default.createElement("div",{id:"pullId"},this.props.children)))}},{key:"shouldComponentUpdate",value:function(e,t){return e.pullText!=t.pullText||e.canRefresh!=t.canRefresh}},{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("pullId"),n=function(){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"下拉刷新";e.refs.rc.style.WebkitTransform="translateY(0)",setTimeout(function(){e.setState({pullText:t})},500)},o=void 0,l=void 0,a=void 0,u=void 0,r=void 0,i=void 0,c=void 0,f=void 0,s=!1;t.addEventListener("touchstart",function(e){o=!0,a=e.changedTouches[0].clientX,u=e.changedTouches[0].clientY},!1),t.addEventListener("touchmove",function(t){if(o&&1!=s&&(c=t.changedTouches[0].clientX,f=t.changedTouches[0].clientY,i=f-u,r=c-a,!(i<0))){var n=document.body.scrollTop;n<=0&&t.preventDefault(),l=!0,e.refs.rc.style.WebkitTransform="translateY("+i/4+"px)";var d=i/2-e.getRealPX(120)>0;e.setState({pullText:d?"释放刷新":"下拉刷新",canRefresh:d})}},!1),t.addEventListener("touchend",function(t){o&&l&&(l=!1,o=!1,e.state.canRefresh?(e.setState({pullText:"加载中..."}),e.refs.rc.style.WebkitTransform="translateY("+e.getRealPX(120)+"px)",new Promise(function(t,o){s=!0,e.props.loadHandler(t,o),setTimeout(function(){n()},1e4)}).then(function(e){s=!1,d.default.success(),n()},function(e){s=!1,d.default.fail(),n()})):n())},!1)};n()}},{key:"getRealPX",value:function(e){var t=document.documentElement.clientWidth,n=t/320*16;return 320*e/750/16*1*n}}]),t}(i.Component);t.default=s},464:function(e,t){},465:464,473:464,478:464});