import React, {Component} from 'react'
import './ScrollTop.less'

export default class ScrollTop extends Component{
  constructor(props){
    super(props)
    this.state = {
      iconShow: false
    }
  }
  componentDidMount(){
    document.addEventListener('scroll', ()=>{
      this.setState({
        iconShow: this.getIconShow()
      })
    }, false)
  }
  getIconShow(){
    return document.body.scrollTop >= parseInt(this.props.actionTop)
  }
  scrollTop(){
    if(!this.props.toId){
      var step = () =>{
        document.body.scrollTop -= 150;
        if (document.body.scrollTop > this.props.scrollTop) {
          requestAnimationFrame(step);
        }else{
          window.scrollTo(0, this.props.scrollTop)
        }
      }
      requestAnimationFrame(step)
      return
    }
    // 待优化
    document.querySelector(this.props.toId).scrollIntoView()
  }
  render(){
    return(
      <div className="zzrc-scrolltop" onClick={this.scrollTop.bind(this)}
        style={{backgroundImage: 'url('+this.props.icon+')',
         ...this.zifScroll,
         ...this.props.view}}
      ></div>
    )
  }
  // 计算属性-展示 > v-if
  get zifScroll(){
    return {
      display: this.state.iconShow?"block":'none'
    }
  }
  static PropTypes={
    icon: React.PropTypes.string,
    view: React.PropTypes.object,
    callback: React.PropTypes.func,
    actionTop: React.PropTypes.number,
    scrollTop: React.PropTypes.number,
  };
  static defaultProps = {
    // 回到顶部图标
    icon: require('./top.png'),
    // 回到顶部的显示样式
    view: {
      // 宽度(支持rem)
      width: "50px",
      // 高度
      height: "50px",
      right: "15px",
      bottom: "50px",
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
  };
}