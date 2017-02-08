import React, {Component} from 'react'
import ScrollTop from './ScrollTop'

export default class ScrollTopDemo extends Component {
  constructor(props) {
    super(props)
  }
  getRealPX(px){
    let width =  document.documentElement.clientWidth;
    let rem2px = width / 320 * 16;
    return px * 320/750/16*1 * rem2px+"px";
  }
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: "20px"}}>
        <div>返回顶部ScrollTop</div>
        <div id="header">我是header</div>
        <ul>
          我是内容
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <div id="nav">我是nav</div>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <ScrollTop {...{
          // 回到顶部图标
          icon: require('./top.png'),
          // 回到顶部的显示样式
          view: {
            // 宽度(支持rem)
            width: this.getRealPX(100),
            // 高度
            height: this.getRealPX(100),
            right: this.getRealPX(30),
            bottom: this.getRealPX(100),
            opacity: .6,
          },
          // scroll滚动到什么时候开始显示回到顶部
          actionTop: 200,
          // 回到具体某个元素
          // toId: "#nav",
          // 默认回到顶部 可以设置回到固定位置
          scrollTop: 0,
          // 滚动完成的回调函数
          callback: ()=>{
            console.log('回到顶部')
          }
        }}/>
        {this.props.children}
      </div>
    )
  }
}