import React, { Component } from 'react'
import { Link } from 'react-router'
import './Home.less'
import RefreshControl from '../../../../components/RefreshControl/RefreshControl';

export default class App extends Component {
  loadHandler(resolve, reject){
    setTimeout(()=>{
      resolve()
    }, 2000)
  }
  render() {
    if(this.props.children){
      return this.props.children
    }
    return (
      <RefreshControl loadHandler={this.loadHandler.bind(this)}>
      <div className="home">
        <header className="home-title">ZZLogic-React-Component</header>
        <ul className="home-component">
          <li><Link to="/ActionSheet">ActionSheet 下方选择</Link></li>
          <li><Link to="/Carousel">Carousel icon切换</Link></li>
          <li><Link to="/Goods">Goods 商品卡片</Link></li>
          <li><Link to="/IMGPreview">IMGPreview 图片预览</Link></li>
          <li><Link to="/IMGScrollRow">IMGScrollRow 图片行显示</Link></li>
          <li><Link to="/IMGSwipe">IMGSwipe 图片轮播</Link></li>
          <s><i><li>ListView 长列表</li></i></s>
          <li><Link to="/Modal">Modal 弹窗</Link></li>
          <li><Link to="/ScrollTop">ScrollTop 返回顶部</Link></li>
          <li><Link to="/SlideLoader">SlideLoader 加载更多</Link></li>
          <li><Link to="/TabBar">TabBar bar切换</Link></li>
          <li><Link to="/TabRow">TabRow tab切换</Link></li>
          <li className="last-child"><Link to="/Toast">Toast 轻提示</Link></li>

          <li className="hide"><Link to="/login">Login</Link></li>
          <li className="hide"><Link to="/messages">messages</Link></li>
          <li className="hide"><Link to="/profile">profile</Link></li>
        </ul>
        <p style={{textAlign: 'left', fontSize: '14px', color: '#666'}}>
          1、Home and TabRow Component show the 1px ui<br />
          2、Home included the refreshControl, you can pull the page and look the component<br />
          3、ListView TODO
        </p>
      </div>
      </RefreshControl>
    )
  }
}