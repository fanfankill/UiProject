<template>
  <ct-col :span="computedSpan" class="descriptions-item" :class="{'is-borderless':isBorderless()}" >
    <div class="descriptions-item-content" :class="[getSize(), direction,{'is-borderless':isBorderless()}]">
      <label class="descriptions-item-label" :style="{width: computedLabelWidth}" :class="[getSize(),direction, {'is-borderless':isBorderless()}]" v-html="label"></label>
      <div class="descriptions-item-value" v-if="$slots" :class="[getSize(),direction, {'is-borderless':isBorderless()}]">
        <slot/>
      </div>
    </div>
  </ct-col>
</template>

<script>
export default {
  name: 'CtDescriptionsItem',
  inject: ['labelWidth', 'column', 'size', 'direction', 'borderless','direction','getSize','isBorderless'],
  props: {
    span: {
      type: [Number, String],
      required: false,
      default: 0
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      // 子组件自己的span
      selfSpan: 0
    }
  },
  computed: {
    computedSpan () {
      // 子组件自己的span，用于父组件计算修改span
      if (this.selfSpan) {
        return 24 / this.column * this.selfSpan
      } else if (this.span) {
        // props传递的span
        return 24 / this.column * this.span
      } else {
        // 未传递span时，取column
        return 24 / this.column
      }
    },
    computedLabelWidth(){
        if(this.direction==='vertical'){
        return '100%';
        }
        if(this.size==='large'){
          return '110px';
        }
        else if(this.size==='small'){
          return '90px';
        }
        else if(this.size==='medium'){
          return '100px';
        }

        return this.labelWidth;
    }
  }
}
</script>

<style  lang="less">
  @import "./UI/theme/descriptions-item.less";
</style>
