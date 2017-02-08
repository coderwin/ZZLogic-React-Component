import React, {Component} from 'react'
import './RefreshControl.less'
import Toast from '../Toast/Toast'
export default class RefreshControl extends Component {
  constructor(props){
    super(props)
    this.state = {
      pullText: '下拉刷新',
      canRefresh: false,
    }
  }
  render() {
    return (
      <div className="zzrc-rc">
        <div ref="rc">
          <div className="zzrc-rc-w" ref="rcw">
            <div className="zzrc-rc-w-loading">
              <i className="zzrc-rc-w-loading-icon"></i>
            </div>
            <div className="zzrc-rc-w-text">
              {this.state.pullText}
            </div>
          </div>
          <div id="pullId">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
  shouldComponentUpdate(prev, next){
    if(prev.pullText==next.pullText&&prev.canRefresh==next.canRefresh){
      return false
    }
    return true
  }
  componentDidMount(){
    let Root = document.getElementById('pullId');
    let RootPull = () =>{
      let reset = (pullText='下拉刷新')=>{
        // this.refs.rc.style.marginTop = "-"+this.getRealPX(120)+"px"
        this.refs.rc.style.WebkitTransform = "translateY(0)"
        // this.refs.rc.style.WebkitTransition = ".5s"
        setTimeout(()=>{
          this.setState({
            pullText: pullText,
          })
        }, 500)
      }
      let start, moving, startX, startY, relativeX, relativeY, moveX, moveY, pulling=false
      Root.addEventListener('touchstart', (e)=>{
        start = true
        startX = e.changedTouches[0].clientX
        startY = e.changedTouches[0].clientY
      }, false);
      Root.addEventListener('touchmove', (e)=>{
        if(!start||pulling==true) return;
        moveX = e.changedTouches[0].clientX
        moveY = e.changedTouches[0].clientY
        relativeY = moveY-startY
        relativeX = moveX-startX
        if(relativeY<0) return
        // 阻止默认事件
        let scrollTop = document.body.scrollTop
        if(scrollTop<=0) e.preventDefault();

        moving = true
        // this.refs.rc.style.marginTop = relativeY/6 - this.getRealPX(120)+"px"
        this.refs.rc.style.WebkitTransform = "translateY("+ (relativeY/4) +"px)"
        let canRefresh = relativeY/2 - this.getRealPX(120)>0

        this.setState({
          pullText: canRefresh ? "释放刷新": "下拉刷新",
          canRefresh: canRefresh
        })
      }, false);
      Root.addEventListener('touchend', (e)=>{
        if(!start||!moving) return
        moving = false
        start = false

        if(this.state.canRefresh){
          this.setState({
            pullText: "加载中..."
          })
          // this.refs.rc.style.marginTop = 0
          this.refs.rc.style.WebkitTransform = "translateY("+this.getRealPX(120)+"px)"

          new Promise((resolve, reject)=>{
            pulling = true
            this.props.loadHandler(resolve, reject);
            // timeout
            setTimeout(()=>{
              reset()
            }, 10000)
          }).then((success)=>{
            pulling = false
            Toast.success()
            reset()
          }, (fail)=>{
            pulling = false
            Toast.fail()
            reset()
          })
          // this.props.loadHandler();
          // window.EventEmitter.emit('PULL_REFRESH')
          // location.reload()
        }else{
          reset()
        }
      }, false);
    }
    RootPull();
  }
  getRealPX(px){
    let width =  document.documentElement.clientWidth;
    let rem2px = width / 320 * 16;
    return px * 320/750/16*1 * rem2px;
  }
}