export default {
  // 元素背景色
  bgc: {
    inserted: function (el, binding) {
      el.style.background = binding.value
    }
  }
}
