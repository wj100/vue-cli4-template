<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/img/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{time}}
    <span @click="getUser">get</span>
  </div>
</template>

<script>
  import { formatDate } from '../assets/js/tool'

  export default {
    name: 'Home',
    data () {
      return {
        time: ''
      }
    },
    methods: {
       getUser () {
        let res =  this.$api.user.getUserList().then(res=>{
          console.log(res)
        })

      }
    },
    mounted () {
      console.log(this.$api)
    }
  }
</script>
<style lang="less">

</style>
