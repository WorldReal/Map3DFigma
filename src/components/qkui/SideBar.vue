

<template>
  <!--侧边栏 注意v-show保持状态（不用v-if）-->
  <transition name="slide-fade">
    <p v-show="show"  class="slide-in">hello</p>
  </transition>
  <button @click="show = !show">Toggle render</button>
</template>



<style scoped>
/* 可以为进入和离开动画设置不同的持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}


.slide-in{
  top:100px;
  position: absolute;
  width: 100px;
  background-color: aqua;
}
</style>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
// const isshow = ref(true)
const show = ref(true)
// const date = ref("");

// let trans = () => {
//   // alert(111);
//   isshow.value = !isshow.value
// }
</script>
