<template>
  <label class="ct-radio" :class="{'is-checked': label == model}">
    <span class="ct-radio_input">
      <span class="ct-radio_inner"></span>
      <input
          type="radio"
          class="ct-radio_original"
          :value="label"
          v-model="model"
      >
    </span>
    <span class="ct-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>
<script>
export default {
  name: 'CtRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      defualt: ''
    },
    value: null,
    name: {
      type: String,
      defualt: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup () {
      return !!this.RadioGroup
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import "UI/theme/radio.less";
</style>