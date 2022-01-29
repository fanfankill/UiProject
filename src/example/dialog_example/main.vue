<template>
  <div>
    <ct-button @click="handleClick">点击</ct-button>
    <ct-dialog
      title="外层"
      :visible.sync="dialogVisible"
      width="60%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <ct-button @click="dialogVisible = false">取 消</ct-button>
        <ct-button type="primary" @click="indialogVisible = true">确定</ct-button>
      </span>
    </ct-dialog>
    <ct-dialog
      title="内层"
      :visible.sync="indialogVisible"
      width="50%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <ct-button @click="indialogVisible = false">取 消</ct-button>
        <ct-button type="primary" @click="indialogVisible = false">确定</ct-button>
      </span>
    </ct-dialog>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            indialogVisible: false
        }
    },
    methods: {
        handleClick() {
            this.dialogVisible = !this.dialogVisible;
        }
    }
};
</script>
