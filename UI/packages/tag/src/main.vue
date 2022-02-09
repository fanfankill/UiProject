<template>
  <transition name="ct-fade">
    <span
  class='ct-tag'
  :class="[
      this.type?`ct-tag--${type}`:'',
      `ct-tag--${effect}`
  ]">
      <slot></slot>
      <i 
      @click="handleclose"
      v-show="closable"
      class='iconfont icon-close'> 

      </i>
  </span>
 </transition>
</template>

<script>
export default {
    name:'CtTag',
     props: {
    closable: {
      type: Boolean,
      default: false,
    },

    type: String,
    size: String,

    effect:{
      type:String,
      default:'light'
    }
  },
  methods:{
    handleclose(event){
      console.log(event);
        event.stopPropagation();
        this.$emit('close', event);
    }
  }
}
</script>

<style>
.ct-tag{
  background-color: #CFECFC;
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    color: #0C91DA;
    border: 1px solid #d9ecff;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
}
.ct-tag--success{
   background-color: #CCE8CA;
     color: #00CE3F;
}
.ct-tag--warning{
   background-color: #ffd483;
     color: #e79f18;
}
.ct-tag--info{
   background-color: #BBC9D0;
     color: #fff;
}
.ct-tag--danger{
   background-color: #F9C5D7;
     color: #ED437D;
}

.icon-close{
  border-radius: 50%;
    text-align: center;
    position: relative;
    cursor: pointer;
    font-size: 12px !important;
    height: 16px;
    width: 16px;
    line-height: 16px;
    vertical-align: middle;
    top: -1px;
    right: -5px;
}
.icon-close:hover{
  color: #fff;
    background-color: #0C91DA;
}
</style>