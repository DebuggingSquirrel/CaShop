import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { TextureLoader, MeshBasicMaterial } from "three";
import * as THREE from "three";
import useEmoji from "../../hooks/Emoji/useEmoji";
import test from "../../assets/image/test.jpg";

export function Model(props) {
  const group = useRef();
  const { cutImg } = useEmoji();
  const { nodes, materials, animations } = useGLTF("/newCharacter.gltf");
  const { actions } = useAnimations(animations, group);

  // 변경된 초기 위치
  const [position, setPosition] = useState([0, 0, 0]); // 원하는 초기 위치로 수정

  const [rotation, setRotation] = useState([Math.PI / 2, 0, 0]);

  const moveSpeed = 0.1;
  const rotationSpeed = 0.02;

  const faceTexture = new TextureLoader().load(test);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const moveDirection = new THREE.Vector3();
      switch (event.key) {
        case "ArrowUp":
          moveDirection.set(-Math.sin(rotation[1]), 0, -Math.cos(rotation[1]));
          break;
        case "ArrowDown":
          moveDirection.set(Math.sin(rotation[1]), 0, Math.cos(rotation[1]));
          break;
        case "ArrowLeft":
          moveDirection.set(-Math.cos(rotation[1]), 0, Math.sin(rotation[1]));
          break;
        case "ArrowRight":
          moveDirection.set(Math.cos(rotation[1]), 0, -Math.sin(rotation[1]));
          break;
        default:
          break;
      }

      setPosition((prevPos) => [
        prevPos[0] + moveSpeed * moveDirection.x,
        prevPos[1] + moveSpeed * moveDirection.y,
        prevPos[2] + moveSpeed * moveDirection.z,
      ]);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, rotation]);

  if (nodes.Base_Cube) {
    nodes.Base_Cube.material = new MeshBasicMaterial({ map: faceTexture });
  }
  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      {...props}
      dispose={null}
    >
      <group name="Scene" position={[23, 1.5, -1.5]}>
        <group
          name="Armature"
          rotation={[Math.PI / 0.02, 0, 1.6]}
          scale={0.4}
          position={[0, 0, -0]}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Base_Cube"
            geometry={nodes.Base_Cube.geometry}
            material={nodes.Base_Cube.material}
            skeleton={nodes.Base_Cube.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/newCharacter.gltf");
