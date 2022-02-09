<template>
  <transition name="fade">
    <div v-show="visible" class="ct-drawer" @click="handleclose">
      <div
        :class="['ct-drawer--content', 'ct-direction-' + direction]"
        :style="isHorizontal ? `width :${drawsize}` : `height: ${drawsize}`"
      >
        <div>
          {{ title }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import Vue from "vue";
// import popup from "../../../../src/utils/popup";
// const Mask = Vue.extend(popup);

export default {
  name: "CtDrawer",
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    drawsize: {
      type: [Number, String],
      default: "30%",
    },
    title: String,
    direction: {
      type: String,
      default: "left",
      validator(val) {
        return ["top", "left", "bottom", "right"].indexOf(val) !== -1;
      },
    },
  },
  data() {
      return {
          mask:[]
      }
  },
  mounted() {},
  beforeDestroy() {
    console.log(this);
  },

  computed: {
    isHorizontal() {
      return this.direction == "left" || this.direction == "right";
    },
  },

    watch: {
    visible() {
      if (this.visible) {
        this.insert();
      } else {
        this.remove();
      }
    },
  },

  methods: {
    handleclose() {
      this.$emit("update:visible", false);
      this.insert();
    },
    // insert() {
    //   //插入遮罩
    //   const dom= new Mask({
    //     el: document.createElement("div"),
    //     data: {
    //       visible: this.visible,
    //     },
    //   }).$el;
    //   this.mask.push(dom)
    //   document.body.appendChild(dom);
    // },
    // remove(){
    //     console.log('/');
    //     document.body.removeChild(this.mask.shift())
    // }
  },
};
</script>

<style lang="less">
@import "./UI/theme/drawer.less";
</style>