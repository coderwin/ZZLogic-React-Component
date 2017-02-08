import React, {Component} from 'react'
import SlideLoader from './SlideLoader'

export default class SlideLoaderDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goods: []
    }
    this.LISTS = [1,2,3,4,5,6,7,8,9,10].map((item, index)=>{
      return {
        title: '我是列表的标题'+ item
      }
    })
  }
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: "20px"}}>
        <span>SlideLoader 测试</span>
        <SlideLoader
          canCancel={false}
          loadHandler={this.loadHandler.bind(this)}
          loadTip="加载中..." noMoreTip="没有更多啦">
          {
            this.state.goods.map((item, index)=>{
              return(
                <div key={index}>{item.title}</div>
              )
            })
          }
        </SlideLoader>
      </div>
    )
  }
  loadHandler(page=0, resolve, reject){
    // setTimeout as fetch
    setTimeout(()=>{
      this.setState({
        goods: this.state.goods.concat(this.LISTS).concat(this.LISTS)
      })

      if(this.LISTS.length==0){
        resolve&&resolve({
          tip: "没有更多啦...",
          noMore: true,
        })
      }else{
        resolve&&resolve()
      }
      //reject("加载出错，请重试");
    }, 100)
  }
}