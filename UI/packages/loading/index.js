import directive from "./src/directive.js";
import service from "./src/service.js";

export default {
  install(Vue) {
    Vue.use(directive);
    Vue.prototype.$loading = service;
  },
  directive,
  service,
};
