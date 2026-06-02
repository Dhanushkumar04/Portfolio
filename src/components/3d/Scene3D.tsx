import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import FloatingIcon from './FloatingIcon';

// Smooth interactive mouse camera parallax controller
const CameraRig = () => {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    // Interpolate camera position based on mouse coordinates for dynamic 3D depth
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 65 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
          
          {/* Floating 3D Icons pushed wider and deeper to avoid overlapping foreground text */}
          <FloatingIcon
            position={[-5.8, 1.8, -2.5]}
            color="#8b5cf6"
            geometry="box"
            speed={1.0}
          />
          <FloatingIcon
            position={[5.8, -1.2, -1.8]}
            color="#06b6d4"
            geometry="sphere"
            speed={0.7}
          />
          <FloatingIcon
            position={[4.8, 2.8, -3.2]}
            color="#ec4899"
            geometry="torus"
            speed={1.2}
          />
          <FloatingIcon
            position={[-4.8, -2.2, -2.0]}
            color="#f97316"
            geometry="cone"
            speed={0.9}
          />
          <FloatingIcon
            position={[-2.5, 3.8, -4.5]}
            color="#8b5cf6"
            geometry="sphere"
            speed={0.8}
          />
          
          <Environment preset="city" />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;