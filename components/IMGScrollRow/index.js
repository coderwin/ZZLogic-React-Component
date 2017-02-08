import React, {Component} from 'react'
import IMGScrollRow from './IMGScrollRow'

export default class IMGScrollRowDemo extends Component {
  constructor(props) {
    super(props)
    this.defaultProps = {
      imgs: [{
        url: 'http://pic3.58cdn.com.cn/zhuanzh/n_v1bl2lwxqsdh6vos6ciiya_750_1274.jpg',
        href: 'http://www.baidu.com',
        tapCallback: ()=>{
          console.log(0)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=>{
          console.log(1)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=> {
          console.log(2)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=> {
          console.log(3)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=> {
          console.log(4)
        }
      },{
        url: 'http://pic3.58cdn.com.cn/zhuanzh/n_v1bl2lwxqsdh6vos6ciiya_750_1274.jpg',
        href: 'http://www.baidu.com',
        tapCallback: ()=>{
          console.log(0)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=>{
          console.log(1)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=> {
          console.log(2)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=> {
          console.log(3)
        }
      },{
        url: 'http://pic7.58cdn.com.cn/zhuanzh/n_v1bl2lwkf5w3kfpti4sbsa.jpg?w=200&h=200',
        href: 'http://www.baidu.com',
        tapCallback: ()=> {
          console.log(4)
        }
      }],
      view: {
        height: 100,
        width: 60,
        split: 5
      },
      tapCallback: function(){
        console.log('我被点击了')
      },
    }
  }

  render() {
    return (
      <IMGScrollRow imgs={this.defaultProps.imgs} height={this.defaultProps.height} tapCallback={this.defaultProps.tapCallback}/>
    )
  }
}