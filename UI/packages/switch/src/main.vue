
<template>
<div
  class="ct-switch"
  :class="{'is-disabled':switchDisabled,'is-checked':checked}"
  role="switch"
  @click.prevent="switchValue"
  @change="handleChange"
  :true-value="activeValue"
  :false-value="inactiveValue"
  :disabled="activeValue"
  @keydown.enter="switchValue"
  ref="swt"
>
  <span 
    :class="['ct-switch__label','ct-switch__label--left',!checked ? 'is-active':'']"
     v-if="inactiveText">{{inactiveText}}   
  </span>
  <span class="ct-switch__core" ref="core" :style="{'width':coreWidth+'px'}"></span>
  <span
    :class="['ct-switch__label','ct-switch__label--right',checked ? 'is-active':'']"
    v-if="activeText">{{activeText}}
  </span>
</div>
</template>
<script>
export default{
  name:'CtSwitch',
  props:{
    value:{
      type:[Boolean,String,Number],
      default:false
    },
    width:{
      type:Number,
      default:40
    },
    disabled:{
       type:Boolean,
       default:false
    },
    activeValue:{
      type:[Boolean, String, Number],
      default:true
    },
    inactiveValue:{
      type:[Boolean, String, Number],
      default:false
    },
    activeColor:{
      type:String,
      default:''
    },
    inactiveColor:{
      type:String,
      default:''
    },
    inactiveText:String,
    activeText:String,
      
  },
  data(){
    return{
      coreWidth:this.width
    }
  },
  computed:{
    checked(){
      return this.value===this.activeValue
    },
    switchDisabled(){
      return this.disabled;
    }
  },
  watch:{
    checked(){
      this.$refs.swt.checked=this.checked;
      if(this.activeColor ||this.inactiveColor)
      {
        this.setBackgroundColor();
      }
    }
  },
  methods:{
    handleChange(){
        const val=this.checked ? this.inactiveValue :this.activeValue;
        this.$emit('input',val);
        this.$emit('change',val);
        this.$nextTick(()=>{
          if(this.$refs.input){
            this.$refs.input.checked=this.checked;
          }
        });
    },
    switchValue()
    {
      !this.switchDisabled && this.handleChange();
    },
    setBackgroundColor(){
      let newColor=this.checked ? this.activeColor :this.inactiveColor;
      this.$refs.core.style.borderColor=newColor;
      this.$refs.core.style.backgroundColor=newColor;
    }
  },
  mounted() {
    {
      this.coreWidth=this.width||40;
      if(this.activeColor|| this.inactiveColor)
      {
        this.setBackgroundColor();
      }
      this.$refs.swt.checked=this.checked;
    }
  },
  
}
</script>
<style lang="less">
  @import "./UI/theme/switch.less";
</style>