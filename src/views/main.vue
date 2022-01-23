<template>
  <div class="mycontainer">

    <router-view></router-view>
  </div>
</template>

<script>
// import showdiv from '../components/showcompont'
export default {
    name:'showcompont',
    // components:{
    //   showdiv
    // }
}
</script>
<style scoped lang="less">
.mycontainer {
  border: 2px solid @vice-color1;
  background-color: @blue-bg-color1;
  padding-bottom: 80px;
}


</style>

