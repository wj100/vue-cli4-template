// 自动扫描当前目录下的.vue组件，批量导出供全局注册
const nameSpace = 'App'
let components = {}
const compsContext = require.context('./', true, /\.vue$/)
// 遍历每个vue文件
compsContext.keys().forEach(comp => {
  // 自动根据路径生成组件名称
  let name = comp.replace(/^.\//, '')
  let nameArr = name.replace(/\.vue$/, '').split('/')
  let compName = nameArr[0].slice(0, 1).toUpperCase() + nameArr[0].slice(1)
  // 如果是目录下的组件，index之外的组件不注册
  if(nameArr[1] && nameArr[1].toLowerCase() !== 'index'){
    return false
  }
  components[compName] = comp.replace('./', ``)
})
export default components
