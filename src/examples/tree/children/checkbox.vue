<template>
  <showcomponent
      title="可勾选的"
      subtitle="带有复选框的树，可用于选择节点"
      :attributes="['data, show-checkbox, icon']"
      ctname="Tree"
      :codes="code2"
    >
      <template #showarea>
        <h4>可选择的、带有复选框的树</h4>
        <ct-tree :data="data2" show-checkbox></ct-tree>
      </template>
      <template #desc>
        <div>
          设置<code>show-checkbox</code> 属性可以对节点进行勾选
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
      data2: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                  {
                      title: 'leaf 1-1-1'
                  },
                  {
                      title: 'leaf 1-1-2'
                  }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                  {
                      title: 'leaf 1-2-1'
                  },
                  {
                      title: 'leaf 1-2-1'
                  }
              ]
            }
          ]
        }
      ],
      code2: `
        <template>
          <ct-tree :data="data2" show-checkbox></ct-tree>
        </template> 

        <script>
          export default {
            data() {
              return {
                data2: [
                  {
                    title: 'parent 1',
                    expand: true,
                    children: [
                      {
                        title: 'parent 1-1',
                        expand: true,
                        children: [
                            {
                                title: 'leaf 1-1-1'
                            },
                            {
                                title: 'leaf 1-1-2'
                            }
                        ]
                      },
                      {
                        title: 'parent 1-2',
                        expand: true,
                        children: [
                            {
                                title: 'leaf 1-2-1'
                            },
                            {
                                title: 'leaf 1-2-1'
                            }
                        ]
                      }
                    ]
                  }
                ],
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