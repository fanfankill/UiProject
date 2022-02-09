<template>
  <showcomponent
      title="带有初始状态的"
      subtitle="传入数据时，自定义每个节点的初始状态"
      :attributes="['data, show-checkbox, icon']"
      ctname="Tree"
      :codes="code3"
    >
      <template #showarea>
        <h4>可设定的状态有expand、checked、disabled、selected</h4>
        <ct-tree :data="data3" show-checkbox multiple></ct-tree>
      </template>
      <template #desc>
        <div>
          给节点设置 <code>expand</code>、<code>selected</code> <code>checked</code> 和 <code>disabled</code> 可以将节点设置为展开、选中、勾选和禁用状态。<br>
          设置属性<code>multiple</code>可对节点进行多选
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
      data3: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              selected: true,
              children: [
                  {
                      title: 'leaf 1-1-1',
                      disabled: true
                  },
                  {
                      title: 'leaf 1-1-2',
                      selected: true
                  }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              checked: true,
              children: [
                  {
                      title: 'leaf 1-2-1',
                  },     
              ]
            }
          ]
        }
      ],
      code3: `
        <template>
          <ct-tree :data="data3" show-checkbox multiple></ct-tree>
        </template> 

        <script>
          export default {
            data() {
              return {
                data3: [
                  {
                    title: 'parent 1',
                    expand: true,
                    children: [
                      {
                        title: 'parent 1-1',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: 'leaf 1-1-1',
                                disabled: true
                            },
                            {
                                title: 'leaf 1-1-2',
                                selected: true
                            }
                        ]
                      },
                      {
                        title: 'parent 1-2',
                        expand: true,
                        checked: true,
                        children: [
                            {
                                title: 'leaf 1-2-1',
                            },     
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