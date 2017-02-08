import React, {Component} from 'react'
import IMGScrollRow from '../IMGScrollRow/IMGScrollRow'
import TransImg2Url from '../libs/TransImg2Url'
import './Goods.less'
export default class Goods extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClick(info, e) {
    if(this.props.infoClick){
      this.props.infoClick(info, e)
    }
    // const ua = window.navigator.userAgent
    // const iszz = ua.toLowerCase().indexOf('zhuanzhuan') > 0
    // const DETAIL_URL = 'http://m.zhuanzhuan.58.com/Mzhuanzhuan/zzapp/detail/index.html'
    // if(iszz){
    //   ZZAPP.enterDetail({
    //     infoId: info.infoId
    //   })
    // }else{
    //   location.href = DETAIL_URL+ '?infoId='+ info.infoId
    // }
  }
  render() {
    let itemClass = this.props.itemClass
    let info = this.props.info

    return (
      <div
        className={itemClass+" zzrc-goods"}
        onClick={this.handleClick.bind(this, info)}>
        <div className={itemClass+'-nav zzrc-goods-nav'}>
          <span
            className="zzrc-goods-nav-avatar"
            style={{backgroundImage: 'url('+info.userPic+')'}}>
          </span>
          <span className="zzrc-goods-nav-username">{info.userName}</span>
          <span className="zzrc-goods-nav-time">{info.time}</span>
        </div>
        <IMGScrollRow src={TransImg2Url.handleBundle(info.imgs.join("|"))} />

        <div className={itemClass+'-price zzrc-goods-price'}>
          <span>{'￥' + info.price}</span>
          {
            info.originPrice && info.originPrice > 0
              ? <span>{'￥' + info.originPrice}</span>
              : ''
          }
        </div>

        <div className={itemClass+'-describe zzrc-goods-describe'}>
          {info.describe}
        </div>

        <div className={itemClass+'-label zzrc-goods-label'}>
          {
            info.infoLabels.map((item, index) => {
              return (
                <span key={index}>{item}</span>
              )
            })
          }
        </div>

        <div className={itemClass+'-footer zzrc-goods-footer'}>
          <span className="zzrc-goods-address"></span>
          <span>{info.address}</span>
        </div>
      </div>
    )
  }

  static PropTypes = {
    info: React.PropTypes.object,
    type: React.PropTypes.string,
    itemClass: React.PropTypes.string,
    infoClick: React.PropTypes.func,
  };
  static defaultProps = {
    type: 'card',
    itemClass: 'goods-item',
    info: {
      "userId": "43055704613652",
      "infoId": "806029615090417668",
      "userName": "两个小妞的妈咪",
      "infoTitle": "千趣会 连衣裙",
      "describe": "日本代购，没穿几次，搭配短款羽绒服啥的特别漂亮，两岁左右宝宝穿。搭配短款羽绒服啥的特别漂亮",
      "infoLabels": ['全新'],
      "price": 1212,
      "originPrice": 0,
      "time": "2分钟前",
      "address": "合肥 政务",
      "userPic": "http://zzpic4.58cdn.com.cn/zhuanzh/n_v1bl2lwkfacejvqqqxzuva.png",
      "imgs": ["n_v1bkujjd75mbdfqc6c6bha.jpg", "n_v1bl2lwkh7mbdfr4kvuyga.jpg", "n_v1bj3gzr76mbdfq7wtmrra.jpg"]
    },
    infoClick: ()=>{}
  };
}