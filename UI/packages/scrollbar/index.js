import ScrolBAR from './src/main';

/* istanbul ignore next */
ScrolBAR.install = function(Vue) {
  Vue.component(ScrolBAR.name, ScrolBAR);
};

export default ScrolBAR;
