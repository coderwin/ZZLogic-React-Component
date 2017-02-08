import React, {Component} from 'react'
import {withRouter} from 'react-router'
import './TabBar.less'

export default withRouter(class TabBar extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  handleActive(item, e){
    if(item.link){
      this.props.router.push(item.link)
    }

    item.activeCallback&&item.activeCallback.call(this, item)
    this.props.activeCallback&&this.props.activeCallback.call(this, item)

    if(e.target.getAttribute('class')!='zzrc-tabbar-item'){
      e.target = e.target.parentNode
    }

    let childNodes = e.target.parentNode.childNodes
    for(let i=0; i<childNodes.length;i++){
      childNodes[i].style.color = '#000'
      childNodes[i].style.backgroundColor = "#FFF"
    }

    e.target.style.color = this.props.activeColor
    e.target.style.backgroundColor = this.props.activeBgColor
  }
  componentDidMount(){
    let active = this.refs['item'+this.props.active]
    active.style.color = this.props.activeColor
    active.style.backgroundColor = this.props.activeBgColor
  }
  render(){
    return(
      <div className="zzrc-tabbar">
        {
          this.props.tabs.map((item, index)=>{
            return(
              <div
                key={index}
                ref={"item"+index}
                className="zzrc-tabbar-item"
                onClick={this.handleActive.bind(this, item)}
                style={{height: this.props.height, lineHeight: this.props.height}}>
                <span
                  style={{height: '30px', width: '30px', backgroundImage: 'url('+item.icon+')', display: item.icon?"block":'none', borderRadius: '50%', backgroundSize: 'cover'}}>
                </span>
                <span className="zzrc-tabbar-item-text">
                  {item.text}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }

  static propTypes = {
    tabType: React.PropTypes.string,
    tabs: React.PropTypes.array,
    active: React.PropTypes.number,
    activeColor: React.PropTypes.string,
    activeBgColor: React.PropTypes.string,
    activeBgImg: React.PropTypes.string,
    activeCallback: React.PropTypes.func,
  };
  static defaultProps = {
    tabType: 'bottom',
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
    height: '40px',
    active: 0,
    activeColor: 'red',
    activeBgColor: '#ccc',
    activeBgImage: '',
    activeCallback: function(){
      console.log('我被点击了')
    },
  };
})