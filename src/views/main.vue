<template>
  <div class="mycontainer">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name:'showcompont',
      mounted(){
       
      },
    components:{
    
    }
  
}

</script>

<style scoped lang="less">
.mycontainer {
  // border: 2px solid @vice-color1;
  // background-color: @blue-bg-color1;
  height: 3000px;
}

.showdiv{
  height: 400px;
  width: 80%;
}

</style>
