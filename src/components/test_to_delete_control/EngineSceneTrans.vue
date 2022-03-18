<!-- 引擎和场景切换器 全局设置 -->
<template>
  <div>
    <button @click="setAllSceneUp('BabylonDesign')"> BabylonDesign</button>
    <button @click="setAllSceneUp('CesiumGloble')"> CesiumGloble</button>
    <button @click="setAllSceneUp('CBScence')"> CBScence</button>
  </div>
</template>

<script setup lang='ts'>
import { reactive,ref,onBeforeMount,onMounted} from 'vue'
//开始创建组件
import { useStore } from "vuex";
const store = useStore();

// // 模块A
// const store_state_ma_count_first = ref(0);
// store_state_ma_count_first.value = store.state.ma.count;

let setAllSceneUp = (str:String) => {
  debugger
  store.commit("EngineScene/setAllSceneUp",str);
  console.log(store.state.EngineScene.AllSceneUp)
};
</script>
<style scoped>
</style>