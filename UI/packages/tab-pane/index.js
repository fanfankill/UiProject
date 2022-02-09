import TabPane from './src/tab-pane'


TabPane.install = function(Vue) {
  Vue.component(TabPane.name, TabPane);
};


export default TabPane