import axios from 'axios'

let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = window.global.BASEURL
}
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 8 * 1000
})
//请求拦截
instance.interceptors.request.use(
  config => {
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    return config
  },
  error => Promise.error(error))
// 响应拦截器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      Promise.resolve(res.data)
    } else {
      alert('服务器错误！呢00')
      Promise.reject(res)
    }
  },
  error => {
    alert('服务器错误！')
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  })
export { instance }
