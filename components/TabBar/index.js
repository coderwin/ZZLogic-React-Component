import React, {Component} from 'react'
import TabBar from './TabBar'

export default class TabBarDemo extends Component {
  constructor(props) {
    super(props)
    this.tabs = [{
      text: '首页',
      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200',
      link: '/TabBar/c',
      callback: null
    },{
      text: '发现',
      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200',
      link: '/TabBar/a',
      callback: null
    },{
      text: '联系人',
      icon: 'http://wx.qlogo.cn/mmopen/lCwVB66etfBcSSOJzKPib8kqSXVkksIj6OWWXCMHmZftrpokXwlVtIibS8nq6LYLibrIicQWUBugmb8ib4fkEahhGtg/96',
      link: '/TabBar/b',
      callback: null
    },{
      text: '我的',
      icon: 'http://avatars2.githubusercontent.com/u/8546902',
      link: '/TabBar/b',
      activeCallback: function(){
        alert('需要登录')
        this.props.router.push('/login')
      }
    }]
  }

  render() {
    return (
      <div>
        <TabBar tabs={this.tabs} />
        {this.props.children}
        <div style={{textAlign: 'center', marginTop: "20px"}}>切换TabBar</div>
      </div>
    )
  }
}