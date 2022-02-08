<template>
  <div  class="descriptions"  :style="{margin}" >
    <!-- 标题 -->
    <h1 v-if="title" class="descriptions-title" v-html="title"></h1>
    <ct-row class="descriptions-row" ref='ctRow' :class="{'is-borderless':borderless}" :borderless="borderless">
      <slot/>
    </ct-row>
  </div>
</template>

<script>
export default {
  name: 'CtDescriptions',
  // 通过provide提供给子组件

  provide () {
    return {
      labelWidth: this.labelWidth,
      column: this.column,
      size: this.size,
      direction: this.direction,
      borderless: this.borderless,
      getSize: this.getSize,
      isBorderless: this.isBorderless,
    }
  },
  props: {
    // 标题
    title: {
      type: String,
      required: false,
      default: ''
    },
    //大小
    size: {
      type: String,
      default: 'medium'
    },
    //方向:horizontal,vertical
    direction: {
      type: String,
      default: 'horizontal'
    },
    // 边距
    margin: {
      type: String,
      default: '0px 12px'
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '100px'
    },
    column: {
      // 每行显示的项目个数
      type: [Number, String],
      default: 3
    },
    borderless: {
      // 无边框
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 监听插槽变化,创建一个观察器实例并传入回调函数
      observe: new MutationObserver(this.computedSpan),
    }
  },
  mounted () {
    // this.$nextTick定义的事件等待DOM更新完成后再执行，获取元素宽度
    this.$nextTick(() => {
      this.computedSpan()
      // 监听插槽变化
      this.observe.observe(this.$refs.ctRow.$el, { childList: true })
    })
  },
  methods: {
    computedSpan () {
      // 筛选出子组件ct-descriptions-item
      const dataSource = this.$slots.default
      const dataList = []
      // vnode.componentOptions判断当前的vnode是否为组件,tag组件名
      dataSource.forEach(item => {
        if (item.componentOptions && item.componentOptions.tag === 'ct-descriptions-item') {
          dataList.push(item.componentInstance)
        }
      })
      // 处理剩余span，列宽自动补齐，避免出现最后一行缺列的情况
      let leftSpan = this.column
      const len = dataList.length
      dataList.forEach((item, index) => {
        // 处理column与span之间的关系

        // 剩余的列数小于设置的span数
        const hasLeft = leftSpan <= (item.span || 1)
        // 当前列的下一列大于了剩余span
        const nextColumnSpan = (index < (len - 1)) && (dataList[index + 1].span >= leftSpan)
        // 是最后一行的最后一列
        const isLast = index === (len - 1)
        if (hasLeft || nextColumnSpan || isLast) {
          // 满足以上条件，需要自动补全span，避免最后一列出现残缺的情况
          item.selfSpan = leftSpan
          leftSpan = this.column
        } else {
          leftSpan -= item.span || 1
        }
      })
    },
    getSize(){
      return this.size;
    },
    isBorderless(){
      return this.borderless;
    }
  },
  beforeDestroy () {
    this.observe.disconnect()
  }
}
</script>

<style  lang="less" >
  @import "./UI/theme/descriptions.less";
</style>
