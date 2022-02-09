<template>
  <div>
    <h1>Chatbox 聊天盒</h1>
    <p>展示对话双方的各种聊天信息</p>
    <Showcomponent
      title="基础用法"
      subtitle="简单的聊天盒展示，宽度默认为父元素宽度"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div style="width: 100%">
          <ct-chatbox :text="['Hello, John']"></ct-chatbox>
          <ct-chatbox sent :text="['Hello']"></ct-chatbox>
          <ct-chatbox :text="['Hello, How are you?']"></ct-chatbox>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="头像用法"
      subtitle="可以添加头像的链接或引用"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div>
          <ct-chatbox
            :text="['Hello, John']"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="昵称用法"
      subtitle="可以增加聊天双方的昵称"
      :codes="code3"
    >
      <template v-slot:showarea>
        <div>
          <ct-chatbox
            :text="['Hello, John']"
            name="Gypsophlia"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="时间戳用法"
      subtitle="每一条消息可以增加时间戳"
      :codes="code4"
    >
      <template v-slot:showarea>
        <div>
          <ct-chatbox
            :text="['Hello, John']"
            name="Gypsophlia"
            stamp="3 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="背景颜色用法"
      subtitle="添加背景颜色的16进制值/RGB值/颜色英文"
      :codes="code5"
    >
      <template v-slot:showarea>
        <div>
          <ct-chatbox
            :text="['Hello, John']"
            name="Gypsophlia"
            stamp="3 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            bgColor="skyblue"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            bgColor="#ecb959"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            bgColor="#3dbf6c"
          ></ct-chatbox>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="连续消息"
      subtitle="短时间内发送连续几条信息"
      :codes="code6"
    >
      <template v-slot:showarea>
        <div>
          <ct-chatbox
            :text="['Hello, John']"
            name="Jim"
            stamp="3 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hi, Jim', 'How are you?']"
            name="John"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            :text="['I am fine.', 'What about you?']"
            name="Jim"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['I am OK, too.', 'Thanks!']"
            name="John"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></ct-chatbox>
        </div>
      </template>
    </Showcomponent>

    <h1 style="margin-top: 50px">Attribution</h1>
    <Showparameter :parameter="params"></Showparameter>
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
import Showparameter from "../../components/showparameter/index.vue";
export default {
  name: "chatbox",
  chName: "聊天盒",
  components: { Showcomponent, Showparameter },
  data() {
    return {
      params: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["text", "聊天消息内容", "Array", "——", "——"],
          ["name", "聊天人昵称", "String", "——", "undefined"],
          ["avatar", "聊天人头像链接或引用", "String", "——", "undefined"],
          ["stamp", "聊天消息发送时间", "String", "——", "undefined"],
          ["sent", "是否为消息发送方", "Boolean", "true/false", "false"],
          [
            "bgColor",
            "聊条消息背景颜色",
            "String",
            "16进制/RGB/英文颜色",
            "undefined",
          ],
        ],
      },
      code1: `<div style="width: 100%">
  <ct-chatbox :text="['Hello, John']"></ct-chatbox>
  <ct-chatbox sent :text="['Hello']"></ct-chatbox>
  <ct-chatbox :text="['Hello, How are you?']"></ct-chatbox>
</div>`,
      code2: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
</div>`,
      code3: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
</div>`,
      code4: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    stamp="3 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
</div>`,
      code5: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    stamp="3 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
    bgColor="skyblue"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
    bgColor="#ecb959"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
    bgColor="#3dbf6c"
  ></ct-chatbox>
</div>`,
      code6: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Jim"
    stamp="3 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hi, Jim', 'How are you?']"
    name="John"
    stamp="4 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    :text="['I am fine.', 'What about you?']"
    name="Jim"
    stamp="4 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['I am OK, too.', 'Thanks!']"
    name="John"
    stamp="4 minutes ago"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  ></ct-chatbox>
</div>`,
    };
  },
};
</script>
