import React, {Component} from 'react'
import {render} from 'react-dom'
import './Modal.less'

class Modal {
  constructor() {
    this.currentDOM = null
  }

  component(type, title, message, actions) {
    let _this = this
    this.disable()
    var hide = () => {
      _this.hide();
      ['hashchange', 'popstate'].map((event) => {
        window.removeEventListener(event, hide, false);
      })
    }
    ['hashchange', 'popstate'].map((event) => {
      window.addEventListener(event, hide, false);
    })

    function handleClick(item, e){
      item.onPress(e)
      hide.call(this)
    }
    return (
      <div className="zzrc-modal">
        <div className="zzrc-modal-mask"></div>
        <div className="zzrc-modal-wrap">
          <div className="zzrc-modal-content zzrc-zoom-appear">
            <div className="zzrc-modal-header">
              <div className="zzrc-modal-title">{title}</div>
            </div>
            <div className="zzrc-modal-body">
              <div>{message}</div>
            </div>
            <div className={actions.length>2
              ?'zzrc-modal-button-group-v'
              :'zzrc-modal-button-group-h'}>
              {
                actions.map((item, index)=>{
                  if(!item
                    ||typeof item !== 'object'
                    || !item.text) return
                  return(
                    <span
                      key={index}
                      className="zzrc-modal-button"
                      onClick={handleClick.bind(this, item)}>
                      {item.text}
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  alert(title = '标题', message = '提示信息', actions = [{
    text: '按钮1',
    onPress: () => {}
  }, {
    text: '按钮2',
    onPress: () => {}
  }, {
    text: '按钮3',
    onPress: () => {}
  }]) {
    let modal = document.createElement('div')
    document.body.appendChild(modal)
    this.currentDOM = modal
    render(this.component('alert', title, message, actions.filter((item)=>{
      return item&&item.text
    })), modal)
  }
  prompt(title = '标题', message = '提示信息', callbackOrActions =()=> {}, type = 'default'){

  }
  hide(){
    this.currentDOM&&document.body.removeChild(this.currentDOM)
    this.currentDOM = null
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
export default new Modal