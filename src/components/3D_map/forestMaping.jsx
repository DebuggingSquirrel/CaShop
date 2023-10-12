import { useEffect, useRef } from "react";
import { extend, Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Physics, usePlane } from "@react-three/cannon";
import { Sky } from "@react-three/drei"; // Sky 추가
import React, { Suspense } from "react";
import { DirectionalLight } from "three";
import { Model } from "../../assets/data/NewCharacter";
import { ModelHi } from "../../assets/data/HiCharacter";
import { ModelDancing } from "../../assets/data/DancingGirl";
import { ForestMap2 } from "../../assets/data/ForestMap2";

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

const MapingPage = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <directionalLight intensity={2} position={[1, 20, 5]} />
      <CameraSetup />
      <Suspense fallback={null}>
        <Sky
          distance={4500}
          turbidity={100}
          rayleigh={0.075}
          mieCoefficient={0.02}
          mieDirectionalG={0.8}
          inclination={0.49}
          azimuth={0.25}
          sunPosition={[1, 0, 0]}
        />
        <Physics>
          <ModelDancing />
          <ModelHi />
          <Model />

          <ForestMap2 />
        </Physics>
        <Controls />
      </Suspense>
    </Canvas>
  );
};

export default MapingPage;
