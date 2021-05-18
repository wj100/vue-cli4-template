import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import direct from './directive'
import api from './request/api'
import * as filters from './filters'
import * as dd from 'dingtalk-jsapi'
import customComponents from './components'

Vue.prototype.dd=dd
Vue.prototype.$api = api
// 全局注册公共组件
Vue.use(customComponents)
Vue.config.productionTip = false
// http请求库 不允许写请求，必须在request统一管理
// import  VueAxios  from './request'
// Vue.use(VueAxios)
// 自定义指令
Object.keys(direct).forEach(key => {
  Vue.directive(key, direct[key])
})
// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
