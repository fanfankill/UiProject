import Skeleton from './src/index.vue';
Skeleton.install = function(Vue) {
    Vue.component(Skeleton.name, Skeleton);
};

export default Skeleton;