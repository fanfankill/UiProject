//引入组件
import Button from "./packages/Button";
import Badge from "./packages/badge";

// 组件列表
const allcomponents = [Button, Badge];

//组件注册
const install = function(Vue) {
    // 遍历并注册所有组件
    allcomponents.map((component) => {
        Vue.component(component.name, component);
    });
};

//导出全局install
export default {
    install,
};