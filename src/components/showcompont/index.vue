<template>
  <div> 
      <h3>{{title}}</h3>
      <p>{{derection}}</p>
    <div class="demoblock">
          <slot></slot>
    </div>
      <div v-html="detailcode"></div>
  </div>
</template>

<script>
export default {
    name:'showcompont',
    props:{
        title:String,
        derection:String,
        detailcode:String
    }
}
</script>

<style lang="less" scoped>
.demoblock{
    width: 80%;
}
</style>