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
import "./assets/basecss/global.css";

//滚动条插件
import vuescroll from "vuescroll";
import "vuescroll/dist/vuescroll.css";

// 引入highlight插件
import Highlight from "./plugins/highlight"; // 这里是你项目highlight.js所在路径
Vue.use(Highlight);

import './directive'

Vue.use(fanui);
Vue.use(vuescroll);

Vue.config.productionTip = false;



Vue.directive('animate', {
  // 当绑定元素插入到 DOM 中
  inserted: function (el, binding) {
    // 聚焦元素
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect()
      const h = document.documentElement.clientHeight || document.body.clientHeight
      if (top < h) {
        if(el.className.indexOf(binding.value) == -1 ){
          // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
          el.className = binding.value+' '+el.className
        }
        if (binding.addClass) {
          window.removeEventListener('wheel', binding.addClass)
          window.removeEventListener('scroll', binding.addClass)
        }

      }
    }
    window.addEventListener('wheel', binding.addClass,true)
    window.addEventListener('scroll', binding.addClass,true)
    binding.addClass()

  },
  //解绑
  unbind: function (el, binding) {
    if (binding.addClass) {
      window.removeEventListener('wheel', binding.addClass)
      window.removeEventListener('scroll', binding.addClass)
    }
  }

});


new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");