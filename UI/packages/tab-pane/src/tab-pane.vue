<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CtTabPane',
  props: {
    name: {
      type: [String, Number]
    },
    label: {
      type: [String, Function],
      default: ''
    },
    disabled: {
      type: [String, Boolean],
      default: false
    },
    icon: {
      type: [String]
    }
  },
  data() {
    return {
      show: true
    }
  },
  inject: ['TabsInstance'],
  mounted() {
    this.TabsInstance.initTabs()
  },
  watch: {
    name() {
      this.TabsInstance.initTabs()
    }
  }
}
</script>
