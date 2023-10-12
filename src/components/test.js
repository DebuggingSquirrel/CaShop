import { Physics } from "@react-three/cannon";
import { ForestMap } from "../assets/data/ForestMap";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Test = () => {
  return (
    <Canvas>
      <Suspense>
        <Physics>
          <ForestMap />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Test;
