export default {
    install(Vue){
      Vue.directive('animate', {
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
                window.removeEventListener('scroll', binding.addClass)
              }
            }
          }
          window.addEventListener('scroll', binding.addClass)
          binding.addClass()
        },
        unbind: function (el, binding) {
          if (binding.addClass) {
            window.removeEventListener('scroll', binding.addClass)
          }
        }
    
      })
    }
}