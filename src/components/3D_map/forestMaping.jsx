import { useEffect, useRef, useState } from "react";
import { extend, Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { Physics } from "@react-three/cannon";
import React from "react";
import { ForestMap2 } from "../../assets/data/ForestMap2";
import * as THREE from "three";
import test from "../../assets/image/test.jpg";
import { ModelHi } from "../../assets/data/HiCharacter";
import { ModelDancing } from "../../assets/data/DancingGirl";
import { Sky } from "@react-three/drei"; // Sky 추가

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      ref={orbitRef}
      args={[camera, gl.domElement]}
      enableZoom={true}
      dampingFactor={2.0}
      rotateSpeed={0.3}
      panSpeed={5}
      zoomSpeed={1}
    />
  );
};

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(30, 7, -2);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

function Character() {
  const [position, setPosition] = useState([19, 0, 0]);
  const moveSpeed = 0.1;

  const faceTexture = new THREE.TextureLoader().load(test);

  const handleKeyDown = (event) => {
    let x = position[0];
    let z = position[2];

    switch (event.key) {
      case "ArrowUp":
        z += moveSpeed;
        break;
      case "ArrowDown":
        z -= moveSpeed;
        break;
      case "ArrowLeft":
        x -= moveSpeed;
        break;
      case "ArrowRight":
        x += moveSpeed;
        break;
      default:
        break;
    }

    setPosition([x, 0, z]);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

  return (
    <group position={position} rotation={[0, Math.PI / 2, 0]}>
      {/* 머리 */}
      <mesh position={[0, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial map={faceTexture} />
      </mesh>

      {/* 몸통 */}
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshBasicMaterial color={0x336699} />
      </mesh>

      {/* 왼팔 */}
      <mesh position={[-1, 3, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>

      {/* 오른팔 */}
      <mesh position={[1, 3, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>

      {/* 왼다리 */}
      <mesh position={[-0.5, 1.5, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshBasicMaterial color={0x0000ff} />
      </mesh>

      {/* 오른다리 */}
      <mesh position={[0.5, 1.5, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshBasicMaterial color={0x0000ff} />
      </mesh>
    </group>
  );
}

const texts = [
  "3D 작품 그냥 폼미 ..",
  "하 하루만 시간이 더 있었다면 ..",
  "해커톤 재밌네요",
  "오늘도 열심히 코딩 중",
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

function App() {
  const [text, setText] = useState("...");
  const [showInput, setShowInput] = useState(false);

  const handleModelHiClick = () => {
    setText(getRandomText());

    setTimeout(() => {
      setText("...");
    }, 3000);
  };
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <directionalLight intensity={2} position={[-1, 10, 1]} />
      <CameraSetup />
      <Controls />
      <Physics>
        <Sky
          distance={10000}
          turbidity={50}
          rayleigh={0.075}
          mieCoefficient={0.02}
          mieDirectionalG={0.8}
          inclination={0.49}
          azimuth={0.25}
          sunPosition={[1, 0, 0]}
        />
        <ForestMap2 />
        <ModelDancing />
        <ModelHi text={text} onClick={handleModelHiClick} />
        <Character />
      </Physics>
    </Canvas>
  );
}

export default App;
