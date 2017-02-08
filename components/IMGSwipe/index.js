import React, {Component} from 'react'
import IMGSwipe from './IMGSwipe'

export default class IMGSwipeDemo extends Component {
  constructor(props) {
    super(props)
    this.imgs = [{
      src: 'http://pic1.58cdn.com.cn/p1/big/n_v1bl2lwkadoesvqeovmmsq_d016075a4f426d09.png',
      href: 'http://baidu.com'
    },
    {
      src: 'http://pic1.58cdn.com.cn/p1/big/n_v1bl2lwwihkimfqvk22brq_6666f81f38fd44ce.png',
      href: 'http://baidu.com'
    },
    {
      src: 'http://pic1.58cdn.com.cn//p1/big/n_v1bl2lwklxlxlvooxwzzaq_d016075a4f426d09.png',
      href: 'http://baidu.com'
    }]
  }

  render() {
    return (
      <IMGSwipe imgs={this.imgs} height="260px"/>
    )
  }
}