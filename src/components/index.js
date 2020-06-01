// 公共自定义组件统一注册入口
import app from './app'
// import its from './its'
export default {
  install: function(Vue){
    // 批量注册app目录组件
    for(let item in app){
      let compPath = app[item]
      Vue.component(item, () => import(`./app/${compPath}`))
    }
    // 批量注册its目录组件
    // for(let item in its){
    //   let compPath = its[item]
    //   Vue.component(item, () => import(`./its/${compPath}`))
    // }
    // 单独注册
    // Vue.component('xxx-xxx', () => import('./xxx.vue'))
  }
}
