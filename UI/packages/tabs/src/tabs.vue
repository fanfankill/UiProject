<template>
  <!-- tabs容器 -->
  <div class="ct-tabs">
    <div class="ct-tabs-nav" ref="navwrap">
      <div class="ct-inv-bar" :style="barStyle"></div>
      <div class="ct-tab"
           v-for="(item, index) in navList"
           :key="index"
           @click="handleChange(index)"
           :class="{ 
                      active: item.name === activeKey,
                      tabdisabled: item.disabled,
                      ...item.icon,
                      cardtype: isCardtype
                    }"
      >{{item.label}} 
        <span 
            v-if="tabChangable"
            :class="{ closable: item.name === activeKey }"
            @click.stop="handleClosed(index)"
        >×</span>
      </div>
      <span v-if="tabChangable"
            class="add-tab"
            @click="addTab"
      >+</span>
    </div>
    <div class="ct-pane" :class="{pane: tabChangable}">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import "../../../../src/assets/basecss/global.less"
export default {
  name: 'CtTabs',
  props: {
    value: { // 当前激活的tab
      type: [String, Number]
    },
    type: {
      type: String
    },
    changable: {
      type: [String, Boolean],
      default: false
    },
    tabsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      navList: [],
      activeKey: this.value,
      barWidth: 0,
      barOffset: 0,
      isCardtype: false,
      tabChangable: false,
      closable: false,
      allTabsNum: 0
    }
  },
  computed: {
    barStyle() {
      return {
        width: `${this.barWidth}px`,
        transform: `translate3d(${this.barOffset}px, 0px, 0px)`
      }
    }
  },
  provide() {
    return { TabsInstance: this }
  },
  mounted() {
    this.initTabs()
    if (this.tabChangable) {
      this.allTabsNum = this.navList.length
    }
  },
  methods: {
    // 初始化更新
    initTabs() {
      this.updateNav()
      this.updateStatus()
      // 进行类型判断
      this.handleType()
    },

    // 获取tabs下的所有pane实例
    getTabs() {
      return this.$children.filter(item => item.$options.name === 'CtTabPane')
    },

    // 获取所有pane组件传入的props
    updateNav() { 
      this.tabChangable = typeof(this.changable) === 'string' ? true : false
      this.navList = []
      this.getTabs().forEach((pane, index) => {
        pane.name = pane.name != false? pane.name : index
        const name = pane.name
        const disabled = typeof(pane.disabled) === 'string' ? true : false
        const icon = this.getIconClass(pane.icon)
        this.navList.push({
          label: pane.label,
          name,
          disabled,
          icon
        })
        if (index === 0 && !this.activeKey) {
          this.activeKey = name
        }
      })
    },
    // 处理图标
    getIconClass(str) {
      if (!str) {
        return null
      }
      const list = str.split('-')
      let iconposition = list.pop()
      switch (iconposition) {
        case 'l':
          iconposition = 'iconleft'
          break
        case 'r':
          iconposition = 'iconright'
          break
        case 't':
          iconposition = 'icontop'
          break
        case 'b':
          iconposition = 'iconbottom'
          break
      }
      const iconName = `icon-${list.join('-')}`
      return {'iconfont': true, [iconName]: true, [iconposition]: true}
    },

    // 处理不同type
    handleType() {
      switch (this.type) {
        case 'none':
          this.barWidth = 0
          break
        case 'card':
          this.isCardtype = true
          break
        default:
          this.updateBar()
      }
    },

    // 显示当前tab激活的content内容
    updateStatus() {
      const tabs = this.getTabs()
      tabs.forEach(tab => (tab.show = tab.name === this.activeKey))
    },

    // 显示标签底部横条
    updateBar() {
      this.$nextTick(() => {
        const index = this.navList.findIndex(nav => nav.name === this.activeKey)
        const elemTabs = this.$refs.navwrap.querySelectorAll('.ct-tab')
        const elemTab = elemTabs[index]
        this.barWidth = elemTab ? elemTab.offsetWidth : 0
        if (index > 0) {
          let offset = 0
          for (let i = 0; i < index; i++) {
            offset += elemTabs[i].offsetWidth + 16
          }
          this.barOffset = offset
        } else {
          this.barOffset = 0
        }
      })
    },

    // 处理tab点击
    handleChange(index) {
      const nav = this.navList[index]
      this.activeKey = nav.name
      const params = {
        index,
        tab: nav
      }
      this.$emit("tabClick", params)
    },

    // 关闭标签
    handleClosed(index) {
      this.tabsList.splice(index, 1)
      this.navList.splice(index, 1)
      this.activeKey = this.tabsList[this.tabsList.length - 1].name
    },

    // 添加标签页
    addTab() {
      let newTabName = '新标签' + ++this.allTabsNum;
      this.tabsList.push({
        label: newTabName,
        name: newTabName,
        content: `${newTabName}的内容`
      });
      this.activeKey = newTabName
    }
  },
  watch: {
    value(val) {
      this.activeKey = val
    },
    activeKey() {
      this.updateStatus()
      this.handleType()
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../theme/tabs.less";
</style>