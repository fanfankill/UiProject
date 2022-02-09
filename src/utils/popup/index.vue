<template>
  <transition name="fade">
    <div class="v-modal" @click="handlehide" v-if="visible"></div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },

  methods: {
    handlehide() {
      this.visible = false;
    },
  },
};
</script>

<style>
.v-modal {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 2001;
}
/**动画效果*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
