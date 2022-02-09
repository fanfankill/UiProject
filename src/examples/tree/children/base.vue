<template>
  <showcomponent
      title="基础用法"
      subtitle="树形控件的基础使用"
      :attributes="['data, show-checkbox, icon']"
      ctname="Tree"
      :codes="code1"
    >
      <template #showarea>
        <h4>普通、简洁的树形结构</h4>
        <ct-tree :data="data1"></ct-tree>
      </template>
      <template #desc>
        <div>
          <code>data</code> 属性用于传递展示的数据，其是一个数组，每个子项是一个对象
        </div>
      </template>
    </showcomponent>
</template>

<script>
import showcomponent from "../../../components/showcomponent";

export default {
  components: {
    showcomponent
  },
  data() {
    return {
      data1: [
        {
          title: '一级 1',
          expand: true,
          children: [
            {
              title: '二级 1-1',
              expand: true,
              children: [
                {
                  title: '三级 1-1-1'
                },
                {
                  title: '三级 1-1-2'
                }
              ]
            },
            {
              title: '二级 1-2',
              children: [
                {
                  title: '三级 1-2-1'
                },
                {
                  title: '三级 1-2-2'
                }
              ]
            }
          ]
        },
        {
          title: '一级 2',
          children: [
            {
              title: '二级 2-1',
              children: [
                {
                  title: '三级 2-1-1'
                }
              ]
            },
            {
              title: '二级 2-2',
              children: [
                {
                  title: '三级 2-2-1'
                },
                {
                  title: '三级 2-2-2'
                }
              ]
            }
          ]
        }
      ],
      code1: `
        <template>
          <ct-tree :data="data1"></ct-tree>
        </template> 

        <script>
          export default {
            data() {
              return {
                data1: [
                  {
                    title: '一级 1',
                    expand: true,
                    children: [
                      {
                        title: '二级 1-1',
                        expand: true,
                        children: [
                          {
                            title: '三级 1-1-1'
                          },
                          {
                            title: '三级 1-1-2'
                          }
                        ]
                      },
                      {
                        title: '二级 1-2',
                        children: [
                          {
                            title: '三级 1-2-1'
                          },
                          {
                            title: '三级 1-2-2'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    title: '一级 2',
                    children: [
                      {
                        title: '二级 2-1',
                        children: [
                          {
                            title: '三级 2-1-1'
                          }
                        ]
                      },
                      {
                        title: '二级 2-2',
                        children: [
                          {
                            title: '三级 2-2-1'
                          },
                          {
                            title: '三级 2-2-2'
                          }
                        ]
                      }
                    ]
                  }
              };
            }
          };
        <` + `/` + `script>
      `,
    }
  },
}
</script>

<style lang="less" scoped>
h4 {
  color: #8492a6;
  text-indent: 1rem;
  margin-bottom: 2rem;
}
</style>