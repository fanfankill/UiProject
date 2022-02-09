<template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>

<script>
  import TreeNode from './node.vue'
  import { deepCopy } from './utils'

  export default {
    name: 'CtTree',
    components: { TreeNode },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      showCheckbox: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        cloneData: [],
        activeNode: -1
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.cloneData = deepCopy(this.data)
      },
      emitEvent(eventName, data) {
        this.$emit(eventName, data, this.cloneData)
      }
    },
    watch: {
      data() {
        this.getData()
      }
    }

  }
</script>