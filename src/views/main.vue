<template>
  <div class="mycontainer">
<<<<<<< HEAD
    <!-- <showdiv
    title="容器"
    derection="小容器组件"
    detailcode="<code><h3>hh</h3></code>">
          <ct-container>
        <ct-aside></ct-aside>
      <ct-container>
          <ct-header></ct-header>
        <ct-main>
          <ct-panel></ct-panel>
        </ct-main>
        <ct-footer></ct-footer>
      </ct-container>
      </ct-container>
    </showdiv> -->
    <show-component title="基础用法" subtitle="按钮的基础用法" :attributes="['type, size']" ctname="Button"></show-component>
    <ct-avatar size="mini" shape="square"></ct-avatar>
=======
    <router-view></router-view>
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD
import ShowComponent from '../components/showcomponent'
import CtAvatar from '../../UI/packages/avatar'
export default {
  // data() {
  //   return {
  //     attr: ["type", "plain", "round", "circle"],
  //     codes: ``
  //   }
  // },
  components:{
    CtAvatar,
    ShowComponent
  }
=======

export default {
    name:'showcompont',
      mounted(){
       
      },
    components:{
    
    }
  
>>>>>>> master
}
</script>

<style scoped lang="less">
<<<<<<< HEAD
.container {
  border: 2px solid @vice-color1;
  background-color: @blue-bg-color1;
=======
.mycontainer {
  // border: 2px solid @vice-color1;
  // background-color: @blue-bg-color1;
  height: 3000px;
>>>>>>> master
}

.showdiv{
  height: 400px;
  width: 80%;
}
<<<<<<< HEAD
</style>
=======

</style>
>>>>>>> master
