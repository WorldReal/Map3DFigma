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
let image = ref("");

let CanvasToImage = async () => {
  // let canvasThis = store.state.EngineScene.CesiumGlobleObj.canvas;


  let canvasThis: any;
  let EngineScene = store.state.EngineScene
  EngineScene.CesiumGlobleObj.firstIndex && (canvasThis = EngineScene.CesiumGlobleObj.canvas)
  EngineScene.BabylonDesignObj.firstIndex && (canvasThis = EngineScene.BabylonDesignObj.canvas)
  EngineScene.CBScenceObj.firstIndex && (canvasThis = EngineScene.CBScenceObj.canvasCesium)

  image.value = canvasThis.toDataURL("image/png");

  const newBytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    canvasThis.toBlob((blob: Blob) => {
      const reader = new FileReader();
      blob && reader.readAsArrayBuffer(blob);
      reader.onload = () => {
        let result = reader.result as ArrayBuffer;
        resolve(new Uint8Array(result));
      };
      reader.onerror = () => reject(new Error("无法读取blob"));
    });
  });

  parent.postMessage(
    {
      pluginMessage: {
        type: "CanvasToImage",
        newBytes: newBytes
      }
    },
    "*"
  );
};
</script>
<style scoped>
</style>