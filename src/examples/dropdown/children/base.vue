<template>
  <div>
    <showcomponent
      title="基础用法"
      subtitle="下拉框的基础用法"
      ctname="Button"
      :codes="mycode"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <h4>hover触发</h4>

            <ct-dropdown>
              <ct-button type="primary">下拉菜单</ct-button>
              <ct-dropdown-menu slot="dropdown">
                <ct-dropdown-item>食物</ct-dropdown-item>
                <ct-dropdown-item>购物</ct-dropdown-item>
                <ct-dropdown-item>生活</ct-dropdown-item>
              </ct-dropdown-menu>
            </ct-dropdown>
          </div>

          <div class="flex_col">
            <h4>click触发</h4>

            <ct-dropdown trigger="click">
              <ct-button type="primary">下拉菜单</ct-button>
              <ct-dropdown-menu slot="dropdown">
                <ct-dropdown-item>食物</ct-dropdown-item>
                <ct-dropdown-item>购物</ct-dropdown-item>
                <ct-dropdown-item>生活</ct-dropdown-item>
              </ct-dropdown-menu>
            </ct-dropdown>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        <div>
          通过组件<code>slot</code>来设置下拉触发的元素以及需要通过具名<code>slot</code>为<code
            >dropdown</code
          >
          来设置下拉菜单。默认情况下，下拉按钮只要<code>hover</code>即可，无需点击也会显示下拉菜单。也可以通过<code
            >trigger</code
          >
          改为<code>click</code>来修改默认触发方式
        </div>
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
      mycode: `  <div class="block_show_div">
    <div class="flex_col">
      <h4>hover触发</h4>
      <ct-dropdown>
        <ct-button type="primary">下拉菜单</ct-button>
        <ct-dropdown-menu slot="dropdown">
          <ct-dropdown-item>食物</ct-dropdown-item>
          <ct-dropdown-item>购物</ct-dropdown-item>
          <ct-dropdown-item>生活</ct-dropdown-item>
        </ct-dropdown-menu>
      </ct-dropdown>
    </div>

    <div class="flex_col">
      <h4>click触发</h4>
      <ct-dropdown trigger="click">
        <ct-button type="primary">下拉菜单</ct-button>
        <ct-dropdown-menu slot="dropdown">
          <ct-dropdown-item>食物</ct-dropdown-item>
          <ct-dropdown-item>购物</ct-dropdown-item>
          <ct-dropdown-item>生活</ct-dropdown-item>
        </ct-dropdown-menu>
      </ct-dropdown>
    </div>
  </div>`,
    };
  },
};
</script>

<style></style>
