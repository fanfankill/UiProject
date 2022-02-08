<template>
 <transition name="ct-zoom-in-top">
    <ul class="ct_dropdown_meun" v-show="showprop" ref="dropdown_menu_ul">
      <slot></slot>
    </ul>
  </transition>
</template>

<script>

export default {
    name:'CtDropdownMenu',
    inject:['dropdown'],

    computed:{
      showprop:function(){

        return this.dropdown.isshowlist
      }
    },
    mounted(){
      console.log(this.$refs.dropdown_menu_ul.offsetHeight);
    }
}
</script>

<style>
.ct_dropdown_meun{
  /**居中 */
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 5px;
  padding: 10px 0;
  background-color: white;
  box-shadow: 3px 3px 10px gainsboro;
  z-index: 2001;
  overflow: hidden;

}
.ct-zoom-in-top-enter-active, .ct-zoom-in-top-leave-active {
  transition: all .3s;
}
.ct-zoom-in-top-enter, .ct-zoom-in-top-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>