import React, {Component} from 'react'
import TabRow from './TabRow'
import Toast from '../Toast/Toast'
export default class TabRowDemo extends Component {
  constructor(props) {
    super(props)
    this.tabs = [{
      text: '母婴服饰',
      id: '0',
    },{
      text: '童车',
      id: '1',
      callback: null
    },{
      text: '玩具图书',
      id: '2',
    },{
      text: '尿裤',
      id: '3',
    },{
      text: '母婴服饰',
      id: '4',
    },{
      text: '童车童',
      id: '5',
      callback: null
    },{
      text: '玩具图书玩具图书',
      id: '6',
    },{
      text: '尿裤湿巾玩具图书玩具图书',
      id: '7',
    }]
  }
  activeCallback(item, e){
    Toast.info("选中了值为"+item.id+"的item")
  }
  render() {
    return (
      <div>
        <TabRow tabs={this.tabs} activeCallback={this.activeCallback.bind(this)}/>
        {this.props.children}
        <div style={{textAlign: 'center', marginTop: "20px"}}>点击筛选TabRow</div>
      </div>
    )
  }
}