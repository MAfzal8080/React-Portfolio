import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./Loader";

const Computer = () => {
  const computer = useGLTF("desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3.0} groundColor="blue" />
      <pointLight intensity={1.5} />
      <ambientLight intensity={1.5} />
      <spotLight position={[-10, 10, 20]} angle={0.5} penumbra={1} intensity={2} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={1.5} position={[0, -3.25, -3.0]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{position: [25, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={<Loader />}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Computer />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas;
