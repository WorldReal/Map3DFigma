

<template>
  <div class="sider" :class="{ siderOpen: isActive }">
    <button class="siderBtn" @click="isActive = !isActive">{{ drawer }}</button>
    <div id="div1">
      <button id="div2">HELLO</button>
    </div>
  </div>
</template>




<script setup lang='ts'>
import { ref, onMounted } from 'vue'
// 初始化后延迟1s出现
const drawer = ref('open')
const isActive = ref(true)
// isActive.value = false
const startCss = () => {
  setTimeout(() => {
    isActive.value = false
  }, 1000)
}
onMounted(startCss)

// const isActive = ref(false)
// https://www.w3school.com.cn/tiy/t.asp?f=eg_css3_perspective1
</script>


<style scoped>
#div1 {
  position: relative;
  height: 150px;
  width: 150px;
  margin: 50px;
  padding: 10px;
  border: 1px solid black;
  perspective: 150;
  -webkit-perspective: 150; /* Safari and Chrome */
}

#div2 {
  position: absolute;
  left: 149px;
  top: 50px;
  width: 100px;
  height: 100px;

  transform: rotateZ(90deg) rotateX(20deg);
}
.siderBtn {
  position: absolute;
  left: 149px;
  top: 50px;
  width: 50px;
  height: 100px;
  transform: rotateZ(90deg) rotateX(40deg);
}
.sider {
  /* 动画属性 */
  transition: left 1s ease-in, width 2s, height 2s, background-color 2s,
    transform 2s;

  position: absolute;
  left: 0px;
  top: 50px;
  width: 150px;
  height: 500px;
  background-color: rgba(0, 153, 255, 0.438);
}
.siderOpen {
  left: -150px;
  /* width: 100px; */
  background-color: rgba(0, 153, 255, 0);
}
</style>

