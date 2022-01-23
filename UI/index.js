//引入组件
import Aside from "./packages/aside/index.js";
import Container from "./packages/container/index.js";
import Footer from "./packages/footer/index.js";
import Header from "./packages/header/index.js";
import Main from "./packages/main/index.js";
import Badge from "./packages/badge";
import Skeleton from "./packages/skeleton";
// 组件列表

const allcomponents = [
    Aside,
    Container,
    Footer,
    Header,
    Main,
    Badge,
    Skeleton,
]

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