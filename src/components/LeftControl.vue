

<template>
  <div class="sider" :class="{ siderOpen: isActive }">
    <!-- 右侧按钮 -->
    <div class="sider-right-btnlist">
      <button class="sider-right-btnlist-btn0" @click="changeActive">
        {{ drawer }}
      </button>
    </div>
  </div>
</template>




<script setup lang='ts'>
import { ref, onMounted } from 'vue'
// 初始化后延迟1s出现
const drawer = ref('OPEN')
const isActive = ref(true)
// isActive.value = false
const startCss = () => {
  setTimeout(() => {
    isActive.value = false
  }, 1000)
}
onMounted(startCss)

const changeActive = () => {
  isActive.value = !isActive.value
  drawer.value = isActive.value ? 'OPEN' : 'CLOSE'
}

// const isActive = ref(false)
</script>


<style scoped>
/* 右侧按钮栏 */
.sider-right-btnlist {
  position: absolute;
  /* // https://www.w3school.com.cn/tiy/t.asp?f=eg_css3_perspective1 */
  perspective: 150;
  -webkit-perspective: 150; /* Safari and Chrome */
  left: 115px;
  top: 50px;
}
/* 按钮 */
.sider-right-btnlist-btn0 {
  /* mix-blend-mode对 webgl无效 */
  /* mix-blend-mode: difference; */
  width: 100px;
  height: 30px;
  transform: rotateZ(90deg) rotateX(20deg);

  background-color: rgba(240, 248, 255, 0.24);
  color: rgba(240, 248, 255, 0.637);
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

