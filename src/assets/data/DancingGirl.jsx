import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Balloon = ({ position, text }) => {
  const balloonRef = useRef();
  const [visible, setVisible] = useState(true);

  useFrame(() => {
    balloonRef.current.lookAt(balloonRef.current.position.clone().addScalar(1));
  });

  return (
    <group>
      <mesh ref={balloonRef} position={position}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
      {visible && (
        <Html position={position}>
          <div
            style={{
              width: "200px",
              padding: "10px",
              background: "#fff",
              textAlign: "center",
              color: "#000",
            }}
          >
            <p>{text}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

export function ModelDancing(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/DancingGirl.gltf");
  const { actions } = useAnimations(animations, group);

  const startAnimation = () => {
    if (actions["Armature|mixamo.com|Layer0"]) {
      actions["Armature|mixamo.com|Layer0"].play();
    }
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, 4.5]}
          scale={0.08}
          position={[1.28, 5.8, 4.984]}
          onClick={startAnimation}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch46"
            geometry={nodes.Ch46.geometry}
            material={materials.Ch46_body}
            skeleton={nodes.Ch46.skeleton}
          />
        </group>
      </group>

      <Balloon
        position={[1.28, 17.8, 3.984]}
        text="자유의 여신상이라고 아니?"
      />
    </group>
  );
}

useGLTF.preload("/DancingGirl.gltf");
