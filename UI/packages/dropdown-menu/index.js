import DropDownMenu from './src/main.vue';

/* istanbul ignore next */
DropDownMenu.install = function(Vue) {
  Vue.component(DropDownMenu.name, DropDownMenu);
};

export default DropDownMenu;
