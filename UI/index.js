import Loading from "./packages/loading";
<<<<<<< HEAD
import Notification from './packages/notification/index'


=======
import Notify from "./packages/notification";
import Message from "./packages/message";
>>>>>>> 7a3d1011e4eca3bf80af2827b471ac1ade43b9d2

// 组件列表
const components = [];

const requireComponents = require.context("./packages", true, /index\.js$/);

requireComponents.keys().forEach((key) => {
  components.push(requireComponents(key).default);
});

//组件注册
<<<<<<< HEAD
const install = function(Vue) {
    // 遍历并注册所有组件
    components.map((component) => {
        let hasName = !!component.name;
        if (hasName) {
            Vue.component(component.name, component);
        }
    });
    Vue.use(Loading.directive);
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$notify = Notification;
=======
const install = function (Vue) {
  // 遍历并注册所有组件
  components.map((component) => {
    let hasName = !!component.name;
    if (hasName) {
      Vue.component(component.name, component);
    }
  });

  // 指令注册
  Vue.use(Loading.directive);

  // 服务注册
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$notify = Notify;
  Vue.prototype.$message = Message;
>>>>>>> 7a3d1011e4eca3bf80af2827b471ac1ade43b9d2
};

//导出全局install
export default {
<<<<<<< HEAD
    install,
};
=======
  install,
};
>>>>>>> 7a3d1011e4eca3bf80af2827b471ac1ade43b9d2
