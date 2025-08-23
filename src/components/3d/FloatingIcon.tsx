import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  color: string;
  geometry: 'box' | 'sphere' | 'torus' | 'cone';
  speed?: number;
}

const FloatingIcon = ({ position, color, geometry, speed = 1 }: FloatingIconProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.7, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.7, 0.3, 16, 100]} />;
      case 'cone':
        return <coneGeometry args={[0.7, 1.4, 8]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <Float
      speed={speed}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[1, 1.5]}
    >
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

export default FloatingIcon;