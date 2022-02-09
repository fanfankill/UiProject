import Vue from 'vue'
import Notification from './main.vue'
const NotificationConstructor = Vue.extend(Notification)
const instances = [] //存储通知组件示例列表
let seed = 1 //用来生成组件id
const removeInstance = (instance) => {
    if (!instance) return
    const len = instances.length
        // 返回数组中满足提供的测试函数的第一个元素的索引
    const index = instances.findIndex(ins => instance.id === ins.id)
        // 从索引 index 的位置开始删除 1 个元素
    instances.splice(index, 1)
    if (len <= 1) return
    const removeHeight = instance.height
    for (let i = index; i < len - 1; i++) {
        instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
    }
}
const notify = (options = {}) => {
    const position = options.position || 'top-right';
    const duration = options.duration || 4000;
    if (Vue.prototype.$isServer) return
        // 获取vue实例
    let instance = new NotificationConstructor({
        propsData: options,
        data() {
            return {
                verticalOffset: 0,
                timer: null,
                visible: false,
                height: 0,
                position: position,
                duration: duration
            }
        },

        computed: {
            horizontalClass() {
                return this.position.indexOf('right') > -1 ? 'right' : 'left';
            },

            verticalProperty() {
                return /^top-/.test(this.position) ? 'top' : 'bottom';
            },

            positionStyle() {
                return {
                    position: 'fixed',
                    [this.horizontalClass]: '20px',
                    [this.verticalProperty]: `${ this.verticalOffset }px`
                };
            }
        },
        mounted() {
            if (this.duration > 0) {
                this.createTimer()
            }

            this.$el.addEventListener('mouseenter', () => {
                if (this.timer) {
                    this.clearTimer(this.timer)
                }
            })
            this.$el.addEventListener('mouseleave', () => {
                if (this.timer) {
                    this.clearTimer(this.timer)
                }
                this.createTimer()
            })
        },
        updated() {
            this.height = this.$el.offsetHeight
        },
        beforeDestroy() {
            this.clearTimer()
        },
        methods: {
            createTimer() {
                if (this.duration == 1) return;
                this.timer = setTimeout(() => {
                    this.visible = false
                    document.body.removeChild(this.$el)
                    removeInstance(this)
                    this.$destroy()
                }, this.duration)

            },
            clearTimer() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
            },
            handleClose() {
                this.visible = false
                document.body.removeChild(this.$el)
                removeInstance(this)
                this.$destroy(true)
            },
            handleAfterEnter() {
                this.height = this.$el.offsetHeight
            }
        }
    })

    // 生成唯一id，为了删除时使用
    const id = `notification_${seed++}`
    instance.id = id
        // 生成vue中的$el
    instance = instance.$mount()
        // 将$el中的内容插入dom节点中去
    document.body.appendChild(instance.$el)
    instance.visible = true

    //计算高度
    let verticalOffset = options.offset || 0
    instances.filter(item => item.position === position).forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16; //每个组件间隔16px
    });
    verticalOffset += 16 //最下面的组件底部距离最底部也有16px的间隙
    instance.verticalOffset = verticalOffset
    instances.push(instance)
    return instance
}

export default notify