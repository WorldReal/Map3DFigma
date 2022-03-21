<!-- 引擎和场景切换器 全局设置 -->
<template>
  <div>
    <button @click="CanvasToImage()">CanvasToImage</button>
    <img style="width: 20vw; height: 20vh" :src="image" />
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, onBeforeMount, onMounted } from "vue";
//开始创建组件
import { useStore } from "vuex";
const store = useStore();
let image = ref("aa");
// // 模块A
// const store_state_ma_count_first = ref(0);
// store_state_ma_count_first.value = store.state.ma.count;

let CanvasToImage = () => {
  // setTimeout(() => {
  // viewer.render()
  let viewer = store.state.EngineScene.CesiumGlobleCanvas;
  let canvasThis = viewer.scene.canvas;
  image.value = canvasThis.toDataURL("image/png");
  debugger;
  let cesiumGl = canvasThis.getContext("webgl");
  let pixels = new Uint8Array(
    cesiumGl.drawingBufferWidth * cesiumGl.drawingBufferHeight * 4
  );
  cesiumGl.readPixels(
    0,
    0,
    cesiumGl.drawingBufferWidth,
    cesiumGl.drawingBufferHeight,
    cesiumGl.RGBA,
    cesiumGl.UNSIGNED_BYTE,
    pixels
  );

  debugger;
  parent.postMessage(
    {
      pluginMessage: {
        type: "CanvasToImage",
        image: image.value,
        newBytes: pixels
      }
    },
    "*"
  );
  // }, 5000)
};
</script>
<style scoped>
</style>