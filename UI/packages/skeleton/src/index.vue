<template>
  <div>
    <div v-if="this.size">
      <div class="skeleton" :style="{width:size,height:size}" :class="['ct-skeleton--'+type,{shan:animated}]" >
      <!-- 动画 --->
         <div class="block" :style="{backgroundColor:color}"></div>
     </div>
    </div>
    <div v-else> 
       <div class="skeleton" :style="{width,height}" :class="['ct-skeleton--'+type,{shan:animated}]" >
      <!-- 动画 --->
     <div class="block" :style="{backgroundColor:color}"></div>
  </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'CtSkeleton',
  props: {
    type:{
      type:String,
      default: 'text',
       validator(val) {
        return [ 'text', 'rect', 'circle','btn', 'badge', 'chip'].indexOf(val) > -1;
      }
    },
    color: {
      type: String,
      default: '#efefef'
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    size:{
      type:String,
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
}
</script>
<style scoped lang="less">
  @import "./UI/theme/skeleton.less";
</style>