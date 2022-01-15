<template>
  <ul class="headul">
             <li><a href="#f">指南</a></li>
             <li><a href="#">组件</a></li>
              <li><a href="#">资源</a></li>
             <li class="iconfont icon-lights"></li>
             <li class="iconfont icon-zhongwen"><a></a></li>
             
           </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.headul{
    float: right;
    height: 100%;
    list-style: none;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.headul li {
    flex: 1;
    height: 80px;
    font-size: 16px;
    font-weight: 300;
     line-height: 80px;
    position: relative;
    
}
.headul a{
    display: block;
    text-decoration: none;
    color: #A8DDFA;
}

.headul a:visited::after{
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: calc(50% - 25px);
    width: 50px;
    height: 1px;
    background: #409eff;
}
.headul a:hover{
    color: #21A8F3;
}
.headul a:hover::after{
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: calc(50% - 24px);
    width: 50px;
    height: 1px;
    background: #409eff;
}
</style>