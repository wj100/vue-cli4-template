/**
 * 截取字符串
 * @param value 源字符串
 * @param len   截取长度
 * @returns {string}
 */
function sliceStr (value, len) {
  if (value.length<=len){
    return value
  }
  return value.substr(0, len)+'...'
}

export {
  sliceStr
}
