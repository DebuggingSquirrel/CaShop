import { useEffect, useRef } from "react";
import { extend, Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ForestMap2 } from "../../assets/data/ForestMap2";
import { Physics } from "@react-three/cannon";
import React, { Suspense } from "react";
import { DirectionalLight } from "three";

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
      dampingFactor={2.0} // 카메라 움직임의 감쇄를 조절
      rotateSpeed={0.3} // 마우스 왼쪽 버튼을 클릭하고 드래그할 때 화면 회전 속도
      panSpeed={5} // 마우스 오른쪽 버튼을 드래그하여 화면을 패닝(이동)할 때의 속도
      zoomSpeed={1} // 마우스 휠로 화면 확대/축소
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

const MapingPage = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <directionalLight intensity={2} position={[1, 20, 5]} />
      <CameraSetup />
      <Suspense fallback={null}>
        <Physics>
          <ForestMap2 />
        </Physics>
        <Controls />
      </Suspense>
    </Canvas>
  );
};

export default MapingPage;
