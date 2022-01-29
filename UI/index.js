<<<<<<< HEAD
import Loading from "./packages/loading";
=======
//引入组件
import Aside from "./packages/aside/index.js";
import Container from "./packages/container/index.js";
import Footer from "./packages/footer/index.js";
import Header from "./packages/header/index.js";
import Main from "./packages/main/index.js";
import DropDown from './packages/dropdown/index.js'
import DropDownItem from './packages/dropdown-item/index.js'
import DropDownMenu from './packages/dropdown-menu/index.js'
import Button from "./packages/button/index.js"
import Badge from "./packages/badge/index.js"
import Skeleton from "./packages/skeleton";

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
    DropDownMenu,
    Skeleton,
]

>>>>>>> ffc908d72a99b0c9140b88181a0b317809f2cdc2

// 组件列表
const components = [];

const requireComponents = require.context("./packages", true, /index\.js$/);

requireComponents.keys().forEach((key) => {
  components.push(requireComponents(key).default);
});

//组件注册
<<<<<<< HEAD
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
=======
const install = function(Vue) {
    // 遍历并注册所有组件
    allcomponents.map((component) => {
        Vue.component(component.name, component);
    });
>>>>>>> ffc908d72a99b0c9140b88181a0b317809f2cdc2
};

//导出全局install
export default {
    install,
};