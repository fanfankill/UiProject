//引入组件

import Buttom from "./packages/buttom/index.js";
import Aside from "./packages/aside/index.js";
import Container from "./packages/container/index.js";
import Footer from "./packages/footer/index.js";
import Header from "./packages/header/index.js";
import Main from "./packages/main/index.js";
// 组件列表

const allcomponents=[
    Buttom,
    Aside,
    Container,
    Footer,
    Header,
    Main
]


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
