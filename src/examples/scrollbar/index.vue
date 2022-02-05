<template>
  <div>
    <show-comp
    title="基本滚动"
    subtitle="滚动区域的实现"
    ctname="滚动区域"
    >
 <template v-slot:showarea>
    <basecom></basecom>
 </template>

  <template v-slot:desc>
    <div>
  
     <code> :height="180"</code>
        <p>1121212121212121212121212121212122是否是是否是否发是否是否发是否是否发是否是否发是否是否发是否是否发是否是否发是否是否发是否是否发否发</p>
  </div>
 </template>
   
    </show-comp>


        <show-comp
    title="自定义样式"
    subtitle="滚动区域的实现"
    ctname="滚动区域"
    >
 <template v-slot:showarea>
    <basecom2></basecom2>
 </template>

  <template v-slot:desc>
    <div>
  
     <code> :height="180"</code>
      
  </div>
 </template>
   
    </show-comp>
     
  </div>
</template>

<script>
import ShowComp from '../../components/showcomponent'
import  basecom from './children/base.vue'
import  basecom2 from './children/base2.vue'
export default {
    name:'scrollbar',
    chName:'滚动条',
    components:{
      ShowComp,
      basecom,
      basecom2
    }
}
</script>

<style>

</style>