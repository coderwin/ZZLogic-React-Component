import React, {Component} from 'react'
import IMGPreview from './IMGPreview'

export default class IMGPreviewDemo extends Component {
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
  close(){
    console.log('关闭回调')
  }
  preview(){
    this._preview = new IMGPreview().init({
      imgs: this.imgs,
      callback: this.close.bind(this)
    })
  }
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: "20px"}}>
        <li>图片大图预览IMGPreview</li>
        <li onClick={this.preview.bind(this)}>点我预览</li>
      </div>
    )
  }
}