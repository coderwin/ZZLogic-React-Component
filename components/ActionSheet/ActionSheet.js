import React, {Component} from 'react'
import {render} from 'react-dom'
import './ActionSheet.less'

class ActionSheet{
  render(buttons, message, closeable){
    let _this = this
    let cancel = buttons.pop();

    // 事件绑定
    ['hashchange', 'popstate'].map((event) => {
      window.addEventListener(event, hide, false);
    })
    function hide() {
      ['hashchange', 'popstate'].map((event) => {
        window.removeEventListener(event, hide, false);
      })
      _this.hide()
    }
    
    // 点击处理函数
    function itemClick(item, index){
      this.selectedCallback(item, index)
      hide.call(this)
    }
    function cancelClick(cancel){
      this.selectedCallback(cancel, cancel.val)
      hide.call(this)
    }
    function maskClick(closeable){
      if(closeable){
        hide.call(this)
      }
    }

    return(
      <div className="zzrc-as">
        <div onClick={maskClick.bind(this, closeable)} className="zzrc-as-mask"></div>
        <div className="zzrc-as-wrap zzrc-slideup-appear">
          <div className="zzrc-as-content">
            <div className="zzrc-as-title">{message}</div>
            <ul className="zzrc-as-lists">
              {
                buttons.map((item, index)=>{
                  return(
                    <li
                      key={index}
                      className="zzrc-as-list"
                      onClick={itemClick.bind(this, item, index)}>
                      {
                        typeof item=='string'?item: item.text
                      }
                    </li>
                  )
                })
              }
            </ul>
            <div className="zzrc-as-split"></div>
            <div className="zzrc-as-cancel" onClick={cancelClick.bind(this, cancel)}>
              {
                typeof cancel=='string'?cancel: cancel.text
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
  show(opts, callback){
    // this.bindHashChange()
    let buttons =opts.buttons,
      message = opts.message,
      closeable = true
    this.selectedCallback = callback

    let actionSheet = document.createElement('div')
    document.body.appendChild(actionSheet)
    render(this.render(buttons, message, closeable), actionSheet)

    this.currentDOM = actionSheet
    this.disable()
  }
  hide(){
    document.body.removeChild(this.currentDOM)
    this.currentDOM = null
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

export default new ActionSheet







