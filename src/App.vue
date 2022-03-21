<template>
  <!-- 底图 z0-->
  <CesiumGloble class="CesiumGloble" :class="{ AllSceneUp: activeIndexScene == 'CesiumGloble' }" />
  <BabylonDesign
    class="BabylonDesign"
    :class="{ AllSceneUp: activeIndexScene == 'BabylonDesign' }"
  />
  <!-- <CBScence class="CBScence" :class="{ AllSceneUp: activeIndexScene=='CBScence'}"/> -->
  <!--另外一种写法-->
  <!-- <CesiumGloble class="CesiumGloble" :class="(activeIndexScene=='CesiumGloble')?'':'AllSceneUp' " /> -->

  <!-- 左侧控制栏 z1x0-->
  <LeftControl style="z-index: 10" />
  <!-- 测试控制栏 -->
  <!-- <test_to_delete_control style="z-index: 999999" /> -->
</template>

<script setup lang="ts">
import CBScence from './components/CBScence.vue';
import CesiumGloble from "./components/CesiumGloble.vue";
import BabylonDesign from "./components/BabylonDesign.vue";
import LeftControl from "./components/LeftControl.vue";
import test_to_delete_control from "./components/test_to_delete_control.vue";
// 切换视图
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
// 全局状态选择引擎和场景
// const activeIndexScene = ref('');
// activeIndexScene.value = store.state.EngineScene.AllSceneUp;
const activeIndexScene = computed(() => {
  return store.state.EngineScene.AllSceneUp;
});

</script>

<style>
html,
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
/* 场景基础层叠切换 
  CesiumGloble 3
  CB 12 BabylonDesign0  
  当前最顶层AllSceneUp5
  
  切换状态vuex全局控制 */
.CesiumGloble {
  z-index: 3;
}
.BabylonDesign {
  z-index: 2;
}
.CBScence {
  /*融合场景*/
  /* TODO Z-index双引擎嵌套问题 */
  z-index: 0;
}

.AllSceneUp {
  z-index: 5;
}
</style>
