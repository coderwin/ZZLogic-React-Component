import React, {Component} from 'react'
import {render} from 'react-dom'
import './IMGPreview.less'
import SWIPEABLE from '../libs/Swipeable'

class IMGPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      currentTranslateX: 0,
      toast: false,
      tosatMsg: this.props.toastMsg,
    }
    this.initProps()
  }
  initProps() {
    console.log(this.props.imgs)
    this.isAmaniting = false
    this.imgsURL = this.getImgsURL()
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
    this.imgsWidth = (this.props.imgs.length + 2) * this.clientWidth + 'px'
    this.isMultiple = this.props.imgs.length > 1
  }
  getImgsURL() {
    if (typeof this.props.imgs[0] == 'string') {
      return this.props.imgs
    }
    let imgsURL = []
    for (let i = 0, len = this.props.imgs.length; i < len; i++) {
      imgsURL.push(this.props.imgs[i].src)
    }
    console.log(imgsURL)
    return imgsURL
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.currentTranslateX == nextState.currentTranslateX
      &&this.state.toast==nextState.toast) {
      return false
    }
    return true
  }
  componentDidUpdate() {
    this.setTransform(this.refs.preview, 'translate3d(' + this.state.currentTranslateX + ',0,0)');
  }
  imageSwipe(type){
    // 正在移动 不能继续滑动
    if (this.isAmaniting) return
    if(this.state.currentIndex == this.props.imgs.length-1
      &&type=='left'&&this.props.toastShow){
      this.setState({toast: true})
      setTimeout(()=>{this.setState({toast: false})},1000)
      return;
    }
    if(this.state.currentIndex == 0&&type=='right'&&this.props.toastShow){
      this.setState({toast: true})
      setTimeout(()=>{this.setState({toast: false})},1000)
      return;
    }

    let swipeWidth = this.clientWidth,
      imgsLength = this.props.imgs.length,
      currentIndex = this.state.currentIndex

    if (type == 'left') {
      this.setState({
        isAmaniting: true,
        currentIndex: currentIndex + 1,
        currentTranslateX: -1 * (currentIndex + 1) * this.clientWidth + 'px'
      })
    } else {
      this.setState({
        isAmaniting: true,
        currentIndex: currentIndex - 1,
        currentTranslateX: -1 * (currentIndex - 1) * this.clientWidth + 'px'
      })
    }
    this.setTransition(this.refs.preview, 'transform ' + this.props.duration + 'ms ease-in-out')

    setTimeout(() => {
      this.isAmaniting = false
    }, this.props.duration)

    console.log('swipe-'+type+ this.state.currentIndex)
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
  callback(){
    this.props.nextTask()
  }
  render() {
    return (
      <SWIPEABLE
        onSwipedRight={this.imageSwipe.bind(this, 'right')}
        onSwipedLeft={this.imageSwipe.bind(this, 'left')}>
        <div className="zzrc-preview"
           onClick={this.callback.bind(this)}>
          <div className="zzrc-preview-imgs" style={{width: this.imgsWidth}} ref="preview">
          {
            this.imgsURL.map((item, index) => {
              console.log(item)
              return (
                <img
                  key={index}
                  className={'zzrc-preview-item'}
                  src={item}
                  style={{width: this.clientWidth + 'px'}}
                />
              )
            })
          }
          </div>
          <div className="zzrc-preview-index" style={{
            top: this.props.indexPosition,
            display: (this.props.indexShow && this.isMultiple)?'block': 'none'}}>
            {
              this.props.indexType == 'process' ? this.props.imgs.map((item, index) => {
                return (
                  <span
                    className="zzrc-preview-index-item"
                    key={index}>
                    -
                  </span>
                )
              }) : <span>{(this.state.currentIndex+1)+"/"+this.props.imgs.length}</span>
            }
          </div>
          <div style={{display: this.state.toast?'block':'none'}} className="zzrc-preview-toast">
            {this.props.toastMsg}
          </div>
        </div>
      </SWIPEABLE>
    )
  }

  static propTypes = {
    imgs: React.PropTypes.array,
    autoPlay: React.PropTypes.bool,
    duration: React.PropTypes.number,
    indexShow: React.PropTypes.bool,
    indexType: React.PropTypes.string,
    indexColor: React.PropTypes.string,
    indexPosition: React.PropTypes.string,
    currentIndexColor: React.PropTypes.string,
    toastShow: React.PropTypes.bool,
    toastMsg: React.PropTypes.string,
  };

  static defaultProps = {
    /**
     * 可直接传入url数组，也可以传入对象数组
     * @imgs[index].src 图片路径
     * @imgs[index].href 图片跳转链接
     */
    imgs: [],

    /**
     * 自动轮播间隔时间，<=duration不启用
     */
    autoPlay: true,

    /**
     * 轮播滑动过程耗时
     * 单位：ms
     */
    duration: 600,

    /**
     * 展示当前位置的几种不同的方式[显示数字/显示进度条等]
     */
    indexType: 'number',

    /**
     * 是否显示当前是第几张
     */
    indexShow: true,

    /**
     * index颜色
     */
    indexColor: '#dbd8d8',

    /**
     * 圆点位置（离底部高度）
     */
    indexPosition: '1rem',

    /**
     * 正在展示的图片对应圆点的颜色
     */
    currentIndexColor: '#ffffff',

    /**
     * 是否展示滑到首位的toast
     */
    toastShow: true,

    /**
     * toast提示文案
     */
    toastMsg: '不能再翻了'
  };
}
export default class Preview {
  init(props){
    this.bindHashChange()
    this._preview = document.createElement('div')
    document.body.appendChild(this._preview)
    props.nextTask = () => {
      this.close()
      props.callback&&props.callback()
    }
    render(<IMGPreview {...props} />, this._preview)
    return this
  }
  bindHashChange(){
    var hide = () => {
      this.close()
      ['hashchange', 'popstate'].map((event) => {
        window.removeEventListener(event, hide, false);
      })
    }
    ['hashchange', 'popstate'].map((event) => {
      window.addEventListener(event, hide, false);
    })
  }
  close(){
    document.body.removeChild(this._preview)
    this._preview = null
    // this._preview.remove()
  }
}

