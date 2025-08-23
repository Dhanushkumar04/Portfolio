import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import FloatingIcon from './FloatingIcon';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
          
          {/* Floating 3D Icons */}
          <FloatingIcon
            position={[-4, 2, 0]}
            color="#8b5cf6"
            geometry="box"
            speed={1.2}
          />
          <FloatingIcon
            position={[4, -1, 2]}
            color="#06b6d4"
            geometry="sphere"
            speed={0.8}
          />
          <FloatingIcon
            position={[2, 3, -1]}
            color="#ec4899"
            geometry="torus"
            speed={1.5}
          />
          <FloatingIcon
            position={[-3, -2, 1]}
            color="#f97316"
            geometry="cone"
            speed={1}
          />
          <FloatingIcon
            position={[0, 1, -3]}
            color="#8b5cf6"
            geometry="sphere"
            speed={0.9}
          />
          
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;