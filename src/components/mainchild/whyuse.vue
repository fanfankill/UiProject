<template>
  <div class="mystart">
      <h2>关于CreateUI</h2>
      <p><code>CreateUI</code>，是一套基于 Vue.js 的开源 UI 组件库，由多人协作开发完成，开发的目的在于提升自己对组件化开发的理解和动手能力，基于自己感兴趣的组件上进行开发和实践，从中学习到其组件化的思想。</p>

         <h2>为什么选择UI框架</h2>
      <p>
          <ul class="showul">
              <li>在组队的时候发现人数众多，如果选择一般的项目来开发可能会存在人员分配有空闲情况。</li>
              <li>平常使用UI框架不少，但从来没了解过实现背后的原理。</li>
               <li>对于组件化开发感兴趣。</li>
               <li>更加利于团队合作和分工。</li>
        </ul>
    </p>

      <h2>设计理念</h2>
      <div class="myico">
         <div>
              <span class="iconfont icon-xuexi"></span>
              <h4>学习</h4>
                <p>study</p>
         </div>
            <div>
             <span class="iconfont icon-idea__easyico"></span>
               <h4>创新</h4>
                <p>create</p>
         </div>
            <div>
               <span class="iconfont icon-hezuo"></span>
               <h4>合作</h4>
                <p>cooperation</p>
         </div>
            <div>
            <span class="iconfont icon-yizhixingtongjibiao"></span>
                <h4>一致</h4>
                <p>Consistency</p>
         </div>
      </div>

        

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mystart{
    padding-top: 40px;
}
h2{
    margin: 80px 0 0 0;
    font-size: 2rem;
}
h3{
    font-size: 1.5rem;
}
h2:first-child{
    margin: 0;
}
p{
    margin: 20px 0;
}
.showul{
    line-height: 30px;
}
.showul li{
    position: relative;
    margin-left: 10px;
}
.showul li::before{
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translate(0,-50%);
    width: 5px;
    height: 5px;
    border-radius:100% ;
    background: black;
}
code{
    color: #21A8F3;
    background-color: #CFECFC;
    padding: 1px 5px;
}
.myico{
    display: flex;
    justify-content:space-between;
}
.myico div{
    text-align: center;
}
.myico p{
        color: #99a9bf;
          margin: 0;
}
.myico  span{
    display: block;
     margin: 40px 0 20px 0;
    font-size: 4rem;
    color: #21a8f3;
    transition: all .5s;
}
.myico  span:hover{
    color: #65e0ff;
    transform: translate(0,-10%);
}

</style>