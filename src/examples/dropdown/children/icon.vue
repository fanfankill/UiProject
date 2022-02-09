<template>
  <div>
    <showcomponent title="图标使用" subtitle="下拉框的基础用法" :codes="mycode">
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <h4>icon图标</h4>
            <ct-dropdown trigger="click">
              <ct-button type="primary">下拉菜单</ct-button>
              <ct-dropdown-menu slot="dropdown">
                <ct-dropdown-item icon="icon-chuangzaoli"
                  >食物</ct-dropdown-item
                >
                <ct-dropdown-item icon="icon-lights">购物</ct-dropdown-item>
                <ct-dropdown-item icon="icon-yingwen">生活</ct-dropdown-item>
              </ct-dropdown-menu>
            </ct-dropdown>
          </div>
        </div>
      </template>

      <template v-slot:desc>
        <div>通过<code>icon</code>来设置每项的字体图标</div>
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
      mycode: ` <div class="block_show_div">
    <div class="flex_col">
      <h4>icon图标</h4>
      <ct-dropdown trigger="click">
        <ct-button type="primary">下拉菜单</ct-button>
        <ct-dropdown-menu slot="dropdown">
          <ct-dropdown-item icon="icon-chuangzaoli">食物</ct-dropdown-item>
          <ct-dropdown-item icon="icon-lights">购物</ct-dropdown-item>
          <ct-dropdown-item icon="icon-yingwen">生活</ct-dropdown-item>
        </ct-dropdown-menu>
      </ct-dropdown>
    </div>
  </div>`,
    };
  },
};
</script>

<style></style>
