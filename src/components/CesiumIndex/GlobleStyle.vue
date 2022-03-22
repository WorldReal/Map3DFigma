<!-- 引擎和场景切换器 全局设置 -->
<template>
  <div style="color: white">
    <br />
    <div>globle效果</div>
    <input type="checkbox" @change="changeClick" v-model="hobby2" value="散射渲染" />散射渲染
    <!-- <button @click="setAllSceneUp('CesiumGloble')"> 设置视角</button> -->
    <!-- <div>你已选中：{{hobby2}}</div> -->
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, onBeforeMount, onMounted } from 'vue'
//开始创建组件
import { useStore } from 'vuex'
import * as Cesium from "cesium"
const store = useStore()

// 获取cesium场景
let viewer: any
// let image = ref('')
let hobby2 = ref([])
let globePostProcessStage: Cesium.PostProcessStage | null

let changeClick = () => {
  viewer = store.state.EngineScene.CesiumGlobleObj.viewer


  console.log(hobby2.value)
  let valueArray = hobby2.value as Array<number | string>
  debugger
  if (valueArray.includes('散射渲染')) {
    if (!globePostProcessStage) globePostProcessStage = addTest3dglobePostProcessStage()
  } else if (globePostProcessStage) {
     viewer.scene.postProcessStages.remove(globePostProcessStage)
    globePostProcessStage = null
  }


}


// **************************************

let addTest3dglobePostProcessStage = () => {
  const viewModel = {
    show: true,
    intensity: 10,
    distortion: 20.0,
    dispersion: 0.9,
    haloWidth: 0.4,
    dirtAmount: 0.8,
  };
  const lensFlare = viewer.scene.postProcessStages.add(
    Cesium.PostProcessStageLibrary.createLensFlareStage()
  );
  lensFlare.enabled = Boolean(viewModel.show);
  lensFlare.uniforms.intensity = Number(viewModel.intensity);
  lensFlare.uniforms.distortion = Number(viewModel.distortion);
  lensFlare.uniforms.ghostDispersal = Number(viewModel.dispersion);
  lensFlare.uniforms.haloWidth = Number(viewModel.haloWidth);
  lensFlare.uniforms.dirtAmount = Number(viewModel.dirtAmount);
  lensFlare.uniforms.earthRadius = Cesium.Ellipsoid.WGS84.maximumRadius;

  const camera = viewer.scene.camera;
  camera.position = new Cesium.Cartesian3(
    40010447.97500168,
    56238683.46406788,
    20776576.752223067
  );
  camera.direction = new Cesium.Cartesian3(
    -0.5549701431494752,
    -0.7801872010801355,
    -0.2886452346452218
  );
  camera.up = new Cesium.Cartesian3(
    -0.3016252360948521,
    -0.13464820558887716,
    0.9438707950150912
  );
  camera.right = Cesium.Cartesian3.cross(
    camera.direction,
    camera.up,
    new Cesium.Cartesian3()
  );

  viewer.clock.currentTime = new Cesium.JulianDate(
    2458047,
    27399.860215000022
  );

  return lensFlare
}

</script>
<style scoped>
</style>