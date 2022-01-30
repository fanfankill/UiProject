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
import "../../../theme/skeleton.less";
export default {
  name: 'CtSkeleton',
  data() {
    return {
      h:this.height,
      w:this.width,
    }
  },
  props: {
    type:{
      type:String,
      default: 'text',
       validator(val) {
        return [ 'text', 'rect', 'circle','Btn', 'Badge', 'Chip'].indexOf(val) > -1;
      }
    },
    color: {
      type: String,
      default: '#efefef'
    },
    width: {
      type: String,
      // default: '100px'
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
  
// .skeleton {
//   display: inline-block;
//   position: relative;
//   overflow: hidden;
//   vertical-align: middle;
//   .block {
//     width: 100%;
//     height: 100%;
//     border-radius: 2px;
//   }
// }
// .shan {
//   &::after {
//     content: "";
//     position: absolute;
//     animation: shan 1.5s ease 0s infinite;
//     top: 0;
//     width: 50%;
//     height: 100%;
//     background: linear-gradient(
//       to left,
//       rgba(255, 255, 255, 0) 0,
//       rgba(255, 255, 255, 0.3) 50%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     transform: skewX(-45deg);
//   }
// }
// @keyframes shan {
//   0% {
//     left: -100%;
//   }
//   100% {
//     left: 120%;
//   }
// }

</style>