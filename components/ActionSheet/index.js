import React, {Component} from 'react'
import ActionSheet from './ActionSheet'

export default class ActionSheetDemo extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedText: null,
      selectedVal: null
    }
  }
  handleActionSheet(){
    const BUTTONS = [{
      text: '操作一', val: '0'
    }, {
      text: '操作二', val: '0'
    }, {
      text: '操作三', val: '0'
    }, {
      text: '取消', val: 'cancel'
    }];
    ActionSheet.show({
        buttons: BUTTONS,
        message: '我是描述我是描述',
        closeable: true,
      }, (item, val) => {
        console.log(item, val)
        this.setState({
          selectedText: item.text,
          selectedVal: val
        })
      }
    )
  }
  render(){
    return(
      <div style={{textAlign: 'center', marginTop: "20px"}}>
        <div>动作面板ActionSheet</div>
        <div onClick={this.handleActionSheet.bind(this)}>
          调起
        </div>
        <span>{this.state.selectedText}</span>
        <span>{this.state.selectedVal}</span>
      </div>
    )
  }
}