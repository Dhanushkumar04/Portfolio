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
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.006 * speed;
    }
  });

  // Render highly specific premium geometries representing Dhanush's actual skill sets
  const renderSkillMesh = () => {
    switch (geometry) {
      case 'box': // Stacked Code Plates representing Full-Stack Web Building
        return (
          <group>
            {/* Top Plate */}
            <mesh position={[0, 0.35, 0]}>
              <boxGeometry args={[1.3, 0.06, 0.8]} />
              <meshStandardMaterial
                color={color}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.65}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </mesh>
            {/* Middle Plate */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.3, 0.06, 0.8]} />
              <meshStandardMaterial
                color={color}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.4}
                emissive={color}
                emissiveIntensity={0.1}
              />
            </mesh>
            {/* Bottom Plate */}
            <mesh position={[0, -0.35, 0]}>
              <boxGeometry args={[1.3, 0.06, 0.8]} />
              <meshStandardMaterial
                color={color}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.75}
                emissive={color}
                emissiveIntensity={0.3}
              />
            </mesh>
          </group>
        );

      case 'sphere': // Overlapping Glass UI Panels representing UI/UX Design
        return (
          <group>
            {/* Background Canvas Panel */}
            <mesh position={[-0.2, 0.1, -0.1]}>
              <boxGeometry args={[1.1, 0.75, 0.05]} />
              <meshStandardMaterial
                color={color}
                metalness={0.7}
                roughness={0.1}
                transparent
                opacity={0.6}
                emissive={color}
                emissiveIntensity={0.1}
              />
            </mesh>
            {/* Overlay Dialogue Panel */}
            <mesh position={[0.2, -0.2, 0.15]}>
              <boxGeometry args={[0.7, 0.5, 0.05]} />
              <meshStandardMaterial
                color="#ec4899"
                metalness={0.8}
                roughness={0.1}
                transparent
                opacity={0.7}
                emissive="#ec4899"
                emissiveIntensity={0.2}
              />
            </mesh>
          </group>
        );

      case 'torus': // Three-Dimensional Bar Chart representing Data Analytics
        return (
          <group>
            {/* Column 1 (Left) */}
            <mesh position={[-0.4, -0.25, 0]}>
              <boxGeometry args={[0.22, 0.5, 0.22]} />
              <meshStandardMaterial
                color={color}
                metalness={0.8}
                roughness={0.15}
                emissive={color}
                emissiveIntensity={0.1}
              />
            </mesh>
            {/* Column 2 (Middle) */}
            <mesh position={[0, 0.05, 0]}>
              <boxGeometry args={[0.22, 1.1, 0.22]} />
              <meshStandardMaterial
                color="#06b6d4"
                metalness={0.8}
                roughness={0.15}
                emissive="#06b6d4"
                emissiveIntensity={0.2}
              />
            </mesh>
            {/* Column 3 (Right) */}
            <mesh position={[0.4, -0.1, 0]}>
              <boxGeometry args={[0.22, 0.8, 0.22]} />
              <meshStandardMaterial
                color="#f97316"
                metalness={0.8}
                roughness={0.15}
                emissive="#f97316"
                emissiveIntensity={0.15}
              />
            </mesh>
          </group>
        );

      case 'cone': // Central Nucleus & Outer Planetary Orbit representing AI & Machine Learning
        return (
          <group>
            {/* Core glowing AI Node */}
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.4, 32, 32]} />
              <meshStandardMaterial
                color={color}
                metalness={0.9}
                roughness={0.05}
                emissive={color}
                emissiveIntensity={0.6}
              />
            </mesh>
            {/* Connected orbiting sensor path */}
            <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
              <torusGeometry args={[0.85, 0.04, 16, 100]} />
              <meshStandardMaterial
                color="#a78bfa"
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.8}
                emissive="#a78bfa"
                emissiveIntensity={0.3}
              />
            </mesh>
          </group>
        );

      default:
        return (
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
          </mesh>
        );
    }
  };

  return (
    <Float
      speed={speed}
      rotationIntensity={0.8}
      floatIntensity={1.4}
      floatingRange={[1, 1.5]}
    >
      <group ref={meshRef} position={position}>
        {renderSkillMesh()}
      </group>
    </Float>
  );
};

export default FloatingIcon;