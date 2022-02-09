<template>
  <div>
    <showcomponent
      title="菜单隐藏方式"
      subtitle="hide-no-show"
      ctname="Button"
      :codes="mycode"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <h4>hover效果</h4>
            <ct-dropdown hide-no-show>
              <ct-button type="primary">隐藏效果</ct-button>
              <ct-dropdown-menu slot="dropdown">
                <ct-dropdown-item icon="icon-chuangzaoli"
                  >食物</ct-dropdown-item
                >
                <ct-dropdown-item icon="icon-lights" disabled
                  >购物</ct-dropdown-item
                >
                <ct-dropdown-item icon="icon-yingwen">生活</ct-dropdown-item>
              </ct-dropdown-menu>
            </ct-dropdown>
          </div>

          <div class="flex_col">
            <h4>click效果</h4>
            <ct-dropdown hide-no-show trigger="click">
              <ct-button type="primary">隐藏效果</ct-button>
              <ct-dropdown-menu slot="dropdown">
                <ct-dropdown-item icon="icon-chuangzaoli"
                  >食物</ct-dropdown-item
                >
                <ct-dropdown-item icon="icon-lights" disabled
                  >购物</ct-dropdown-item
                >
                <ct-dropdown-item icon="icon-yingwen">生活</ct-dropdown-item>
              </ct-dropdown-menu>
            </ct-dropdown>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        <div>通过传入<code>hide-no-show</code>属性来修改默认点击消失</div>
      </template>
    </showcomponent>
  </div>
</template>

<script>
import showcomponent from "../../../components/showcomponent";
export default {
  components: {
    showcomponent,
  },
  data() {
    return {
      mycode: `
<div class="block_show_div">
  <div class="flex_col">
  <h4>hover效果</h4>
  <ct-dropdown hide-no-show>
    <ct-button type="primary">隐藏效果</ct-button>
    <ct-dropdown-menu slot="dropdown">
    <ct-dropdown-item icon="icon-chuangzaoli">食物</ct-dropdown-item>
    <ct-dropdown-item icon="icon-lights" disabled>购物</ct-dropdown-item>
    <ct-dropdown-item icon="icon-yingwen">生活</ct-dropdown-item>
    </ct-dropdown-menu>
  </ct-dropdown>
</div>

<div class="flex_col">
  <h4>click效果</h4>
  <ct-dropdown hide-no-show trigger="click">
    <ct-button type="primary">隐藏效果</ct-button>
      <ct-dropdown-menu slot="dropdown">
      <ct-dropdown-item icon="icon-chuangzaoli">食物</ct-dropdown-item>
      <ct-dropdown-item icon="icon-lights" disabled>购物</ct-dropdown-item>
      <ct-dropdown-item icon="icon-yingwen">生活</ct-dropdown-item>
      </ct-dropdown-menu>
    </ct-dropdown>
  </div>
</div> 
      `,
    };
  },
};
</script>

<style></style>
