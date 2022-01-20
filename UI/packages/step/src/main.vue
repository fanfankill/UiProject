<template>
  <div
    class="ct-step"
    :style="{
      flexBasis: $parent.space === 'auto' ? '50%' : $parent.space + 'px',
      flexDirection: $parent.direction,
    }"
  >
    <div class="ct-step__head">
      <!-- <slot></slot> -->
      <div class="ct-step__img" :class="'ct-step__' + status">
        <div v-if="icon" :class="icon"></div>
        <div v-else>
          {{ index + 1 }}
        </div>
      </div>
      <div class="ct-step__line" :class="'ct-step__' + lineStatus"></div>
    </div>
    <div class="ct-step__main" :class="'ct-step__' + status">
      <div>
        {{ title }}
      </div>
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtStep",
  props: {
    title: {
      default: "",
      type: String,
    },
    description: {
      default: "",
      type: String,
    },
    icon: {
      default: "",
      type: String,
    },
  },

  data() {
    return {
      index: -1,
      status: "",
      lineStatus: "",
    };
  },

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  mounted() {},

  watch: {
    "$parent.active": {
      handler(val) {
        this.setStatus(val);
      },
    },
    index() {
      this.setStatus(0);
    },
  },

  methods: {
    setStatus(val) {
      if (this.index < val - 1) {
        this.lineStatus = this.$parent.finishStatus;
        this.title = "已完成";
      } else {
        this.lineStatus = "";
      }
      if (this.index < val) {
        this.status = this.$parent.finishStatus;
        this.title = "已完成";
      } else if (this.index === val) {
        this.status = this.$parent.processStatus;
        this.title = "进行中";
      } else {
        this.status = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../theme/step.less";
</style>
