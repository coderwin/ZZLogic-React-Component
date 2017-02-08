import React, {Component} from 'react'
import './ListView.less'
// 未完成 TODO
export default class ListView extends Component{
  constructor(props){
    super(props)
    this.state = {
      showPullRefresh: false
    }
  }
  componentDidMount(){

  }
  handleStart(e){
    let pos = e.touches[0]
    this.startX = pos.clientX
    this.startY = pos.clientY
  }
  handleMove(e){
    this.scrollTop = this.refs.listview.scrollTop
    if(this.scrollTop<=0){
      this.setState({
        showPullRefresh: true
      })
    }
  }
  handleEnd(e){
    console.log(e)
    setTimeout(()=>{
      this.setState({
        showPullRefresh: false
      })
    }, 1000)
  }
  render(){
    return(
      <div
        ref="listview"
        className="zzrc-listview"
        style={{...this.props.view}}
        onTouchStart={this.handleStart.bind(this)}
        onTouchMove={this.handleMove.bind(this)}
        onTouchEnd={this.handleEnd.bind(this)}
        onTouchCancel={this.handleEnd.bind(this)}
        >
        <div className="zzrc-listview-wrap">
          <ul>
            <li>我是商品列表1</li>
            <li>我是商品列表2</li>
            <li>我是商品列表3</li>
            <li>我是商品列表4</li>
            <li>我是商品列表5</li>
            <li>我是商品列表6</li>
            <li>我是商品列表7</li>
            <li>我是商品列表8</li>
            <li>我是商品列表9</li>
            <li>我是商品列表10</li>
            <li>我是商品列表11</li>
            <li>我是商品列表12</li>
            <li>我是商品列表13</li>
            <li>我是商品列表14</li>
            <li>我是商品列表15</li>
            <li>我是商品列表16</li>
            <li>我是商品列表17</li>
            <li>我是商品列表18</li>
            <li>我是商品列表19</li>
            <li>我是商品列表20</li>
            <li>我是商品列表21</li>
            <li>我是商品列表22</li>
            <li>我是商品列表23</li>
            <li>我是商品列表24</li>
            <li>我是商品列表25</li>
            <li>我是商品列表26</li>
            <li>我是商品列表27</li>
            <li>我是商品列表28</li>
            <li>我是商品列表29</li>
            <li>我是商品列表30</li>
            <li>我是商品列表31</li>
            <li>我是商品列表32</li>
            <li>我是商品列表33</li>
            <li>我是商品列表34</li>
            <li>我是商品列表35</li>
            <li>我是商品列表36</li>
            <li>我是商品列表37</li>
            <li>我是商品列表38</li>
            <li>我是商品列表39</li>
          </ul>
        </div>
      </div>
    )
  }
  get pullShow(){
    return {
      display: this.state.showPullRefresh
        ? 'block'
        : 'none'
    }
  }

  static dataSource(){

  }
  static PropTypes={
    view: React.PropTypes.object,
    pullRefresh: React.PropTypes.object,
    slideLoader: React.PropTypes.object
  };
  static defaultProps={
    view: {
      height: '400px'
    },
    pullRefresh: {

    },
    slideLoader: {

    }
  };
}