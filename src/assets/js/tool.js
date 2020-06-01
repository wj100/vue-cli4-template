/**全局工具函数*/
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func,wait,immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    }
    else {
      timeout = setTimeout(function(){
        func.apply(context, args)
      }, wait);
    }
  }
}
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait ,type) {
  if(type===1){
    let previous = 0;
  }else if(type===2){
    let timeout;
  }
  return function() {
    let context = this;
    let args = arguments;
    if(type===1){
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    }else if(type===2){
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

/**
 * @desc 深拷贝
 * @param source
 */
function cloneDeep(source) {
  let target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneDeep(source[key]); // 注意这里
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
/*一键复制函数*/
function copyUrl(data) {
  let url = data;
  let oInput = document.createElement('input');
  oInput.value = url;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象;
  console.log(oInput.value)
  document.execCommand("Copy"); // 执行浏览器复制命令
  alert('复制成功')
  oInput.remove()
}

/**
 * @desc 获取url地址栏参数
 * @param url
 */
function getParamsForURL(url) {
  const index = url.indexOf('?') + 1
  const params = url.slice(index).split('&')
  const obj={}
  for(let i =0;i<params.length;i++){
    obj[params[i].split("=")[0]]=params[i].split("=")[0]
  }
  return obj;
}
/**
 * @desc 时间对象格式化
 * @params date 时间对象
 * return  str
 */
function formatDate(date,xx='-') {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h=h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  let second=date.getSeconds();
  second=second < 10 ? ('0' + second) : second;
  return y + xx + m + xx + d+' '+h+':'+minute+':'+second;
}
export {
  debounce,
  throttle,
  cloneDeep,
  copyUrl,
  getParamsForURL,
  formatDate
}
