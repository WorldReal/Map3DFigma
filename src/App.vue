<template>
  <!-- <img width="50px" alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->

  <!-- <RectangleCreatorDemo /> -->

  <!-- <TemplateVue /> -->
  <!-- 左侧控制栏 -->
  <!-- <SideBar /> -->
  <!-- 默认加载动图 -->

  <!-- 底图 z0-->
  <CesiumGloble style="z-index: 1" />
  <BabylonDesign style="z-index: 0" />

  <!-- 左侧控制栏 z1x0-->
  <LeftControl style="z-index: 2" />
  <TestControl_________TO________DELETE style="z-index: 999999" />
</template>

<script setup lang="ts">
// import TemplateVue from "./components/CesiumIndex/Template.vue";
// import SideBar from "./components/CesiumIndex/SideBar.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import RectangleCreatorDemo from "./components/RectangleCreatorDemo.vue";
import CesiumGloble from "./components/CesiumGloble.vue";
import BabylonDesign from "./components/BabylonDesign.vue";
import LeftControl from "./components/LeftControl.vue";
import TestControl_________TO________DELETE from "./components/TestControl_________TO________DELETE.vue";
</script>

<style>
html,
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>
