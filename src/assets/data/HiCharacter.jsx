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

export function ModelHi({ text, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/HiCharacter.gltf");
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
          rotation={[Math.PI / 2, 0, 5]}
          scale={0.03}
          position={[14.28, 1.5, -3.984]}
          onClick={startAnimation}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch14"
            geometry={nodes.Ch14.geometry}
            material={materials.Ch14_Body}
            skeleton={nodes.Ch14.skeleton}
          />
        </group>
      </group>

      <Balloon position={[20.28, 6, -3.984]} text={text} />
    </group>
  );
}

useGLTF.preload("/HiCharacter.gltf");
