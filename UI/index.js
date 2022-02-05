import Loading from "./packages/loading";

// 组件列表
const components = [];

const requireComponents = require.context("./packages", true, /index\.js$/);

requireComponents.keys().forEach((key) => {
  components.push(requireComponents(key).default);
});

//组件注册
const install = function (Vue) {
  // 遍历并注册所有组件
  components.map((component) => {
    let hasName = !!component.name;
    if (hasName) {
      Vue.component(component.name, component);
    }
  });

  Vue.use(Loading.directive);
  Vue.prototype.$loading = Loading.service;
};

//导出全局install
export default {
  install,
};
