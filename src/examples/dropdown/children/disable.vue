<template>
  <div>
    <showcomponent title="禁用" subtitle="选项的禁用" :codes="mycode">
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <h4>禁用状态</h4>
            <ct-dropdown hide-on-show>
              <ct-button type="primary">禁用</ct-button>
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
        <div>通过<code>disabled</code>来禁用这个选项</div>
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
      <h4>禁用状态</h4>
      <ct-dropdown hide-on-show>
      <ct-button type="primary">禁用</ct-button>
        <ct-dropdown-menu slot="dropdown">
          <ct-dropdown-item icon="icon-chuangzaoli">食物</ct-dropdown-item>
          <ct-dropdown-item icon="icon-lights" disabled>购物</ct-dropdown-item>
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
