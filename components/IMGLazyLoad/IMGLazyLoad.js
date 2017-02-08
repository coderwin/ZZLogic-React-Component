import React, {Component} from 'react'
import LazyLoad from '../libs/LazyLoad'
export default class IMGLoad extends Component{
  componentDidMount(){
    new LazyLoad(this.refs.img)
  }
  render(){
    return(
      <img ref="img" data-src={this.props.src}/>
    )
  }
}