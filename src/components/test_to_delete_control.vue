

<template>
  <div class="sider" :class="{ siderOpen: isActive }">
    <!-- 控制钮 -->
    <button class="testSiderBtn" @click="isActive = !isActive">
      T
    </button>
    <!-- 测试项 -->
    <!-- <vuexVue/> -->
    <EngineSceneTransVue/>
    <CanvasToImageVue/>

  </div>
</template>

<script setup lang="ts">
import CanvasToImageVue from './test_to_delete_control/CanvasToImage.vue';
import EngineSceneTransVue from './test_to_delete_control/EngineSceneTrans.vue';
import vuexVue from './test_to_delete_control/vuex.vue';

import { ref, onMounted } from 'vue'
// 初始化后延迟1s出现
const isActive = ref(true)
// isActive.value = false
const startCss = () => {
  setTimeout(() => {
    isActive.value = false
  }, 1000)
}
// onMounted(startCss)

</script>


<style scoped>
.testSiderBtn {
  position: absolute;
  left: 400px;
  bottom: 0px;
  width: 30px;
}
.sider {
  /* 动画属性 */
  transition: left 1s ease-in, width 2s, height 2s, background-color 2s,
    transform 2s;

  position: absolute;
  left: 0px;
  top: 0px;
  width: 400px;
  height: 100vh;
  background-color: rgba(255, 30, 0, 0.089);
}
.siderOpen {
  left: -400px;
  /* width: 100px; */
  background-color: rgba(0, 153, 255, 0);
}
</style>

