<!-- 引擎和场景切换器 全局设置 -->
<template>
  <div>
    <div style="color:white">截图预览+导出</div>
    <button @click="CanvasToImage()">截图screenshots</button>

    <img style="width: 150px" :src="image" />
    <button @click="exportImage()">导出export</button>

  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, onBeforeMount, onMounted } from 'vue'
//开始创建组件
import { useStore } from 'vuex'
const store = useStore()
let image = ref('')
// png字节流
let newBytes: ArrayBuffer 
let CanvasToImage = async () => {
  // let canvasThis = store.state.EngineScene.CesiumGlobleObj.canvas;

  // 切换canvas
  let canvasThis: any
  let EngineScene = store.state.EngineScene
  EngineScene.CesiumGlobleObj.firstIndex &&
    (canvasThis = EngineScene.CesiumGlobleObj.canvas)
  EngineScene.BabylonDesignObj.firstIndex &&
    (canvasThis = EngineScene.BabylonDesignObj.canvas)
  EngineScene.CBScenceObj.firstIndex &&
    (canvasThis = EngineScene.CBScenceObj.canvasCesium)

  // 预览截图
  image.value = canvasThis.toDataURL('image/png')

  // 转换canvasThis blob到Png字节流
  newBytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    canvasThis.toBlob((blob: Blob) => {
      const reader = new FileReader()
      blob && reader.readAsArrayBuffer(blob)
      reader.onload = () => {
        let result = reader.result as ArrayBuffer
        resolve(new Uint8Array(result))
      }
      reader.onerror = () => reject(new Error('无法读取blob'))
    })
  })
 
}

let exportImage = ()=>{
   // 发送png格式byte
  parent.postMessage(
    {
      pluginMessage: {
        type: 'CanvasToImage',
        newBytes: newBytes
      }
    },
    '*'
  )
}
</script>
<style scoped>
</style>