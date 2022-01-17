import Vue from "vue";
import App from "./App.vue";

//引入组件
import fanui from "../UI";
//引入路由
import router from "./router";
//引入字体图标
import "./assets/iconfont/font.css";
//引入全局样式
import "./assets/basecss/base.css";

Vue.use(fanui);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
