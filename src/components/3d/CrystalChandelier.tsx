import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function CrystalPiece({ position, scale = 1, rotation = [0, 0, 0] }: { 
  position: [number, number, number]; 
  scale?: number;
  rotation?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + rotation[1];
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[0.15, 0]} />
      <meshPhysicalMaterial
        color="#f5f7fa"
        metalness={0.1}
        roughness={0.05}
        transmission={0.9}
        thickness={0.5}
        envMapIntensity={3}
        clearcoat={1}
        clearcoatRoughness={0.1}
        ior={2.4}
      />
    </mesh>
  );
}

function GoldRing({ radius, y, crystalCount }: { radius: number; y: number; crystalCount: number }) {
  const crystals = useMemo(() => {
    return Array.from({ length: crystalCount }).map((_, i) => {
      const angle = (i / crystalCount) * Math.PI * 2;
      return {
        position: [
          Math.cos(angle) * radius,
          y + Math.random() * 0.2 - 0.1,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale: 0.8 + Math.random() * 0.4,
        rotation: [0, angle, 0] as [number, number, number],
      };
    });
  }, [radius, y, crystalCount]);

  return (
    <group>
      {/* Gold ring */}
      <mesh position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#C9A24D"
          metalness={0.9}
          roughness={0.2}
          emissive="#C9A24D"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Hanging crystals */}
      {crystals.map((crystal, i) => (
        <CrystalPiece key={i} {...crystal} />
      ))}
    </group>
  );
}

function ChandelierModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Center column */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
          <meshStandardMaterial
            color="#C9A24D"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>

        {/* Top crown */}
        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[0.2, 0.15, 8]} />
          <meshStandardMaterial
            color="#C9A24D"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>

        {/* Crystal rings */}
        <GoldRing radius={1.2} y={0.8} crystalCount={16} />
        <GoldRing radius={0.9} y={0.4} crystalCount={12} />
        <GoldRing radius={0.6} y={0} crystalCount={8} />
        <GoldRing radius={0.3} y={-0.4} crystalCount={6} />

        {/* Center crystal drop */}
        <mesh position={[0, -0.8, 0]}>
          <coneGeometry args={[0.1, 0.4, 6]} />
          <meshPhysicalMaterial
            color="#f5f7fa"
            metalness={0.1}
            roughness={0.05}
            transmission={0.95}
            thickness={0.3}
            envMapIntensity={3}
            ior={2.4}
          />
        </mesh>
      </group>
    </Float>
  );
}

export const CrystalChandelier = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0B0B0E']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#f5f7fa"
        />
        <spotLight
          position={[-5, 5, -5]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          color="#C9A24D"
        />
        <pointLight position={[0, 3, 0]} intensity={1} color="#f5f7fa" />
        
        {/* Chandelier */}
        <ChandelierModel />
        
        {/* Sparkles for magic effect */}
        <Sparkles
          count={50}
          scale={4}
          size={2}
          speed={0.3}
          color="#C9A24D"
          opacity={0.5}
        />
        
        {/* Environment for reflections */}
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};
