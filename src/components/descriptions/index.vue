<template>
  <!-- 可以使用span 和 span-map对象来控制栅格的大小 -->
  <ct-descriptions title="测试数据">
    <ct-descriptions-item label="标题1" value="我是内容1" :span-map="{xl:8}" />
    <ct-descriptions-item label="标题2" value="我是内容2" :span="6" />
    <ct-descriptions-item label="标题3" value="超长文本省略号显示，超长文本省略号显示，超长文本省略号显示，超长文本省略号显示，超长文本省略号显示，" />
    <ct-descriptions-item label="标题4" value="我是内容4" :span="8" :span-map="{md:12}" />
    <ct-descriptions-item label="标题5" value="我是内容5" />
    <ct-descriptions-item label="标题6" value="我是内容6" />
    <ct-descriptions-item label="标题7" value="我是内容7" />
    <ct-descriptions-item label="标题8" value="我是内容8" />
    <ct-descriptions-item label="定制">
      <!--  使用名称为conent的slot来定制-->
      <template slot="content">
        <div style="color: red;">
          我是定制内容
        </div>
      </template>
    </ct-descriptions-item>
  </ct-descriptions>
</template>

<script>
export default {
  name:'Descriptions',
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="less">

</style>
