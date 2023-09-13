import { MeshDistortMaterial, OrbitControls, Sphere,Preload, Text} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import Loader from "./Loader";

const Stars = () => {
  return (
    <div className="container-fluid">
        <Canvas>
          <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <Sphere args={[1,100,200]} scale={2.7} >
              <MeshDistortMaterial color='#0055ff' attach='material' distort={0.5} speed={2} />    
              <Text fontSize={0.3} position={[0,0,1]}>Get to you soon</Text>
            </Sphere>
          </Suspense>
          <Preload all />
        </Canvas>
    </div>
        
  )
}

export default Stars
