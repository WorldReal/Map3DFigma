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
  // let viewer = store.state.EngineScene.CesiumGlobleObj;
  // let canvasThis = store.state.EngineScene.CesiumGlobleObj.canvas;
  let canvasThis = store.state.EngineScene.BabylonDesignObj.canvas;
  image.value = canvasThis.toDataURL("image/png");

  const newBytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    canvasThis.toBlob((blob: Blob) => {
      console.log(blob);
      const reader = new FileReader();
      blob && reader.readAsArrayBuffer(blob);
      console.log("blob", blob);
      debugger;
      reader.onload = () => {
        let result = reader.result as ArrayBuffer;
        resolve(new Uint8Array(result));
      };
      reader.onerror = () => reject(new Error("无法读取blob"));
    });
  });

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
  //   const canvasHere = document.createElement('canvas')
  //   const ctxHere = canvasHere.getContext('2d')
  //   canvasHere.width = cesiumGl.drawingBufferWidth
  //   canvasHere.height = cesiumGl.drawingBufferHeightlet
  //   let imageData =new ImageData(new Uint8ClampedArray(pixels), cesiumGl.drawingBufferWidth, cesiumGl.drawingBufferHeightlet)
  //   console.log('imageData',imageData)
  //   ctxHere&&ctxHere.putImageData(imageData, 0, 0)
  //   console.log('ctxHere',ctxHere)
  //   const newBytes = await new Promise((resolve, reject) => {
  //   canvasHere.toBlob((blob) => {
  //     const reader = new FileReader()
  //     blob&&reader.readAsArrayBuffer(blob)
  //     console.log('blob',blob)
  //     debugger
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = () => reject(new Error('Could not read from blob'))
  //   })
  // })
  console.log("newBytes", newBytes);
  debugger;
  parent.postMessage(
    {
      pluginMessage: {
        type: "CanvasToImage",
        // image: image.value,
        newBytes: newBytes
      }
    },
    "*"
  );
};
</script>
<style scoped>
</style>