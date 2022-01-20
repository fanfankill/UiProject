//引入组件
import Badge from "./packages/badge";
import Aside from "./packages/aside/index.js";
import Container from "./packages/container/index.js";
import Footer from "./packages/footer/index.js";
import Header from "./packages/header/index.js";
import Main from "./packages/main/index.js";
import DropDown from './packages/dropdown/index.js'
import DropDownItem from './packages/dropdown-item/index.js'
import DropDownMenu from './packages/dropdown-menu/index.js'
import Button from "./packages/button/index.js"
// 组件列表

const allcomponents = [
    Aside,
    Button,
    Container,
    Footer,
    Header,
    Main,
    Badge,
    DropDown,
    DropDownItem,
    DropDownMenu
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