

<template>

<div class="CBScence_cesiumContainer">
  <div class="CBScence_cesiumContainer" :ref="cesiumRefFn"></div>
</div>
</template>



<style scoped>
.CBScence_cesiumContainer {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
</style>


<script setup lang="ts">
import { ref, reactive, onMounted, onActivated, Ref } from "vue";
import * as Cesium from "cesium";
// defineProps<{ msg: string }>()
// const count = ref(0);
let cesiumRef: any;
let viewer;
const cesiumRefFn = (el: any) => {
  cesiumRef = el;
};

const getViewer = async () => {
  viewer = new Cesium.Viewer(cesiumRef, {
    // animation: false,
    // baseLayerPicker: false,
    // geocoder: false,
    // timeline: false,
    // sceneModePicker: false,
    // navigationHelpButton: false,
    // infoBox: false,
    // orderIndependentTranslucency: false,
    // homeButton: false,
    // fullscreenButton: false,
    // vrButton: false,
    // // skyBox: false,
    // // selectionIndicator:false    // 是否可以选中
    // contextOptions: {
    //   webgl: {
    //     alpha: true
    //   }
    // }
  });
  let logoHtml = viewer.cesiumWidget.creditContainer as HTMLStyleElement;
  logoHtml.style.display = "none"; // 隐藏logo
  // viewer.scene.skyAtmosphere.show=false;    // 关闭大气层
  viewer.scene.globe.depthTestAgainstTerrain = true; // 地面以下不可见（高程遮挡）
  // viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);

  // // 不能远近变化  下一步鉴定范围
  // viewer.scene.screenSpaceCameraController.enableZoom = false;
  // viewer.scene.screenSpaceCameraController.enableTilt = false; //航向
};
onMounted(getViewer);
// // 停止;
// Cesium.Ion.defaultAccessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YWVjNGJlZC05MjEzLTRlNDEtYjcwYy05NzY2NmJiMzBjNGQiLCJpZCI6MTExODcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTgzNzQ5MTV9.0jiPX8lzZIYzTd-tzeNju0hOFnBmMyxiPtxSeXaA8s0";
</script>
