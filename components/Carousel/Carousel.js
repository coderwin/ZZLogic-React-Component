import React, {Component} from 'react'
import './Carousel.less'
import SWIPEABLE from '../libs/Swipeable'
export default class Carousel extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      currentTranslateX: 0,
    }
    this.isAmaniting = false
    this.clientWidth = document.documentElement.clientWidth
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.currentTranslateX == nextState.currentTranslateX) {
      return false
    }
    return true
  }
  componentDidUpdate() {
    this.setTransform(this.refs.pages, 'translate3d(' + this.state.currentTranslateX + ',0,0)');
  }
  setTransition(ele, val) {
    ele.style.transition = val;
    ele.style.WebkitTransition = '-webkit-' + val;
    ele.style.MozTransition = '-moz-' + val;
    ele.style.OTransition = '-o-' + val;
  }

  setTransform(ele, val) {
    ele.classList.remove('zzrc-swipe-reset-transiton')
    ele.style.transform = val;
    ele.style.WebkitTransform = val;
    ele.style.MozTransform = val;
    ele.style.OTransform = val;
  }
  pannelChange(type){
    // 正在移动 不能继续滑动
    if (this.isAmaniting) return

    if(this.state.selected == this.props.items.length-1
      &&type=='left'){
      return;
    }
    if(this.state.selected == 0&&type=='right'){
      return;
    }

    let swipeWidth = this.clientWidth,
      imgsLength = this.props.items.length,
      selected = this.state.selected

    if (type == 'left') {
      this.setState({
        isAmaniting: true,
        selected: selected + 1,
        currentTranslateX: -1 * (selected + 1) * this.clientWidth + 'px'
      })
    } else {
      this.setState({
        isAmaniting: true,
        selected: selected - 1,
        currentTranslateX: -1 * (selected - 1) * this.clientWidth + 'px'
      })
    }
    this.setTransition(this.refs.pages, 'transform ' + this.props.duration + 'ms ease-in-out')

    setTimeout(() => {
      this.isAmaniting = false
    }, this.props.duration)

    console.log('swipe-'+type+ this.state.selected)
  }
  getRealPX(px){
    let width =  document.documentElement.clientWidth;
    let rem2px = width / 320 * 16;
    return px * 320/750/16*1 * rem2px;
  }
  render(){
    return(
      <SWIPEABLE
        onSwipedRight={this.pannelChange.bind(this, 'right')}
        onSwipedLeft={this.pannelChange.bind(this, 'left')}>
        <div className="zzrc-carousel">
          <div
            className="zzrc-carousel-pages clearfix"
            style={{width: this.props.items.length*this.clientWidth+'px'}} ref="pages">
            {
              this.props.items.map((page, index)=>{
                return(
                  <ul key={index} className="page" style={{width: this.clientWidth}}>
                    {
                      page.map((item, index1)=>{
                        return(
                          <li
                            key={index1} className="icon"
                            style={{width: this.clientWidth/5-this.getRealPX(20)+'px'}}>
                            <img src={item.icon||'http://zzpic1.58cdn.com.cn/zhuanzh/n_v1bl2lwtjskq4vrccdrj4q.png?w=200&h=200'} alt={'显示'+item.text}/>
                            <div>{item.text}</div>
                          </li>
                        )
                      })
                    }
                  </ul>
                )
              })
            }
          </div>
          <div className="zzrc-carousel-points">
            {
              this.props.items.map((page, index)=>{
                return(
                  <span key={index} className="point" style={{
                    background: (index==this.state.selected)&&'red'
                  }}></span>
                )
              })
            }
          </div>
        </div>
      </SWIPEABLE>
    )
  }

  static PropTypes = {
    items: React.PropTypes.array,
    height: React.PropTypes.string,
    selected: React.PropTypes.number,
    showDots: React.PropTypes.bool,
    beforeChange: React.PropTypes.func,
    afterChange: React.PropTypes.func
  };
  static defaultProps = {
    items: [[{
      icon: '',// 显示的图标
      text: '图标1',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标2',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标3',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标4',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标5',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    },{
      icon: '',// 显示的图标
      text: '图标6',// 显示的文案
      link: '',// 跳转URL
      tapCallback: () => {
        console.log('我被点击了')
      }
    }],[{
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
    },{
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
    }],[{
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
    }]],
    selected: 0,
    showDots: true,
    duration: 400,
    beforeChange: ()=>{},
    afterChange: ()=>{},
  };
}