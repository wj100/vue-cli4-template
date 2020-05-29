module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有   "root": true，它就会停止在父级目录中寻找。
  root: true,
  // 对Babel解析器的包装使其与 ESLint 兼容。
  parser: 'babel-eslint',
  parserOptions: {
    // 代码是 ECMAScript 模块
    sourceType: 'module'
  },
  env: {
    // 预定义的全局变量，这里是浏览器环境
    browser: true,
  },
  // 扩展一个流行的风格指南，即 eslint-config-standard
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    // 此插件用来识别.html 和 .vue文件中的js代码
    'html',
    // standard风格的依赖包
    "standard",
    // standard风格的依赖包
    "promise"
  ],
  //配置的一些规则
  'rules': {
    /*        "indent": ["error",2]
       数组第一个指定是否启用这个规则
           "off" 或 0 - 关闭规则
           "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
           "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

       数组第二个指定空几个空格
   */
    "indent": ["error",2],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 函数之前的空格
    'space-before-function-paren':0,
    // 代码块之前的空格
    'space-before-blocks':0,
    // 最后一行以空行结束
    'eol-last':0,
    // 等号左右空格
    'space-infix-ops':0,
    // 一行结束的空格
    'no-trailing-spaces':0
  }
}

