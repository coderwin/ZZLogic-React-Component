import React, {Component} from 'react'
import ListView from './ListView'

export default class ListViewDemo extends Component {
  render() {
    return (
      <div>
        <div>我是header</div>
        <div>我是nav</div>
        <ListView />
        <div>我是footer</div>
        <div>我是footer</div>
        <div>我是footer</div>
        <div>我是footer</div>
        <div>我是footer</div>
        <div>我是footer</div>
        <div>我是footer</div>
        {this.props.children}
      </div>
    )
  }
}