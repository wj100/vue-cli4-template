<template>
  <div class="about">
    <h1 v-bgc="'#66ff00'">{{msg|sliceStr(6)}}</h1>
  </div>
</template>
<script>
  export default {
    name: 'About',
    data(){
      return {
        msg:'This is an about page'
      }
    }
  }
</script>
