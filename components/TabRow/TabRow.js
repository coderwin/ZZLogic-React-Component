import React, {Component} from 'react'
import {withRouter} from 'react-router'
import './TabRow.less'

export default withRouter(class TabRow extends Component{
  constructor(props){
    super(props)
    this.state = {
      containerWidth: '100%',
      activeId: this.props.activeId
    }
  }
  handleActive(item, e){
    // 执行点击回调
    item.activeCallback&&item.activeCallback.call(this, ...arguments)
    this.props.activeCallback&&this.props.activeCallback.call(this, ...arguments)

    this.setState({
      activeId: e.target.getAttribute('data-id')
    })

    let offsetLeft = e.target.offsetLeft + e.target.offsetWidth/2
    if(offsetLeft<=document.documentElement.clientWidth/2){
      this.refs.wrap.scrollLeft = 0
      return;
    }
    this.refs.wrap.scrollLeft = (offsetLeft-document.documentElement.clientWidth/2);
  }
  initContainerWidth(){
    let width = 0
    let items = this.refs.container.children
    let len = items.length
    for(let i = 0; i < len; i++){
      console.log(items[i].offsetWidth)
      width += items[i].offsetWidth
    }
    this.setState({
      containerWidth: width
    })
  }
  componentDidMount(){
    this.initContainerWidth()
  }
  render(){
    let height = (this.props.height-10)+'px'
    return(
      <div className="zzrc-tabrow" ref="wrap">
        <div
          className="zzrc-tabrow-container"
          style={{width: this.state.containerWidth+1}} ref="container">
          {
            this.props.tabs.map((item, index)=>{
              return(
                <span
                  key={index}
                  data-id={item.id}
                  className="zzrc-tabrow-item"
                  style={{
                    height, lineHeight: height,
                    color: this.state.activeId==index?this.props.activeColor:'#000',
                    backgroundColor: this.state.activeId==index?this.props.activeBgColor:'#fff'
                  }}
                  onClick={this.handleActive.bind(this, item)}>
                  {item.text}
                </span>
              )
            })
          }
        </div>
      </div>
    )
  }

  static propTypes = {
    tabs: React.PropTypes.array,
    height: React.PropTypes.number,
    activeId: React.PropTypes.number,
    activeColor: React.PropTypes.string,
    activeBgColor: React.PropTypes.string,
    activeBgImg: React.PropTypes.string,
    activeCallback: React.PropTypes.func,
  };

  static defaultProps = {
    tabs: [{
      text: '首页',
      icon: '',
      link: '/',
      activeCallback: null
    },{
      text: '发现',
      icon: '',
      link: '/IMGPreview',
      activeCallback: null
    },{
      text: '我的',
      icon: '',
      link: '/IMGSwipe',
      activeCallback: null
    }],
    height: 40,
    activeId: 0,
    activeColor: 'red',
    activeBgColor: '#ccc',
    activeBgImage: '',
    activeCallback: function(){
      console.log('我被点击了')
    },
  };
})
