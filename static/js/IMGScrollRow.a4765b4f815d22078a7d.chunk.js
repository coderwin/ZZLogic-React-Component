webpackJsonp([8,19],{571:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(304),u=o(a),s=n(572),f=o(s),p=function(t){function e(t){r(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.defaultProps={imgs:[{url:"http://pic3.58cdn.com.cn/zhuanzh/n_v1bl2lwxqsdh6vos6ciiya_750_1274.jpg",href:"http://www.baidu.com",tapCallback:function(){console.log(0)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(1)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(2)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(3)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(4)}},{url:"http://pic3.58cdn.com.cn/zhuanzh/n_v1bl2lwxqsdh6vos6ciiya_750_1274.jpg",href:"http://www.baidu.com",tapCallback:function(){console.log(0)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(1)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(2)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(3)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(4)}}],view:{height:100,width:60,split:5},tapCallback:function(){console.log("我被点击了")}},n}return c(e,t),l(e,[{key:"render",value:function(){return u.default.createElement(f.default,{imgs:this.defaultProps.imgs,height:this.defaultProps.height,tapCallback:this.defaultProps.tapCallback})}}]),e}(a.Component);e.default=p},572:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(304),u=o(a);n(573);var s=n(575),f=o(s),p=function(t){function e(t){r(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={containerWidth:"100%"},n}return c(e,t),l(e,[{key:"componentDidMount",value:function(){this.initContainerWidth()}},{key:"initContainerWidth",value:function(){for(var t=0,e=this.refs.container.children,n=e.length,o=0;o<n;o++)console.log(e[o].offsetWidth),t+=e[o].offsetWidth;this.setState({containerWidth:t+(n-1)*this.props.view.split})}},{key:"handleIMGClick",value:function(t,e){t.tapCallback&&t.tapCallback(),this.props.tapCallback&&this.props.tapCallback(),t.href&&(location.href=t.href)}},{key:"px2REM",value:function(t){return 320*t/750/16+"rem"}},{key:"render",value:function(){var t=this;return u.default.createElement("div",{className:"zzrc-IMGScrollRow",ref:"wrap"},u.default.createElement("div",{className:"zzrc-IMGScrollRow-container clearfix",style:{width:this.state.containerWidth},ref:"container"},this.props.imgs.map(function(e,n){return u.default.createElement("div",{key:n,className:"zzrc-IMGScrollRow-item",onClick:t.handleIMGClick.bind(t,e),style:{width:t.px2REM(parseInt(t.props.view.width)),height:t.px2REM(parseInt(t.props.view.height)),marginRight:n==t.props.imgs.length-1?0:t.props.view.split+"px"}},u.default.createElement(f.default,{src:e.url||e}))})))}}]),e}(a.Component);p.propTypes={imgs:u.default.PropTypes.array,view:u.default.PropTypes.object,tapCallback:u.default.PropTypes.func},p.defaultProps={imgs:[{url:"http://pic3.58cdn.com.cn/zhuanzh/n_v1bl2lwxqsdh6vos6ciiya_750_1274.jpg",href:"http://www.baidu.com",tapCallback:function(){console.log(0)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(1)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(2)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(3)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(4)}}],view:{height:200,width:160,split:2,splitColor:"#ccc"},tapCallback:function(){console.log("我被点击了")}},e.default=p},573:function(t,e,n){var o=n(574);"string"==typeof o&&(o=[[t.id,o,""]]);n(536)(o,{});o.locals&&(t.exports=o.locals)},574:function(t,e,n){e=t.exports=n(535)(),e.push([t.id,"::-webkit-scrollbar{display:none}.zzrc-IMGScrollRow{width:100%;overflow:auto}.zzrc-IMGScrollRow-container{-webkit-overflow-scrolling:touch;overflow-y:hidden}.zzrc-IMGScrollRow-item{overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;-webkit-filter:brightness(.8);filter:brightness(.8)}.zzrc-IMGScrollRow-item:last-child{margin-right:0}",""])},575:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(304),u=o(a),s=n(576),f=o(s),p=function(t){function e(){return r(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,t),l(e,[{key:"componentDidMount",value:function(){new f.default(this.refs.img)}},{key:"render",value:function(){return u.default.createElement("img",{ref:"img","data-src":this.props.src})}}]),e}(a.Component);e.default=p},576:function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;n(this,t),this.setele=e,this.flag=!1,this.preView=o,this.init()}return o(t,[{key:"init",value:function(){var t=this;this.showimg(),window.addEventListener("resize",function(){t.showimg()}),window.addEventListener("scroll",function(){t.showimg()})}},{key:"showimg",value:function(){if(!this.flag){var t=this.getTop(this.setele),e=document.body.scrollTop+window.screen.height;t-this.preView<=e&&t+this.preView>=document.body.scrollTop&&(this.flag=!0,this.setsrc())}}},{key:"getTop",value:function(t){for(var e=t.offsetTop,n=t.offsetParent;null!=n;)e+=n.offsetTop,n=n.offsetParent;return e}},{key:"setsrc",value:function(){var t=this.setele.getAttribute("data-src");t&&this.adjust(this.setele,t)}},{key:"adjust",value:function(t,e){var n=new Image;n.addEventListener("load",function(){var o=n.width,r=n.height,i=t.parentNode.offsetWidth,c=t.parentNode.offsetHeight,l=r/o,a=c/i;t.src=e,t.removeAttribute("data-src"),l>a?t.style.width="100%":t.style.height="100%"}),n.src=e}}]),t}();e.default=r}});