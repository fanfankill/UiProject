// 组件列表
const allcomponents = [];

const requireComponents = require.context("./packages", true, /index\.js$/);

requireComponents.keys().forEach((key) => {
  allcomponents.push(requireComponents(key).default);
});

//组件注册
const install = function (Vue) {
  // 遍历并注册所有组件
  allcomponents.map((component) => {
    Vue.component(component.name, component);
  });
};

//导出全局install
export default {
  install,
};
