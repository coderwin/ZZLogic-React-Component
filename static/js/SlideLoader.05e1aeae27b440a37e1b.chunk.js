webpackJsonp([1,19],{544:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(304),c=o(s),u=n(545),d=o(u),p=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={goods:[]},n.LISTS=[1,2,3,4,5,6,7,8,9,10].map(function(e,t){return{title:"我是列表的标题"+e}}),n}return a(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},c.default.createElement("span",null,"SlideLoader 测试"),c.default.createElement(d.default,{canCancel:!1,loadHandler:this.loadHandler.bind(this),loadTip:"加载中...",noMoreTip:"没有更多啦"},this.state.goods.map(function(e,t){return c.default.createElement("div",{key:t},e.title)})))}},{key:"loadHandler",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,this),t=arguments[1];arguments[2];setTimeout(function(){e.setState({goods:e.state.goods.concat(e.LISTS).concat(e.LISTS)}),0==e.LISTS.length?t&&t({tip:"没有更多啦...",noMore:!0}):t&&t()},100)}}]),t}(s.Component);t.default=p},545:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(304),u=o(c);n(546);var d=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loadShow:!1,isLoading:!1,loadTip:n.props.loadTip},n._curScrollTop=0,n}return a(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"zzrc-ls"},u.default.createElement("div",{id:"slideId"},this.props.children),u.default.createElement("div",{className:"zzrc-ls-w",style:l({},this.loadShow)},u.default.createElement("span",{className:"zzrc-ls-w-icon",style:l({},this.loadingShow)}),u.default.createElement("span",{className:"zzrc-ls-w-text"},this.state.loadTip)))}},{key:"shouldComponentUpdate",value:function(e,t){return e.loadShow!=t.loadShow||e.isLoading!=t.isLoading||e.loadTip!=t.loadTip}},{key:"componentDidMount",value:function(){this.initEvents(),this._pageNum=1,this.props.loadHandler(this._pageNum)}},{key:"initEvents",value:function(){var e=document.getElementById("slideId");e.addEventListener("touchstart",this.startHandler.bind(this),!1),e.addEventListener("touchmove",this.moveHandler.bind(this),!1),this.props.canCancel&&e.addEventListener("touchend",this.endHandler.bind(this),!1)}},{key:"startHandler",value:function(e){this._startY=e.changedTouches[0].clientY,this._start=!0}},{key:"moveHandler",value:function(e){if(this._start&&!this._noMore&&!(e.changedTouches[0].clientY-this._startY>0)&&(this.isScrollBottom()||this.notFullPage())&&!this.state.isLoading&&(this.showLoading(this.props.loadTip,!0),this._canLoadMore=!0,!this.props.canCancel)){if(this._noMore)return;this.loadMore()}}},{key:"endHandler",value:function(e){return e.changedTouches[0].clientY-this._startY>0||!this.isScrollBottom()?void this.closeLoading():void(this._noMore||this._canLoadMore&&this.loadMore())}},{key:"loadMore",value:function(){var e=this;new Promise(function(t,n){e.props.loadHandler(++e._pageNum,t,n)}).then(function(t){e._canLoadMore=!1,e.closeLoading(),t&&t.noMore&&(e._noMore=!0,e.showLoading(t.tip||e.props.noMoreTip))},function(t){e._canLoadMore=!1,e.closeLoading(),t&&e.showLoading(t.tip||e.props.failTip)})}},{key:"showLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?void this.setState({loadShow:!0,isLoading:t,loadTip:e}):void this.setState({loadShow:!0,isLoading:!0})}},{key:"closeLoading",value:function(){this.setState({loadShow:!1,isLoading:!1})}},{key:"notFullPage",value:function(){return document.documentElement.clientHeight>=this.getDocHeight()}},{key:"isScrollBottom",value:function(){return this.getScrollTop()+this.getClientHeight()+20>=this.getDocHeight()}},{key:"getScrollTop",value:function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop)}},{key:"getDocHeight",value:function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"getClientHeight",value:function(){return document.documentElement.clientHeight}},{key:"loadShow",get:function(){return{display:this.state.loadShow?"block":"none"}}},{key:"loadingShow",get:function(){return{display:this.state.isLoading?"inline-block":"none"}}}]),t}(c.Component);d.propTypes={loadTip:u.default.PropTypes.string,noMoreTip:u.default.PropTypes.string,failTip:u.default.PropTypes.string,loadHandler:u.default.PropTypes.func,canCancel:u.default.PropTypes.bool},d.defaultProps={loadTip:"加载中...",noMoreTip:"没有更多啦",failTip:"加载出错，请重试",canCancel:!1,loadHandler:function(){}},t.default=d},546:function(e,t,n){var o=n(547);"string"==typeof o&&(o=[[e.id,o,""]]);n(536)(o,{});o.locals&&(e.exports=o.locals)},547:function(e,t,n){t=e.exports=n(535)(),t.push([e.id,"@-webkit-keyframes spinning{0%{-webkit-transform:rotate(0deg)}50%{-webkit-transform:rotate(100deg)}to{-webkit-transform:rotate(1turn)}}.zzrc-ls-w{text-align:center;margin:.26666667rem 0}.zzrc-ls-w-icon{display:inline-block;width:.8rem;height:.8rem;border:.16rem solid #ccc;border-radius:50%;border-bottom-color:transparent;-webkit-animation:spinning 1s linear infinite}.zzrc-ls-w-text{margin-left:.53333333rem;line-height:1.06666667rem;font-size:.74666667rem;color:#444;position:relative;top:-.26666667rem}",""])}});