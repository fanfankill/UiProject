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
import './assets/basecss/global.css';

//滚动条插件
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

// 引入highlight插件
import Highlight from './hljsplugin/highlight'; // 这里是你项目highlight.js所在路径
Vue.use(Highlight);


Vue.use(fanui);
Vue.use(vuescroll);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
