<template>
  <label>
    <span>
      <input 
          type="checkbox"
          :disabled="disabled"
          :checked="currentValue"
          @change="change"
          @click.stop="() => {}"
          :class="{disabled}">
    </span>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    methods: {
      change(event) {
        if (this.disabled) {
          return false
        }

        const checked = event.target.checked
        this.currentValue = checked

        const value = checked ? this.trueValue : this.falseValue
        this.$emit('input', value)
        this.$emit('on-change', value)
      },
      updateModel() {
        this.currentValue = this.value === this.trueValue
      }
    },
    watch: {
      value(val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.updateModel()
        } else {
          throw 'Value shold be trueValue or falseValue'
        }
      }
    }
  }
</script>

<style lang="less" scoped>

label {
  position: relative;
  top: .1rem;
  cursor: pointer;
}

.disabled {
    cursor: not-allowed;
  }
  
span {
  padding-right: .5rem;
  & input {
    transform: scale(1.2);
    cursor: pointer;
  }
}
</style>