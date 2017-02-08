export default class LazyLoad{
  constructor(el, preView=200){
    this.setele = el
    this.flag = false
    this.preView = preView
    this.init()
  }
  init(){
    this.showimg()
    window.addEventListener('resize', () => {
      this.showimg()
    })
    window.addEventListener('scroll', () => {
      this.showimg()
    })
  }
  showimg() {
    if (this.flag) return
    let position = this.getTop(this.setele)
    let h = document.body.scrollTop + window.screen.height
    if (position - this.preView <= h && position + this.preView >= document.body.scrollTop) {
      this.flag = true
      this.setsrc()
    }
  }
  getTop(elements ){
    let top = elements.offsetTop
    let parent = elements.offsetParent
    while( parent != null ){
      top += parent.offsetTop
      parent = parent.offsetParent
    }
    return top
  }
  setsrc() {
    let src = this.setele.getAttribute('data-src')
    if (src) this.adjust(this.setele,src)
  }
  adjust(elem,src){
    let img = new Image()
    img.addEventListener("load",() => {
      let elemWidth = img.width
      let elemHeight = img.height
      let containerWidth = elem.parentNode.offsetWidth
      let containerHeight = elem.parentNode.offsetHeight
      let true_r = elemHeight / elemWidth
      let RATIO = containerHeight / containerWidth
      elem.src = src
      elem.removeAttribute('data-src')
      //以容器宽为准等比压缩
      if(true_r > RATIO){
        elem.style.width = '100%'
      }else{
        elem.style.height = '100%'
      }
    })
    img.src = src
  }
}