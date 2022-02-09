<template>
  <div>
    <h1>Dialog 对话框</h1>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <showcomponent
      title="基础用法"
      subtitle="对话框的基础用法"
      ctname="Dialog"
      :codes="code1"
    >
      <template v-slot:showarea>
        <ct-button @click="dialogVisible = true">点击打开对话框</ct-button>
      </template>
      <template v-slot:desc>
        使用<code>title</code>、<code>width</code>属性定义 CtDialog
        的宽度和标题。<code>visible</code>属性定义对话框是否可见。CtDialog
        分为两个部分：<code>body</code>和<code>footer</code>，<code
          >footer</code
        >
        需要具名为<code>footer</code>的<code>slot</code>
      </template>
    </showcomponent>
    <ct-dialog title="提示" :visible.sync="dialogVisible" width="35%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <ct-button @click="dialogVisible = false">取 消</ct-button>
        <ct-button type="primary" @click="dialogVisible = false"
          >确 定</ct-button
        >
      </span>
    </ct-dialog>

    <showcomponent
      title="嵌套的对话框"
      subtitle="对话框的嵌套用法"
      ctname="Dialog"
      :codes="code2"
    >
      <template v-slot:showarea>
        <ct-button @click="outerVisible = true">点击打开外层对话框</ct-button>
      </template>
      <template v-slot:desc>
        正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个
        Dialog，可以将它们平级放置。
      </template>
    </showcomponent>

    <ct-dialog title="外层对话框" :visible.sync="outerVisible" width="50%">
      <span>这是外层对话框</span>
      <span slot="footer" class="dialog-footer">
        <ct-button @click="outerVisible = false">取 消</ct-button>
        <ct-button type="primary" @click="innerVisible = true"
          >打开嵌套对话框</ct-button
        >
      </span>
    </ct-dialog>
    <ct-dialog title="外层对话框" :visible.sync="innerVisible" width="30%">
      <span>这是内层对话框</span>
      <span slot="footer" class="dialog-footer">
        <ct-button @click="innerVisible = false">取 消</ct-button>
        <ct-button type="primary" @click="innerVisible = false">确定</ct-button>
      </span>
    </ct-dialog>

    <showcomponent
      title="居中布局"
      subtitle="标题和底部可居中布局"
      ctname="Dialog"
      :codes="code3"
    >
      <template v-slot:showarea>
        <ct-button @click="centerVisible = true">点击打开对话框</ct-button>
      </template>
      <template v-slot:desc>
        将 <code>center</code> 设置为
        <code>true</code>
        即可使标题和底部居中。<code>center</code>仅影响标题和底部区域。Dialog
        的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加
        CSS
      </template>
    </showcomponent>
    <ct-dialog
      title="标题居中"
      :visible.sync="centerVisible"
      width="30%"
      center
    >
      <span>内容默认不居中的，需要居中请自行CSS</span>
      <span slot="footer" class="dialog-footer">
        <ct-button @click="centerVisible = false">取 消</ct-button>
        <ct-button type="primary" @click="centerVisible = false"
          >确定</ct-button
        >
      </span>
    </ct-dialog>

    <h2>Attribute</h2>
    <show-parameter :parameter="Aparameter"></show-parameter>
    <h2>slot</h2>
    <show-parameter :parameter="Sparameter"></show-parameter>
  </div>
</template>
<script>
import showcomponent from "../../components/showcomponent";
import showparameter from "../../components/showparameter";
export default {
  name: "Dialog",
  chName: "对话框",
  components: {
    showcomponent,
    ShowParameter: showparameter,
  },
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      outerVisible: false,
      centerVisible: false,
      code1:
        `<ct-button @click="dialogVisible = true">点击打开对话框</ct-button>
      
<ct-dialog title="提示" :visible.sync="dialogVisible" width="35%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <ct-button @click="dialogVisible = false">取 消</ct-button>
    <ct-button type="primary" @click="dialogVisible = false">确 定</ct-button>
  </span>
</ct-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    }
  };
<` +
        `/` +
        `script>`,
      code2: `<ct-dialog title="外层对话框" :visible.sync="outerVisible" width="50%">
  <span>这是外层对话框</span>
  <span slot="footer" class="dialog-footer">
    <ct-button @click="outerVisible = false">取 消</ct-button>
    <ct-button type="primary" @click="innerVisible = true">打开嵌套对话框</ct-button>
  </span>
</ct-dialog>
<ct-dialog title="外层对话框" :visible.sync="innerVisible" width="30%">
  <span>这是内层对话框</span>
  <span slot="footer" class="dialog-footer">
    <ct-button @click="innerVisible = false">取 消</ct-button>
    <ct-button type="primary" @click="innerVisible = false">确定</ct-button>
  </span>
</ct-dialog>`,
      code3: `<ct-dialog title="标题居中" :visible.sync="centerVisible" width="30%" center>
  <span>内容默认不居中的，需要居中请自行CSS</span>
  <span slot="footer" class="dialog-footer">
    <ct-button @click="centerVisible = false">取 消</ct-button>
    <ct-button type="primary" @click="centerVisible = false">确定</ct-button>
  </span>
</ct-dialog>`,
      Aparameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["title", "标题，也可通过具名 slot 传入", "string", "", ""],
          [
            "visible",
            "是否显示 Dialog，支持 .sync 修饰符",
            "boolean",
            "",
            "false",
          ],
          ["width", "Dialog 的宽度", "string", "", "50%"],
          ["center", "标题, footer居中", "boolean", "", "false"],
        ],
      },
      Sparameter: {
        title: ["name", "说明"],
        contents: [
          ["", "Dialog 的内容"],
          ["title", "Dialog 标题区的内容"],
          ["footer", "	Dialog 按钮操作区的内容"],
        ],
      },
    };
  },
};
</script>
