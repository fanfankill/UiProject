<script>
export default {
  name: 'CtRow',
  componentName: 'CtRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: String
  },

  computed: {
    style() {
      const ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'ct-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align ? `is-align-${this.align}` : '',
        { 'ct-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
};
</script>
<style scoped lang="less">
@import "./UI/theme/row.less";
</style>