<template>
  <threejs-css3d @create="onCreate($event)">
    <threejs-css3d-el
      v-bind="{ x: 0, y: 0, z: 0, rx: Math.PI / 2, ry: 0, rz: 0 }"
      style="width: 1000px; height: 1000px; background: red"
    />
    <threejs-css3d-el
      v-bind="{ x: 0, y: 300, z: 0, rx: Math.PI / 2, ry: 0, rz: 0 }"
      style="width: 1000px; height: 1000px; background: red"
    />

    <threejs-css3d-el
      v-bind="{ x: 0, y: 150, z: 500, rx: 0, ry: Math.PI, rz: 0 }"
      style="width: 1000px; height: 300px; background: red"
    >
      <iframe
        src="https://www.youtube.com/embed/AlUlF52QBBs?si=btThvtG1tt6g1gRS"
        style="width: 100%; height: 100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </threejs-css3d-el>
    <threejs-css3d-el
      v-bind="{ x: 500, y: 150, z: 0, rx: 0, ry: Math.PI / 2, rz: 0 }"
      style="width: 1000px; height: 300px; background: green"
    >
      <div>Lado 2</div>
    </threejs-css3d-el>
    <threejs-css3d-el
      v-bind="{ x: 0, y: 150, z: -500, rx: 0, ry: 0, rz: 0 }"
      style="width: 1000px; height: 300px; background: blue"
    >
      <div>Lado 3</div>
    </threejs-css3d-el>
    <threejs-css3d-el
      v-bind="{ x: -500, y: 150, z: 0, rx: 0, ry: -Math.PI / 2, rz: 0 }"
      style="width: 1000px; height: 300px; background: yellow"
    >
      <div>Lado 4</div>
    </threejs-css3d-el>
  </threejs-css3d>

  <pre>theApp: {{ theApp }}</pre>
</template>

<script>
export default {
  meta: {
    icon: "mdi-numeric-1",
    name: "Three.js CSS3D",
  },
};
</script>

<script setup>
import * as THREE from "three";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

let theApp;

const onCreate = (app) => {
  theApp = app;

  app.input.front = ["w", "W"];
  app.input.back = ["s", "S"];
  app.input.left = ["a", "A"];
  app.input.right = ["d", "D"];

  app.camera.position.set(0, 170, 0);

  // app.on("create", () => {
  //   app.trackballControl = new TrackballControls(
  //     app.camera,
  //     app.renderer.domElement
  //   );
  //   app.trackballControl.rotateSpeed = 4;
  // });

  // app.on("update", () => {
  //   if (!app.trackballControl) return;
  //   app.trackballControl.update();
  // });

  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x00ff00),
  });
  material.opacity = 0;
  material.blending = THREE.NoBlending;
  material.side = THREE.DoubleSide;
  const obj = new THREE.Mesh(geometry, material);
  obj.position.set(100, 100, 100);
  app.scene.add(obj);
  console.log(obj, app.scene.children);

  app.on({
    create() {
      app.pointerLockControl = new PointerLockControls(
        app.camera,
        app.wrapperEl
      );
    },
    click() {
      app.pointerLockControl.lock();
    },
    update() {
      const moveSpeed = 5;

      if (app.key.front) {
        app.camera.translateZ(-moveSpeed);
      }
      if (app.key.back) {
        app.camera.translateZ(moveSpeed);
      }
      if (app.key.left) {
        app.camera.translateX(-moveSpeed);
      }
      if (app.key.right) {
        app.camera.translateX(moveSpeed);
      }
    },
  });
};
</script>
