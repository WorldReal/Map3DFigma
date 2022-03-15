

<template>
  <div class="sider" :class="{ siderOpen: isActive }">
    <button style="width:300px" @click="isActive = !isActive">globleControl</button>
  </div>
</template>



<style scoped>
.sider {
  /* 动画属性 */
  transition: left 1s ease-in, width 2s, height 2s, background-color 2s, transform 2s;

  position: absolute;
  left: 0px;
  top: 50px;
  width: 200px;
  height: 100px;
  background-color:rgba(0, 153, 255, 0.438);
}
.siderOpen {
  left: -150px;
  /* width: 100px; */
  background-color:rgba(0, 153, 255, 0);
}
</style>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 初始化后延迟1s出现
const isActive = ref(true)
// isActive.value = false
const startCss = () => {
  setTimeout(() => {
    isActive.value = false
  }, 1000)
}
onMounted(startCss)

// const isActive = ref(false)
</script>
