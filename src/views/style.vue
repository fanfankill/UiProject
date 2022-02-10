<template>
  <div>
    <h1 class="title">色彩</h1>
    <br />
    <ul class="intro">
      <li>1. 主色系为蓝色。</li>
      <li>2. 点缀色为黄色及绿色，请勿大面积使用点缀色。</li>
      <li>3. 状态色包括四种：错误，警告，成功，信息。</li>
      <li>4. 背景色包括浅灰色系，浅蓝色系，和浅状态色系。</li>
      <li>5. 主色和状态色的hover色偏浅，active色偏黑。</li>
    </ul>
    <br />

    <div style="display: flex">
      <div class="color" style="background-color: #21a8f3">
        <div>主色</div>
        <div>#21A8F3</div>
      </div>
      <div class="color" style="background-color: #21a8f3">
        <div class="point" style="background-color: #fdd835"></div>
        <div>点缀色</div>
        <div>#FDD835</div>
      </div>

      <div class="color" style="background-color: #a8ddfa">
        <div class="point" style="background-color: #00ce3f"></div>
        <div>点缀色</div>
        <div>#00CE3F</div>
      </div>
    </div>

    <div style="display: flex">
      <div class="color" style="background-color: #f06897">
        <div>状态色：错误</div>
        <div>#F06897</div>
      </div>
      <div class="color" style="background-color: #e79f18">
        <div>状态色：警告</div>
        <div>#e79f18</div>
      </div>
      <div class="color" style="background-color: #00ce3f">
        <div>状态色：成功</div>
        <div>#00CE3F</div>
      </div>
      <div class="color" style="background-color: #a8ddfa">
        <div>状态色：信息</div>
        <div>#A8DDFA</div>
      </div>
    </div>

    <div style="display: flex">
      <div class="color" style="background-color: #bbc9d0">
        <div>背景色</div>
        <div>#bbc9d0</div>
      </div>
      <div class="color" style="background-color: #ced6da">
        <div>背景色</div>
        <div>#ced6da</div>
      </div>
      <div class="color" style="background-color: #dde3e7">
        <div>背景色</div>
        <div>#dde3e7</div>
      </div>
      <div class="color" style="background-color: #a8ddfa">
        <div>背景色</div>
        <div>#A8DDFA</div>
      </div>
      <div class="color" style="background-color: #cfecfc">
        <div>背景色</div>
        <div>#CFECFC</div>
      </div>
    </div>

    <div style="display: flex">
      <button class="main">主色</button>
      <button class="error">错误</button>
      <button class="danger">警告</button>
      <button class="success">成功</button>
      <button class="info">信息</button>
    </div>

    <div>
      <div class="color alert" style="background-color: #bbc9d0; color: #fff">
        提示：背景颜色#BBC9D0，字体颜色#fff
      </div>
      <div class="color alert" style="background-color: #ced6da; color: #fff">
        提示：背景颜色#ced6da，字体颜色#fff
      </div>
      <div class="color alert" style="background-color: #dde3e7; color: #fff">
        提示：背景颜色#dde3e7，字体颜色#fff
      </div>
      <div
        class="color alert"
        style="background-color: #cfecfc; color: #0c91da"
      >
        提示：背景颜色#CFECFC，字体颜色#0C91DA
      </div>
      <div
        class="color alert"
        style="background-color: #f9c5d7; color: #ed437d"
      >
        提示：背景颜色#F9C5D7，字体颜色#ED437D
      </div>
      <div
        class="color alert"
        style="background-color: #cce8ca; color: #00ce3f"
      >
        提示：背景颜色#CCE8CA，字体颜色#00CE3F
      </div>
      <div
        class="color alert"
        style="background-color: #ffd483; color: #e79f18"
      >
        提示：背景颜色#ffd483，字体颜色#e79f18
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.head {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 2001;
  background-color: #fff;
  top: 0;
  border-bottom: solid 1px gainsboro;
}
li {
  margin-left: 10px;
  margin-bottom: 10px;
}
.intro {
  background-color: #cfecfc;
  padding: 10px;
  margin: 10px;
  width: 50vw;
  border-radius: 5px;
}
.title {
  font-weight: 400;
}
.color {
  color: white;
  margin: 10px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
}

.point {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.alert {
  width: 400px;
  height: 80px;
}
button {
  color: white;
  border: none;
  outline: none;
  padding: 8px 15px;
  border-radius: 5px;
  margin: 10px;
}
.main {
  background-color: #21a8f3;
  &:hover {
    background-color: #5fbcee;
  }
  &:active {
    background-color: #1b9adf;
  }
}
.error {
  background-color: #f06897;
  &:hover {
    background-color: #ec8eaf;
  }
  &:active {
    background-color: #d67b9b;
  }
}
.danger {
  background-color: #e79f18;
  &:hover {
    background-color: #ecb959;
  }
  &:active {
    background-color: #d18f16;
  }
}
.success {
  background-color: #00ce3f;
  &:hover {
    background-color: #3bdf6c;
  }
  &:active {
    background-color: #03b639;
  }
}
.info {
  background-color: #a8ddfa;
  &:hover {
    background-color: #a1d1eb;
  }
  &:active {
    background-color: #79bce0;
  }
}
</style>
