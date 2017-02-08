import React, {Component} from 'react'
import Toast from './Toast'

export default class ToastDemo extends Component {
  toastInfo(){
    Toast.info('我是toast提示！！！')
  }
  toastLoading(){
    Toast.loading('加载中...')
    setTimeout(()=>{
      Toast.hide()
    }, 3000)
  }
  toastSuccess(){
    Toast.success('加载成功')
    // setTimeout(()=>{
    //   Toast.hide()
    // }, 500)
  }
  toastFail(){
    Toast.fail('加载失败')
  }
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: "20px"}}>
        轻提示Toast
        <ul>
          <li onClick={this.toastInfo.bind(this)}>纯文本提示</li>
          <li onClick={this.toastLoading.bind(this)}>加载中提示</li>
          <li onClick={this.toastSuccess.bind(this)}>加载成功提示</li>
          <li onClick={this.toastFail.bind(this)}>加载失败提示</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}