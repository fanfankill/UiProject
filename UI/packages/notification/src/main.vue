<template>
 <transition name="fade" @after-enter="handleAfterEnter">
  <div class="notification"  :style="positionStyle" v-show="visible" >
    <div :class="'iconfont icon-'+type" v-if="type"></div>
    <div style="width:310px">
      <div class="notification__top">
        <h2>{{title}}</h2>
        <span class="notification__btn" @click="handleClose" v-if="showClose">{{btn}}</span>
      </div>
      <span class="notification__content">
         <p v-if="!dangerouslyUseHTMLString">{{ content }}</p>
         <p v-else v-html="content "></p>
      </span>  
    </div>
  
  </div>
 </transition>
</template>
<script>
export default {
 name: 'CtNotification',
 props: {
  title:{
    type:String,
  },
  content: {
   type: String,
   required: true
  },
  btn: {
   type: String,
   default: '×'
  },
  type:{
   type: String,
      validator(val) {
        return ['success', 'warning', 'info', 'error'].indexOf(val) > -1;
      }
  },
  showClose:{
    type:Boolean,
    default:true
  },
  dangerouslyUseHTMLString:{
    type:Boolean,
    default:false
  },
 }
}
</script>
<style lang="less" scoped>
  @import "./UI/theme/notification.less";
</style>



