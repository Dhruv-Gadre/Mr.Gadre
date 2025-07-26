import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere visible args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial color="#082C72" attach="material" distort={0.5} speed={2} />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
