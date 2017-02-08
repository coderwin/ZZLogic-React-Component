import React, {Component} from 'react'
import './SlideLoader.less'

export default class SlideLoader extends Component{
  constructor(props){
    super(props)
    this.state = {
      loadShow: false,
      isLoading: false,
      loadTip: this.props.loadTip
    }
    // this property和UI没有关联的私有状态管理
    // this._noMore 是否没有更多了
    // this._canLoadMore 是否能够加载更多
    // this._pageNum 加载页码
    // this._start
    // this._startY
    // this._curScrollTop 当前scrollTop
    this._curScrollTop = 0;
  }
  get loadShow(){
    return {
      display: this.state.loadShow?"block":"none"
    }
  }
  get loadingShow(){
    return {
      display: this.state.isLoading?"inline-block":"none"
    }
  }
  render(){
    return(
      <div className="zzrc-ls">
        <div id="slideId">
          {this.props.children}
        </div>
        <div className="zzrc-ls-w" style={{...this.loadShow}}>
          <span className="zzrc-ls-w-icon" style={{...this.loadingShow}}>
          </span>
          <span className="zzrc-ls-w-text">{this.state.loadTip}</span>
        </div>
      </div>
    )
  }
  shouldComponentUpdate(prev, next){
    if(prev.loadShow==next.loadShow
      &&prev.isLoading==next.isLoading
      &&prev.loadTip==next.loadTip){
      return false
    }
    return true
  }
  componentDidMount(){
    this.initEvents()
    //初始化 加载第一页数据
    this._pageNum = 1
    this.props.loadHandler(this._pageNum)
  }
  // 绑定事件
  initEvents(){
    let slide = document.getElementById('slideId')
    slide.addEventListener('touchstart', this.startHandler.bind(this), false)
    slide.addEventListener('touchmove', this.moveHandler.bind(this), false)
    // 能取消加载时才需要endHandler
    if(this.props.canCancel){
      slide.addEventListener('touchend', this.endHandler.bind(this), false)
    }
  }
  startHandler(e){
    this._startY = e.changedTouches[0].clientY
    this._start = true
  }
  // move时计算是否到底部
  moveHandler(e){
    if(!this._start) return
    if(this._noMore) return
    // 判断方向
    if(e.changedTouches[0].clientY-this._startY>0) return;
    // 滑动到底部了 或者内容内有占满一屏
    if ((this.isScrollBottom() || this.notFullPage())
      && !this.state.isLoading) {
      this.showLoading(this.props.loadTip, true)
      this._canLoadMore = true
      if(!this.props.canCancel){
        if(this._noMore) return
        this.loadMore()
      }
    }
  }
  // touchend时触发加载
  endHandler(e){
    if(e.changedTouches[0].clientY-this._startY>0 || !this.isScrollBottom()) {
      this.closeLoading()
      return
    }
    if(this._noMore) return
    if(this._canLoadMore){
      this.loadMore()
    }
  }

  // 执行加载方法
  loadMore(){
    new Promise((resolve, reject)=>{
      // 异步处理
      this.props.loadHandler(++this._pageNum, resolve, reject);
    }).then((success)=>{
      this._canLoadMore = false
      this.closeLoading()
      // 加载成功后的提示，如‘到底了’
      if(success&&success.noMore){
        this._noMore = true
        this.showLoading(success.tip||this.props.noMoreTip)
      }
    }, (fail)=>{
      this._canLoadMore = false
      this.closeLoading()
      // 下次重新加载这一页
      // 加载失败提示，如‘加载错误,请重试’
      if(fail) {
        this.showLoading(fail.tip||this.props.failTip)
      }
    });
  }

  // 隐藏和显示加载提示方法
  showLoading (tip, isLoading=false){
    if(tip){
      this.setState({
        loadShow: true,
        isLoading: isLoading,
        loadTip: tip
      })
      return
    }
    this.setState({
      loadShow: true,
      isLoading: true
    })
  }
  closeLoading (){
    this.setState({
      loadShow: false,
      isLoading: false
    })
  }

  // 判断是否滑动到底部相关方法
  notFullPage (){
    return document.documentElement.clientHeight >= this.getDocHeight();
  }
  isScrollBottom() {
    return this.getScrollTop() + this.getClientHeight() + 20 >= this.getDocHeight()
  }
  getScrollTop(){
    return Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  }
  getDocHeight(){
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }
  getClientHeight(){
    return document.documentElement.clientHeight
  }

  static propTypes={
    loadTip: React.PropTypes.string,
    noMoreTip: React.PropTypes.string,
    failTip: React.PropTypes.string,
    loadHandler: React.PropTypes.func,
    canCancel: React.PropTypes.bool
  };
  static defaultProps={
    loadTip: '加载中...',
    noMoreTip: '没有更多啦',
    failTip: "加载出错，请重试",
    canCancel: false,
    loadHandler: ()=>{}
  };

}