import React, {Component} from 'react'

import './IMGSwipe.less'
import Swipeable from '../libs/Swipeable'

export default class IMGSwipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      currentTranslateX: 0,
    }
    this.initProps()
  }

  initProps() {

    this.isAmaniting = false

    this.imgsURL = this.getImgsURL()
    this.clientWidth = document.documentElement.clientWidth
    this.initLeft = -this.clientWidth + 'px'
    this.imgsWidth = (this.props.imgs.length + 2) * this.clientWidth + 'px'
    this.isMultiple = this.props.imgs.length > 1
    this.spacingVal = this.getSpacingVal()
  }

  px2REM(px){
    return px*320/750/16 + "rem"
  }

  getImgsURL() {
    if (typeof this.props.imgs[0] == 'string') {
      return this.props.imgs
    }
    let IMGURL = []
    for (let i = 0, len = this.props.imgs.length; i < len; i++) {
      IMGURL.push(this.props.imgs[i].src)
    }
    return IMGURL
  }

  getSpacingVal() {
    let val = this.props.indicatorsSpacing,
      num = /^[\d\.]+/g.exec(val)[0],
      unit = val.replace(num, '');

    return '0 ' + parseFloat(num) / 2 + unit + ' 0 ' + parseFloat(num) / 2 + unit;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.currentTranslateX, nextState.currentTranslateX)
    if (this.state.currentTranslateX == nextState.currentTranslateX) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    this.setTransform(this.refs.swipe, 'translate3d(' + this.state.currentTranslateX + ',0,0)');
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

  resetTransiton(el) {
    el.classList.add('zzrc-swipe-reset-transiton')
  }

  imageSwipe(type) {

    // 正在移动 不能继续滑动
    if (this.isAmaniting) return

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

    this.setTransition(this.refs.swipe, 'transform ' + this.props.duration + 'ms ease-in-out')

    setTimeout(() => {
      this.isAmaniting = false
    }, this.props.duration)

    setTimeout(()=>{
      console.log(this.state.currentIndex)
      // last img
      if (this.state.currentIndex < 0) this.resetBoundaryImg('right');

      // first img
      if (this.state.currentIndex == imgsLength) this.resetBoundaryImg('left');
    })


  }

  /*
   * reset
   */
  resetBoundaryImg(direction) {

    let newIndex = 0,
      swipe = this.refs.swipe,
      childrenCount = this.props.imgs.length

    if (direction === 'right') {
      newIndex = childrenCount - 1;
    }
    this.setState({
      currentIndex: newIndex
    })

    setTimeout(() => {
      this.setState({
        currentTranslateX: (-this.clientWidth) * newIndex + 'px'
      })
      this.resetTransiton(swipe)

    }, this.props.duration)
  }

  clickImg(index) {
    if (this.props.imgs[index].href) {
      location.href = this.props.imgs[index].href;
    } else if (this.clickHandler) {
      this.clickHandler(index);
    }
  }

  componentDidMount() {
    // var hammer = new Hammer(document.querySelector(".zzrc-swipe"))
    // hammer.on("swipeleft", e => {
    //   if (this.disableCustom) return;
    //   this.imageSwipe('left')
    // })
    // hammer.on("swiperight", e => {
    //   if (this.disableCustom) return;
    //   this.imageSwipe('right')
    // })
  }

  render() {

    return (
      <Swipeable
        onSwipedRight={this.imageSwipe.bind(this, 'right')}
        onSwipedLeft={this.imageSwipe.bind(this, 'left')}
      >
        <div className="zzrc-swipe" style={{height: this.px2REM(parseInt(this.props.height))}}>
          <div className="zzrc-swipe-imgs" style={{width: this.imgsWidth, left: this.initLeft}} ref="swipe">
            <div
              className={'zzrc-swipe-item ' + (this.showWholeImg?'zzrc-show-whole':'')}
              style={{width: this.clientWidth + 'px', backgroundImage: 'url(' + this.imgsURL[this.imgsURL.length-1] + ')'}}
              onClick={this.clickImg.bind(this, this.imgsURL.length-1)}>
            </div>
            {
              this.imgsURL.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={this.clickImg.bind(this, index)}
                    className={'zzrc-swipe-item ' + (this.showWholeImg?'zzrc-show-whole':'')}
                    style={{width: this.clientWidth + 'px', backgroundImage: 'url(' + item + ')'}}>
                  </div>
                )
              })
            }
            <div
              onClick={this.clickImg.bind(this, 0)}
              className={'zzrc-swipe-item '+(this.showWholeImg?'zzrc-show-whole':'')}
              style={{width: this.clientWidth + 'px', backgroundImage: 'url(' + this.imgsURL[0] + ')'}}>
            </div>
          </div>

          <div className="zzrc-swipe-points" style={{
          bottom: this.props.indicatorsPosition,
          display: (this.props.showIndicators && this.isMultiple)?'block': 'none'}}>
            {
              this.props.imgs.map((item, index) => {
                return (
                  <span
                    className="zzrc-swipe-point"
                    key={index}
                    style={{
                    backgroundColor: (index == this.state.currentIndex
                      ? this.props.indicatorsActiveColor
                      : this.props.indicatorsColor),
                    width: this.props.indicatorsSize,
                    height: this.props.indicatorsSize,
                    margin: this.spacingVal
                  }}>
                </span>
                )
              })
            }
          </div>
        </div>
      </Swipeable>
    )
  }

  static propTypes = {
    imgs: React.PropTypes.array,
    auto: React.PropTypes.number,
    disableCustom: React.PropTypes.bool,
    duration: React.PropTypes.number,
    height: React.PropTypes.string,
    clickHandler: React.PropTypes.func,
    showWholeImg: React.PropTypes.bool,
    showIndicators: React.PropTypes.bool,
    indicatorsColor: React.PropTypes.string,
    indicatorsActiveColor: React.PropTypes.string,
    indicatorsPosition: React.PropTypes.string,
    indicatorsSize: React.PropTypes.string,
    indicatorsSpacing: React.PropTypes.string
  };

  static defaultProps = {
    /* 可直接传入url数组，也可以传入对象数组
     * @imgs[index].src 图片路径
     * @imgs[index].href 图片跳转链接
     */
    imgs: [],
    /*
     * 自动轮播间隔时间，<=duration不启用
     */
    auto: 0,
    /*
     * 是否禁用手动轮播
     */
    disableCustom: false,
    /*
     * 轮播滑动过程耗时
     * 单位：ms
     */
    duration: 600,
    /*
     * 轮播框高度
     * 单位：rem || px
     */
    height: '160px',
    /*
     * 点击某图片时执行
     * @argument [Number] index 所点击图片对应index
     */
    clickHandler: () => {},
    /*
     * 针对不规则图片（长宽比不等于container长宽比）
     * false默认居中显示，只显示图片中间部分；
     * true图片长宽设为100%，显示全貌，但图片变形，不建议使用
     */
    showWholeImg: false,
    /*
     * 是否显示底部小圆点
     */
    showIndicators: true,
    /*
     * 圆点默认颜色
     */
    indicatorsColor: '#dbd8d8',
    /*
     * 正在展示的图片对应圆点的颜色
     */
    indicatorsActiveColor: '#ffffff',
    /*
     * 圆点位置（离底部高度）
     */
    indicatorsPosition: '0.53rem',
    /*
     * 圆点尺寸
     */
    indicatorsSize: '0.53rem',
    /*
     * 圆点之间的距离
     */
    indicatorsSpacing: '0.53rem'
  }
}