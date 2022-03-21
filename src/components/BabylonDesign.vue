
<template>
  <div class="BabylonCanvas">
    <canvas class="BabylonCanvas" :ref="bjsCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
// https://doc.cnbabylon.com/3-0-how-to-get-babylon-js/
import { ref, reactive, onMounted } from "vue";
// import {Engine,Scene,ArcRotateCamera,Vector3,HemisphericLight,PointLight,MeshBuilder} from 'babylonjs';
import * as BABYLON from "babylonjs";
const store = useStore();

let canvas: any;
const bjsCanvas = (el: any) => {
  canvas = el;
};
const getViewer = async () => {
  // Get the canvas DOM element
  // const bjsCanvas = ref<HTMLCanvasElement | null>(null);
  // Load the 3D engine // 初始化 BABYLON 3D engine
  let engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true
  });
  /******* CreateScene function that creates and return the scene ******/

  let createScene = () => {
    // Create a basic BJS Scene object 创建一个场景scene
    let scene = new BABYLON.Scene(engine);
    // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}  添加一个相机，并绑定鼠标事件
    let camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 5, -10),
      scene
    );
    // Target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // Attach the camera to the canvas
    camera.attachControl(canvas, false);
    // Create a basic light, aiming 0, 1, 0 - meaning, to the sky 添加一组灯光到场景
    let light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    let light2 = new BABYLON.PointLight(
      "light2",
      new BABYLON.Vector3(0, 1, -1),
      scene
    );
    //添加一个球体到场景中
    // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
    let sphere = BABYLON.Mesh.CreateSphere(
      "sphere1",
      16,
      2,
      scene,
      false,
      BABYLON.Mesh.FRONTSIDE
    );
    // Move the sphere upward 1/2 of its height
    sphere.position.y = 1;
    // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
    let ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene, false);
    // Return the created scene
    return scene;
  };
  // call the createScene function
  let scene = createScene();
  // run the render loop 最后一步调用engine的runRenderLoop方案，执行scene.render()，让我们的3d场景渲染起来
  engine.runRenderLoop(function () {
    scene.render();
  });
  // the canvas/window resize event handler 监听浏览器改变大小的事件，通过调用engine.resize()来自适应窗口大小
  window.addEventListener("resize", function () {
    engine.resize();
  });

  const BabylonDesignObj = {
    canvas: canvas,
    engine: engine,
    scene: scene
  };
  store.commit("EngineScene/setBabylonDesignObj", BabylonDesignObj);
};

onMounted(getViewer);
</script>

<style scoped>
.BabylonCanvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

/* .CVS1 { */
/* //穿透该层 */
/* pointer-events: none; */
/* //恢复点击处理 */
/* pointer-events:auto; */
/* } */
</style>
