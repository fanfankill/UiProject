<template>
  <ul class="tree-ul" :class="{notchild: !data.children}">
    <li class="tree-li" :class="{notchild: !data.children}">
      <div class="node-nav" @click="handleExpand">
        <span 
          class="tree-expand" 
          v-show="data.children && data.children.length"    :class="{treeclose: !data.expand}"
          
        ></span>
        <checkbox
          v-if="showCheckbox"
          :value="data.checked"
          @input="handleCheck"
          :disabled="data.disabled"
        ></checkbox>
        <span class="tree-title" :class="{titleactive: active || data.selected}">{{ data.title }}</span>
      </div>
      <collapse-transition>
        <div v-show="data.expand">
            <tree-node
              v-for="(item, index) in data.children"
              :key="index"
              :data="item"
              :show-checkbox="showCheckbox"
            ></tree-node>
          </div>
      </collapse-transition>
        
    </li>
  </ul>
</template>

<script>
  import Checkbox from './checkbox.vue'
  import { findComponentUpward } from './utils'
  import collapseTransition from './transition'

  export default {
    name: 'TreeNode',
    components: {
      Checkbox,
      collapseTransition
    },
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      },
      showCheckbox: {
        type: Boolean, 
        default: false
      }
    },
    data() {
      return {
        tree: null,
        active: false
      }
    },
    created() {
      this.tree = findComponentUpward(this, 'CtTree')
      // this.active = this.data.selected || false
    },
    methods: {
      // 处理节点展开或收容
      handleExpand() {
        this.$set(this.data, 'expand', !this.data.expand)
        if (this.tree) {
          this.tree.emitEvent('on-expand', this.data)

          // 判断节点的激活状态  
          this.handleActive()
        }
      },

      // 判断是否为激活状态
      handleActive() {
        if (this.data.disabled) {
          return
        }
        if (this.tree.multiple) {
          this.active = !this.active
        } else {
          this.tree.activeNode = this._uid
          this.active = true
        }
      },

      // 处理复选框的选中
      handleCheck(checked) {
        this.updateTreeDown(this.data, checked)

        if (this.tree) {
          this.tree.emitEvent('on-check-change', this.data)
        }
      },

      // 更新后级的选中状态
      updateTreeDown(data, checked) {
        this.$set(data, 'checked', checked)

        if (data.children && data.children.length) {
          data.children.forEach(item => {
            this.updateTreeDown(item, checked)
          });
        }
      }
    },

    watch: {
      'data.children': {
        handler (data) {
          if (data) {
            const checkedAll = !data.some(item => !item.checked)
            this.$set(this.data, 'checked', checkedAll)
          }
        },
        deep: true
      },
      'tree.activeNode': {
        handler () {
          this.active = this._uid === this.tree.activeNode
        }
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../../../theme/tree.less';
</style>