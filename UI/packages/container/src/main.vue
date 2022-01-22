<template>
  <section class="ct-container" :class="{'is-vertical':isvertical}">
     <slot></slot>
  </section>
</template>

<script>
export default {
    name:'CtContainer',
    props:{
      direction:String
    },

    mounted(){
      // console.log(this.$slots);
      // console.log(this.isvertical);
    },

    computed:{
      isvertical(){
          if(this.direction=='vertical'){
            return true
          }else if(this.direction=='horizontal'){
              return false
          }
          // console.log(this.$slots.default);
          return this.$slots&&this.$slots.default?this.$slots.default.some(vnode=>{
            const tag=vnode.componentOptions&&vnode.componentOptions.tag
              return  tag=='ct-header'||tag=='ct-footer'
          }):false
      }
    }
}
</script>

<style>
.ct-container{
  width: 100%;
  display: flex;
  flex-direction:row;
  height: 100%;

}
.is-vertical{
   flex-direction:column;
}
</style>