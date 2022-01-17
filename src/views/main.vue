<template>
  <div class="mycontainer">
    <showdiv
    title="容器"
    derection="小容器组件"
    detailcode="<code><h3>hh</h3></code>">
          <ct-container>
        <ct-aside></ct-aside>
      <ct-container>
          <ct-header></ct-header>
        <ct-main></ct-main>
        <ct-footer></ct-footer>
      </ct-container>
      </ct-container>
  </showdiv>

  </div>
</template>

<script>
import showdiv from '../components/showcompont'
export default {
    name:'showcompont',
      mounted(){
       
      },
    components:{
      showdiv
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
