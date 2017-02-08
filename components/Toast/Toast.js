import React, {Component} from 'react'
import {render} from 'react-dom'
import './Toast.less'

class Toast {
  constructor(){
    this.currentDOM = null
  }
  commonDOM(content, Type){
    return(
      <div className="zzrc-toast">
        <div className="zzrc-toast-text">
          {Type&&<Type />}
          <div>{content}</div>
        </div>
      </div>
    )
  }
  component(type, content, duration, onClose){
    let _this = this
    var hide = () => {
      _this.hide();
      ['hashchange', 'popstate'].map((event) => {
        window.removeEventListener(event, hide, false);
      })
    }
    ['hashchange', 'popstate'].map((event) => {
      window.addEventListener(event, hide, false);
    })

    this.timer = setTimeout(()=>{
      onClose()
      this.hide()
    }, duration)

    this.disable()
    switch (type){
      case 'info':
        return this.commonDOM(content)
      break

      case 'loading':
        return this.commonDOM(content, React.createClass({
          render(){
            return(<i className="zzrc-toast-text-loading"></i>)
          }
        }))
      break

      case 'success':
        return this.commonDOM(content, React.createClass({
          render(){
            return(<i className="zzrc-toast-text-success">
              <i className="success"></i>
            </i>)
          }
        }))
        break

      case 'fail':
        return this.commonDOM(content, React.createClass({
          render(){
            return(<i className="zzrc-toast-text-fail">
              <span>
                <i className="top"></i>
                <i className="bottom"></i>
              </span>
            </i>)
          }
        }))
        break
    }
  }
  success(content='加载成功', duration=1500, onClose=()=>{}){
    // if(this.currentDOM) return;
    let success = document.createElement('div')
    document.body.appendChild(success)
    render(this.component('success', content, duration, onClose),success)
    this.currentDOM = success
  }
  fail(content='加载失败', duration=1500, onClose=()=>{}){
    let fail = document.createElement('div')
    document.body.appendChild(fail)
    render(this.component('fail', content, duration, onClose),fail)
    this.currentDOM = fail
  }
  info(content='这是纯文本toast提示！！', duration=1500, onClose=()=>{}){
    let info = document.createElement('div')
    document.body.appendChild(info)
    render(this.component('info', content, duration, onClose),info)
    this.currentDOM = info
  }
  loading(content='加载中...', timeout=10000, onClose=()=>{}){
    let loading = document.createElement('div')
    document.body.appendChild(loading)
    render(this.component('loading', content, timeout, onClose),loading)
    this.currentDOM = loading
  }
  hide(){
    this.currentDOM&&document.body.removeChild(this.currentDOM)
    this.currentDOM = null
    clearTimeout(this.timer)
    this.timer = null
    // this.currentDOM.remove()
    this.enable()
  }

  disable(){
    document.body.style.overflow = 'hidden'
    document.body.addEventListener('touchmove', this.forbidden, false)
  }
  enable(){
    document.body.style.overflow = ''
    document.body.removeEventListener('touchmove', this.forbidden)
  }
  forbidden(e){
    e.preventDefault()
    e.stopPropagation()
  }
}

export default new Toast