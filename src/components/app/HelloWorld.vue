<template>
  <div class="hello">
    <h1>hello world组件</h1>
    <h1 class="f20 color">{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>
<style scoped lang="less">
  h1 {
    color: @red;
  }
</style>
