import { Canvas } from "@react-three/fiber";

import { Physics } from "@react-three/cannon";
import React, { Suspense } from "react";

// import Modal from "../../assets/data/NewCharacter";
import { Model } from "../../assets/data/NewCharacter";

const ModalMaping = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <Suspense>
        <Physics>
          <Model />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default ModalMaping;
