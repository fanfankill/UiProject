<template>
  <div class="ct-rate">
    <span v-for="number in 5"
          :key="number"
          :class="['iconfont icon-star-fill star',number<=starNum ? 'active':'',readOnly?'readOnly':'']"
          :style="{'fontSize':size+'px'}"
          @click="setStartNum(number)"
    >
    </span>
    <span v-if="showText">{{ this.levels[this.starNum - 1] }}</span>
  </div>
</template>

<script>
import "../../../theme/rate.less";

export default {
  name: "CtRate",
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16
    },
    levels: {
      type: Array,
      default() {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      starNum: this.num,
    }
  },
  methods: {
    setStartNum(number) {
      this.starNum = number;
      this.$emit("getStarNum", this.starNum)
    }
  },
}
</script>

