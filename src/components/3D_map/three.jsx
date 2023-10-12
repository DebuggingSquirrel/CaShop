import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const MapingPage = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new GLTFLoader();

  let character;
  let map;

  loader.load("./data/newCharacter.gltf", (gltf) => {
    character = gltf.scene;
    scene.add(character);
  });

  loader.load("./data/forestMap.gltf", (gltf) => {
    map = gltf.scene;
    scene.add(map);
  });

  camera.position.z = 5;

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return null;
};

export default MapingPage;
