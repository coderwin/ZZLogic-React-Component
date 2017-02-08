import React, {Component} from 'react'
import Modal from './Modal'

export default class ModalDemo extends Component {
  alert(type) {
    Modal.alert(type + '个按钮情况',
      <div>{`这里有${type}个按钮, 你试试${type}个按钮的情况。`}</div>,
      [{
        text: '按钮一', onPress: () => console.log('第1个按钮被点击了')
      },(type > 1) && {
        text: '按钮二', onPress: () => console.log('第2个按钮被点击了')
      },(type > 2) && {
        text: '按钮三', onPress: () => console.log('第3个按钮被点击了')
      }]
    );
  }
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: "20px"}}>
        弹窗Modal
        <ul>
          <li onClick={this.alert.bind(this, 3)}>三个按钮</li>
          <li onClick={this.alert.bind(this, 2)}>两个按钮</li>
          <li onClick={this.alert.bind(this, 1)}>一个按钮</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}