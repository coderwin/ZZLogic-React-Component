import React, {Component} from 'react'
import './IMGScrollRow.less'
import IMGLoad from '../IMGLazyLoad/IMGLazyLoad'

export default class IMGScrollRow extends Component{
  constructor(props){
    super(props)
    this.state = {
      containerWidth: '100%',
    }
  }
  componentDidMount(){
    this.initContainerWidth()
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
      containerWidth: width + (len-1)*this.props.view.split
    })
  }
  handleIMGClick(item, e){
    item.tapCallback&&item.tapCallback()
    this.props.tapCallback&& this.props.tapCallback()
    if(item.href){
      location.href = item.href
    }
  }
  px2REM(px){
    return px*320/750/16 + "rem"
  }
  render(){
    return(
      <div className="zzrc-IMGScrollRow" ref="wrap">
        <div
          className="zzrc-IMGScrollRow-container clearfix"
          style={{width: this.state.containerWidth}} ref="container">
          {
            this.props.imgs.map((item, index)=>{
              return(
                <div
                  key={index}
                  className="zzrc-IMGScrollRow-item"
                  onClick={this.handleIMGClick.bind(this, item)}
                  style={{
                    width: this.px2REM(parseInt(this.props.view.width)),
                    height: this.px2REM(parseInt(this.props.view.height)),

                    marginRight: (index==this.props.imgs.length-1)
                      ? 0
                      : (this.props.view.split+'px'),
                  }}>
                  <IMGLoad src={item.url||item}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  static propTypes = {
    imgs: React.PropTypes.array,
    view: React.PropTypes.object,
    tapCallback: React.PropTypes.func,
  };

  static defaultProps = {
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
    }],
    view: {
      height: 200,
      width: 160,
      split: 2,
      splitColor: '#ccc'
    },
    tapCallback: function(){
      console.log('我被点击了')
    },
  };
}
