import Switch from './src/main';

/* istanbul ignore next */
// 导出Switch组件
Switch.install = function(Vue) {
    Vue.component(Switch.name, Switch);
};

export default Switch;