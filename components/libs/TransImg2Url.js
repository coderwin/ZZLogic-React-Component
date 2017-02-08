
/**
 *  处理图片尺寸的js
 */

let [isIPhone, dpr = 1] = [window.navigator.appVersion.match(/iphone/gi), window.devicePixelRatio]

let [wxReg, imgReg, prefixReg, prefixPic, suffix] = [/^http\:\/\/wx.qlogo.cn/, /^http\:\/\/img\.58cdn\.com\.cn/, /^http:\/\/pic[1-8]\.58cdn\.com\.cn\/zhuanzh\//, /^http:\/\/pic\.58\.com\//, /(\.(png|jpg|gif))/]

function randomPrefix() {
  let prefix = "http://picx.58cdn.com.cn/zhuanzh/";
  let random = Math.ceil(Math.random() * 8);
  return prefix.replace('x', random)
}

export default {

  /**
   *  处理单个url(或者不带前缀)图片
   *
   *  eg: http://pic2.58cdn.com.cn/zhuanzh/xxx.png
   *      n_dgspdjfkogsgdaflfkg.png
   */
  handleSingle( str, width = 200, height = 200 ){
    let size = `_${width}_${height}`;

    if(!str || str === '') {

      return ''
    }

    if(wxReg.test(str)) {
      let index = str.lastIndexOf('/');
      str = str.substr(0, index);
      return `${str }/96`;
    }

    if(imgReg.test(str)) {
      return str;
    }

    if(prefixPic.test(str)) {
      return str.replace(suffix, `${size}$1`)
    }

    return prefixReg.test(str) ? str.replace(suffix, `${size}$1`) : randomPrefix() + str.replace(suffix, `${size}$1`)

  },

  /**
   *  处理多个url组成（用|分割）的字符串
   *
   *  eg: http://pic2.58cdn.com.cn/zhuanzh/xxx.png|http://pic1.58cdn.com.cn/zhuanzh/xxx.png|http://pic4.58cdn.com.cn/zhuanzh/xxx.png
   *      n_dgspdjfkogsgdaflfkg.png|n_dgspdjfkogsgdaflfkg.png|n_dgspdjfkogsgdaflfkg.png|n_dgspdjfkogsgdaflfkg.png
   */
  handleBundle(str, width = 200, height = 200) {

    //if(source)

    let arr = str ? str.split('|') : [];
    if(!arr.length) {
      return []
    }

    let result = []

    arr.map(value => {
      result.push(this.handleSingle(value, width, height))
    })

    return result
  }
}
