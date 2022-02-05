<template>
  <div>
    <showcomponent
      title="基础用法"
      subtitle="下拉框的基础用法"
      :attributes="['type, size']"
      ctname="Button"
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
    </showcomponent>

    <showcomponent
      title="图标使用"
      subtitle="下拉框的基础用法"
      :attributes="['type, size']"
      ctname="Button"
    >
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
    </showcomponent>

    <showcomponent
      title="禁用"
      subtitle="下拉框的基础用法"
      :attributes="['type, size']"
      ctname="Button"
    >
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
    </showcomponent>

    <showcomponent
      title="hide-no-show"
      subtitle="hide-on-show属性"
      :attributes="['type, size']"
      ctname="Button"
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
    </showcomponent>
  </div>
</template>

<script>
import showcomponent from "../../components/showcomponent";

export default {
  name: "dropdown",
  chName: "下拉框",
  components: {
    showcomponent,
  },
};
</script>

<style>
.flex_col {
  height: 80px;
  color: #8492a6;
}
</style>
