<template>
  <div>
    <Showcomponent
      title="基础用法"
      subtitle="简单的聊天盒展示，宽度默认为父元素宽度"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div style="width: 800px">
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
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
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
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
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
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
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
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            bgColor="skyblue"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            bgColor="#ecb959"
          ></ct-chatbox>
          <ct-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
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
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['Hi, Jim', 'How are you?']"
            name="John"
            stamp="4 minutes ago"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            :text="['I am fine.', 'What about you?']"
            name="Jim"
            stamp="4 minutes ago"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
          <ct-chatbox
            sent
            :text="['I am OK, too.', 'Thanks!']"
            name="John"
            stamp="4 minutes ago"
            avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          ></ct-chatbox>
        </div>
      </template>
    </Showcomponent>
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
export default {
  name: "chatbox",
  chName: "聊天盒",
  components: { Showcomponent },
  data() {
    return {
      code1: `<div style="width: 800px">
  <ct-chatbox :text="['Hello, John']"></ct-chatbox>
  <ct-chatbox sent :text="['Hello']"></ct-chatbox>
  <ct-chatbox :text="['Hello, How are you?']"></ct-chatbox>
</div>`,
      code2: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
</div>`,
      code3: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
</div>`,
      code4: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    stamp="3 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
</div>`,
      code5: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Gypsophlia"
    stamp="3 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    bgColor="skyblue"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hello']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    bgColor="#ecb959"
  ></ct-chatbox>
  <ct-chatbox
    :text="['Hello, How are you?']"
    name="Gypsophlia"
    stamp="4 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    bgColor="#3dbf6c"
  ></ct-chatbox>
</div>`,
      code6: `<div>
  <ct-chatbox
    :text="['Hello, John']"
    name="Jim"
    stamp="3 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['Hi, Jim', 'How are you?']"
    name="John"
    stamp="4 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    :text="['I am fine.', 'What about you?']"
    name="Jim"
    stamp="4 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
  <ct-chatbox
    sent
    :text="['I am OK, too.', 'Thanks!']"
    name="John"
    stamp="4 minutes ago"
    avatar="https://tse2-mm.cn.bing.net/th/id/OIP-C.bzgSr4mZFexX7i59eid9cgAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  ></ct-chatbox>
</div>`,
    };
  },
};
</script>
