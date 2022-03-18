

<template>
  <div class="cesiumContainer">
    <div class="cesiumContainer" :ref="cesiumRefFn"></div>
    <!-- <img :src="image" /> -->
  </div>
</template>



<style scoped>
.cesiumContainer {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
</style>


<script setup lang="ts">
import { useStore } from "vuex";
import { ref, reactive, onMounted, onActivated, Ref } from 'vue'
import * as Cesium from 'cesium'
const store = useStore();
// defineProps<{ msg: string }>()
// const count = ref(0);
let cesiumRef: any
let viewer: Cesium.Viewer
const cesiumRefFn = (el: any) => {
  cesiumRef = el
}
// let image = ref('aa')
const getViewer = async () => {
  viewer = new Cesium.Viewer(cesiumRef, {
    animation: false,
    baseLayerPicker: false,
    geocoder: false,
    timeline: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    infoBox: false,
    orderIndependentTranslucency: false,
    homeButton: false,
    fullscreenButton: false,
    vrButton: false,
    // skyBox: false,
    // selectionIndicator:false    // 是否可以选中
    contextOptions: {
      webgl: {
        alpha: true,
        depth: true,
        stencil: true,
        antialias: true,
        premultipliedAlpha: true,
        //通过canvas.toDataURL()实现截图需要将该项设置为true
        preserveDrawingBuffer: true,
        failIfMajorPerformanceCaveat: true
      }
    }
  })
  let logoHtml = viewer.cesiumWidget.creditContainer as HTMLStyleElement
  logoHtml.style.display = 'none' // 隐藏logo
  // viewer.scene.skyAtmosphere.show=false;    // 关闭大气层
  viewer.scene.globe.depthTestAgainstTerrain = true // 地面以下不可见（高程遮挡）
  // viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);

  // // 不能远近变化  下一步鉴定范围
  // viewer.scene.screenSpaceCameraController.enableZoom = false;
  // viewer.scene.screenSpaceCameraController.enableTilt = false; //航向

  // setTimeout(() => {
  //     // viewer.render()
  //   image.value = viewer.scene.canvas.toDataURL('image/png')
  // }, 5000);

  store.commit("EngineScene/setCesiumGlobleCanvas",viewer);

}
onMounted(getViewer)

// // 停止;
// Cesium.Ion.defaultAccessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YWVjNGJlZC05MjEzLTRlNDEtYjcwYy05NzY2NmJiMzBjNGQiLCJpZCI6MTExODcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTgzNzQ5MTV9.0jiPX8lzZIYzTd-tzeNju0hOFnBmMyxiPtxSeXaA8s0";
</script>
