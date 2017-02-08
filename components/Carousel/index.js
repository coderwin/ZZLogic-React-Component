import React, {Component} from 'react'
import Carousel from './Carousel'

export default class CarouselDemo extends Component {
  constructor(props) {
    super(props)
    this.items = [[{
      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200',// 显示的图标
      text: '图标1',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200',// 显示的图标
      text: '图标2',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: 'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200',// 显示的图标
      text: '图标3',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200',// 显示的图标
      text: '图标4',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200',// 显示的图标
      text: '图标5',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: 'http://zzpic5.58cdn.com.cn/zhuanzh/n_v1bkujjdzseevvqeusra2a.png?w=200&h=200',// 显示的图标
      text: '图标6',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标7',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标8',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标9',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标10',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    }],[{
      icon: '',// 显示的图标
      text: '图标11',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标12',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标13',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标14',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标15',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标16',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标17',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    }]]
  }

  render() {
    return (
      <div>
        <Carousel items={this.items} selected={0} showDots={true}/>
      </div>
    )
  }
}