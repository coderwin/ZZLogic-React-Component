webpackJsonp([3],{107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=r(c),u=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){new LazyLoad(this.refs.img)}},{key:"render",value:function(){return s.default.createElement("img",{ref:"img","data-src":this.props.src})}}]),t}(c.Component);t.default=u},108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=r(c);n(138);var u=n(107),f=r(u),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={containerWidth:"100%"},n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.initContainerWidth()}},{key:"initContainerWidth",value:function(){for(var e=0,t=this.refs.container.children,n=t.length,r=0;r<n;r++)console.log(t[r].offsetWidth),e+=t[r].offsetWidth;this.setState({containerWidth:e+(n-1)*this.props.view.split})}},{key:"handleIMGClick",value:function(e,t){e.tapCallback&&e.tapCallback(),this.props.tapCallback&&this.props.tapCallback(),e.href&&(location.href=e.href)}},{key:"px2REM",value:function(e){return 320*e/750/16+"rem"}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"zzrc-IMGScrollRow",ref:"wrap"},s.default.createElement("div",{className:"zzrc-IMGScrollRow-container clearfix",style:{width:this.state.containerWidth},ref:"container"},this.props.imgs.map(function(t,n){return s.default.createElement("div",{key:n,className:"zzrc-IMGScrollRow-item",onClick:e.handleIMGClick.bind(e,t),style:{width:e.px2REM(parseInt(e.props.view.width)),height:e.px2REM(parseInt(e.props.view.height)),marginRight:n==e.props.imgs.length-1?0:e.props.view.split+"px"}},s.default.createElement(f.default,{src:t.url||t}))})))}}]),t}(c.Component);p.propTypes={imgs:s.default.PropTypes.array,view:s.default.PropTypes.object,tapCallback:s.default.PropTypes.func},p.defaultProps={imgs:[{url:"http://pic3.58cdn.com.cn/zhuanzh/n_v1bl2lwxqsdh6vos6ciiya_750_1274.jpg",href:"http://www.baidu.com",tapCallback:function(){console.log(0)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(1)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(2)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(3)}},{url:"http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200",href:"http://www.baidu.com",tapCallback:function(){console.log(4)}}],view:{height:200,width:160,split:2,splitColor:"#ccc"},tapCallback:function(){console.log("我被点击了")}},t.default=p},137:function(e,t,n){t=e.exports=n(26)(),t.push([e.id,"::-webkit-scrollbar{display:none}.zzrc-IMGScrollRow{width:100%;overflow:auto}.zzrc-IMGScrollRow-container{-webkit-overflow-scrolling:touch;overflow-y:hidden}.zzrc-IMGScrollRow-item{overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;-webkit-filter:brightness(.8);filter:brightness(.8)}.zzrc-IMGScrollRow-item:last-child{margin-right:0}",""])},138:function(e,t,n){var r=n(137);"string"==typeof r&&(r=[[e.id,r,""]]);n(27)(r,{});r.locals&&(e.exports=r.locals)},243:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=r(c),u=n(108),f=r(u),p=n(266),d=r(p);n(468);var h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return a(t,e),l(t,[{key:"handleClick",value:function(e,t){this.props.infoClick&&this.props.infoClick(e,t)}},{key:"render",value:function(){var e=this.props.itemClass,t=this.props.info;return s.default.createElement("div",{className:e+" zzrc-goods",onClick:this.handleClick.bind(this,t)},s.default.createElement("div",{className:e+"-nav zzrc-goods-nav"},s.default.createElement("span",{className:"zzrc-goods-nav-avatar",style:{backgroundImage:"url("+t.userPic+")"}}),s.default.createElement("span",{className:"zzrc-goods-nav-username"},t.userName),s.default.createElement("span",{className:"zzrc-goods-nav-time"},t.time)),s.default.createElement(f.default,{src:d.default.handleBundle(t.imgs.join("|"))}),s.default.createElement("div",{className:e+"-price zzrc-goods-price"},s.default.createElement("span",null,"￥"+t.price),t.originPrice&&t.originPrice>0?s.default.createElement("span",null,"￥"+t.originPrice):""),s.default.createElement("div",{className:e+"-describe zzrc-goods-describe"},t.describe),s.default.createElement("div",{className:e+"-label zzrc-goods-label"},t.infoLabels.map(function(e,t){return s.default.createElement("span",{key:t},e)})),s.default.createElement("div",{className:e+"-footer zzrc-goods-footer"},s.default.createElement("span",{className:"zzrc-goods-address"}),s.default.createElement("span",null,t.address)))}}]),t}(c.Component);h.PropTypes={info:s.default.PropTypes.object,type:s.default.PropTypes.string,itemClass:s.default.PropTypes.string,infoClick:s.default.PropTypes.func},h.defaultProps={type:"card",itemClass:"goods-item",info:{userId:"43055704613652",infoId:"806029615090417668",userName:"两个小妞的妈咪",infoTitle:"千趣会 连衣裙",describe:"日本代购，没穿几次，搭配短款羽绒服啥的特别漂亮，两岁左右宝宝穿。搭配短款羽绒服啥的特别漂亮",infoLabels:["全新"],price:1212,originPrice:0,time:"2分钟前",address:"合肥 政务",userPic:"http://zzpic4.58cdn.com.cn/zhuanzh/n_v1bl2lwkfacejvqqqxzuva.png",imgs:["n_v1bkujjd75mbdfqc6c6bha.jpg","n_v1bl2lwkh7mbdfr4kvuyga.jpg","n_v1bj3gzr76mbdfq7wtmrra.jpg"]},infoClick:function(){}},t.default=h},244:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=r(c),u=n(243),f=r(u),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.info={userId:"43055704613652",infoId:"806029615090417668",userName:"两个小妞的妈咪",infoTitle:"千趣会 连衣裙",describe:"日本代购，没穿几次，搭配短款羽绒服啥的特别漂亮，两岁左右宝宝穿,两岁左右宝宝穿,两岁左右宝宝穿,两岁左右宝宝穿",infoLabels:["全新"],price:1212,originPrice:0,time:"2分钟前",address:"合肥 政务",userPic:"http://zzpic4.58cdn.com.cn/zhuanzh/n_v1bl2lwkfacejvqqqxzuva.png",imgs:["n_v1bkujjd75mbdfqc6c6bha.jpg","n_v1bl2lwkh7mbdfr4kvuyga.jpg","n_v1bj3gzr76mbdfq7wtmrra.jpg"]},n}return a(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(f.default,{info:this.info,type:"card",itemClass:"goods-item"}),s.default.createElement(f.default,{info:this.info,type:"card",itemClass:"goods-item"}),s.default.createElement(f.default,{info:this.info,type:"card",itemClass:"goods-item"}),this.props.children)}}]),t}(c.Component);t.default=p},266:function(e,t){"use strict";function n(){var e="http://picx.58cdn.com.cn/zhuanzh/",t=Math.ceil(8*Math.random());return e.replace("x",t)}Object.defineProperty(t,"__esModule",{value:!0});var r=[window.navigator.appVersion.match(/iphone/gi),window.devicePixelRatio],o=(r[0],r[1],/^http\:\/\/wx.qlogo.cn/),i=/^http\:\/\/img\.58cdn\.com\.cn/,a=/^http:\/\/pic[1-8]\.58cdn\.com\.cn\/zhuanzh\//,l=/^http:\/\/pic\.58\.com\//,c=/(\.(png|jpg|gif))/;t.default={handleSingle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,s="_"+t+"_"+r;if(!e||""===e)return"";if(o.test(e)){var u=e.lastIndexOf("/");return e=e.substr(0,u),e+"/96"}return i.test(e)?e:l.test(e)?e.replace(c,s+"$1"):a.test(e)?e.replace(c,s+"$1"):n()+e.replace(c,s+"$1")},handleBundle:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,o=e?e.split("|"):[];if(!o.length)return[];var i=[];return o.map(function(e){i.push(t.handleSingle(e,n,r))}),i}}},452:function(e,t,n){t=e.exports=n(26)(),t.push([e.id,".zzrc-goods{padding:.8rem;font-size:.8rem;border-top:.32rem solid #f5f5f5}.zzrc-goods-nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:1.6rem;margin-bottom:.53333333rem}.zzrc-goods-nav-avatar{height:1.6rem;width:1.6rem;display:inline-block;background-size:cover;border-radius:50%;margin-right:.53333333rem}.zzrc-goods-nav-time{position:absolute;right:.8rem;font-size:.69333333rem;color:#aaaeb9}.zzrc-goods-imgs{height:5.33333333rem;line-height:5.33333333rem}.zzrc-goods-price{margin-top:.53333333rem;color:#ff583f}.zzrc-goods-describe{margin-top:.53333333rem;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.zzrc-goods-label{margin-top:.53333333rem;display:inline-block;color:#fe5117;font-size:.64rem;width:1.81333333rem;height:.96rem;line-height:.96rem;text-align:center;background-color:#fce0cb;margin-right:.21333333rem;border-radius:.10666667rem}.zzrc-goods-footer{margin-top:10px;color:#aaaeb9}",""])},468:function(e,t,n){var r=n(452);"string"==typeof r&&(r=[[e.id,r,""]]);n(27)(r,{});r.locals&&(e.exports=r.locals)}});