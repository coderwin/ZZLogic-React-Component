import React, {Component} from 'react'
import Goods from './Goods'

export default class GoodsDemo extends Component {
  constructor(props) {
    super(props)
    this.info = {
      "userId": "43055704613652",
      "infoId": "806029615090417668",
      "userName": "两个小妞的妈咪",
      "infoTitle": "千趣会 连衣裙",
      "describe": "日本代购，没穿几次，搭配短款羽绒服啥的特别漂亮，两岁左右宝宝穿,两岁左右宝宝穿,两岁左右宝宝穿,两岁左右宝宝穿",
      "infoLabels": ['全新'],
      "price": 1212,
      "originPrice": 0,
      "time": "2分钟前",
      "address": "合肥 政务",
      "userPic": "http://zzpic4.58cdn.com.cn/zhuanzh/n_v1bl2lwkfacejvqqqxzuva.png",
      "imgs": ["n_v1bkujjd75mbdfqc6c6bha.jpg", "n_v1bl2lwkh7mbdfr4kvuyga.jpg", "n_v1bj3gzr76mbdfq7wtmrra.jpg"],
    }
  }

  render() {
    return (
      <div>
        <Goods info={this.info} type="card" itemClass="goods-item" />
        <Goods info={this.info} type="card" itemClass="goods-item" />
        <Goods info={this.info} type="card" itemClass="goods-item" />
        {this.props.children}
      </div>
    )
  }
}