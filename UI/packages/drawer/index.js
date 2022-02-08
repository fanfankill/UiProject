import Drawer from './src/main.vue';

/* istanbul ignore next */
Drawer.install = function(Vue) {
  Vue.component(Drawer.name, Drawer);
};

export default Drawer;
