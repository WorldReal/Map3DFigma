<!-- 引擎和场景切换器 全局设置 -->
<template>
  <div style="color: white">
    <br />
    <div>添加删除数据</div>
    <input type="checkbox" @change="changeClick" v-model="hobby2" value="局部精模" />局部精模
    <!-- <button @click="setAllSceneUp('CesiumGloble')"> 设置视角</button> -->
    <br />
    <input type="checkbox" @change="changeClick" v-model="hobby2" value="全球简模" />全球简模
    <br />
    <input type="checkbox" @change="changeClick" v-model="hobby2" value="全球地形" />全球地形
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
let viewer:any
// let image = ref('')
let hobby2 = ref([])
let tilesJingMo: Cesium.Cesium3DTileset | null, tilesSimpleModel: Cesium.Cesium3DTileset | null

let changeClick = () => {
  viewer = store.state.EngineScene.CesiumGlobleObj.viewer


  console.log(hobby2.value)
  let valueArray = hobby2.value as Array<number | string>
  debugger
  if (valueArray.includes('局部精模')) {
    if(!tilesJingMo)tilesJingMo = addTest3dtilesJingMo()
  } else if (tilesJingMo) {
    viewer.scene.primitives.remove(tilesJingMo)
    tilesJingMo = null
  }

  if (valueArray.includes('全球简模')) {
    if(!tilesSimpleModel)tilesSimpleModel = addTest3dtilesSimpleModel()
  } else if (tilesSimpleModel) {
    viewer.scene.primitives.remove(tilesSimpleModel)
    tilesSimpleModel = null
  }

  if (valueArray.includes('全球地形')) {
    if(!viewer.terrainProvider._ready)addTestTerrain()
  } else if (viewer.terrainProvider._ready) {
    viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider({})

  }
}


// **************************************

let addTest3dtilesJingMo = () => {
  let tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(354759), 
      maximumScreenSpaceError: 2, //最大的屏幕空间误差
      show: !false,
    })
  )
  viewer.scene.globe.depthTestAgainstTerrain = true
  let param = {
    h: 1567.9855743901433,
    heading: 21.98044650951645,
    lat: 42.3534417026535,
    lon: -71.05980083549828,
    pitch: -77.75571355232125,
    roll: 0.34294193787960303,
    x: 1532606.6091789035,
    y: -4466150.142919737,
    z: 4275754.210693352,
  }
  // cameraSetViewGraphic(param, viewer)
  cameraFlyTo(param, viewer)
  return tileset
}
let addTest3dtilesSimpleModel = () => {
  let tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(96188), //TODO node爬一个
      maximumScreenSpaceError: 2, //最大的屏幕空间误差
      show: !false,
    })
  )
  viewer.scene.globe.depthTestAgainstTerrain = true
  return tileset
}
let addTestTerrain = () => {
  viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask: true, // required for water effects
    // requestVertexNormals: true, // required for terrain lighting
  })
}

// 设置视角
function cameraSetViewGraphic(params: any, viewer: any) {
  viewer.camera.setView({

    destination: Cesium.Cartesian3.fromDegrees(params.lon, params.lat, params.h),
    orientation: {
      heading: Cesium.Math.toRadians(params.heading),
      pitch: Cesium.Math.toRadians(params.pitch),
      roll: Cesium.Math.toRadians(params.roll),
    },
  });
}
function cameraFlyTo(params: any, viewer: any) {
    viewer.camera.flyTo({
      // duration:10,
      // cancel:()=>{console.log("中断")},
      destination: Cesium.Cartesian3.fromDegrees(params.lon, params.lat, params.h),
      orientation: {
        heading: Cesium.Math.toRadians(params.heading),
        pitch: Cesium.Math.toRadians(params.pitch),
        roll: Cesium.Math.toRadians(params.roll),
      },
    });
  }
</script>
<style scoped>
</style>