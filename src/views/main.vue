<template>
  <div class="mycontainer">

   
    <!-- <show-component 
    title="基础用法" 
    subtitle="按钮的基础用法" 
    :attributes="['type, size']" 
    ctname="Button"
    codes="
<h>12</h>s
   <span>12</span>
   <h>12</h>s
   <span>12</span><h>12</h>s
   <span>12</span>
   <h>12</h>s
   <span>12</span><h>12</h>s
   <span>12</span>
   <h>12</h>s
   <span>12</span><h>12</h>s
   <span>12</span>
    <h>12</h>s
   <span>12</span>">
       <template v-slot:showarea>
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
       </template>
    </show-component> -->
    
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped lang="less">

.container {
  border: 2px solid @vice-color1;
  background-color: @blue-bg-color1;
  }

.mycontainer {
  // border: 2px solid @vice-color1;
  // background-color: @blue-bg-color1;
  padding-bottom: 80px;
}

.showdiv {
  height: 400px;
  width: 80%;
}

</style>

