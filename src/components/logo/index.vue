<template>
 <div>
    <div class="headtital">
    <span class="iconfont icon-chuangzaoli"></span>
    CreateUi
  </div>
  <span class="iconfont icon-hanbaoanniu"></span>
 </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headtital {
  float: left;
  font-size: 28px;
  line-height: 80px;
  margin-left: 50px;
  color: #21a8f3;
}
.headtital span {
  font-size: 28px;
  color: #21a8f3;
}
.icon-hanbaoanniu{
  display: none;
}
@media screen and (max-width:900px) {
  .headtital{
    margin:0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .icon-hanbaoanniu{
    display: block;
    position: absolute;
    right: 40px;
    top: 50%;
    font-size: 2rem;
    transform: translate(0,-50%);
  }
}
</style>
