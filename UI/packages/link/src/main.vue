<template>
  <a 
     :class="[
     'ct-link',
     type ? `ct-link--${type}` :'',
     {
       'is-disabled':disabled,
       'is-underline':underline
     }
     ]"
     :href="disabled ? null : href"
     v-bind="$attrs"
     @click="handleClick"
     >
     <i :class="icon" v-if="icon"></i>
     <span v-if="$slots.default">
        <slot></slot>    
     </span>   
     </a>
</template>
<script>

export default {
    name:'CtLink',
    props:{
        type:{
          type:String,
          default:'default'
        },
        underline:{
          type:Boolean,
          default:true
        },
        disabled:{
          type:Boolean,
          default:false
        },
        href:{
          type:String,
          default:''
        },
        icon:{
          type:String,
          default:String
        }     
    },
      methods:{
          handleClick(event){
            // 如果不禁用且链接可点击则执行发生点击事件
            if(!this.disabled){
              if(!this.href)
              {
                this.$emit('click',event)
              }
            }
          }
        }
    
  }
</script>
<style lang="less">
  @import "./UI/theme/link.less";
</style>