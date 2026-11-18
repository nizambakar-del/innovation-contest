"use client";

import { ContactShadows, Environment, Float, Lightformer, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";

function GoldMaterial({ dark = false }: { dark?: boolean }) {
  return (
    <meshPhysicalMaterial
      color={dark ? "#b8924a" : "#f0d59a"}
      metalness={1}
      roughness={dark ? 0.32 : 0.2}
      clearcoat={0.45}
      clearcoatRoughness={0.22}
      reflectivity={1}
      envMapIntensity={1.35}
    />
  );
}

function TrophyMesh() {
  const cup = useMemo(
    () => [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.18, 0.0),
      new THREE.Vector2(0.22, 0.08),
      new THREE.Vector2(0.34, 0.28),
      new THREE.Vector2(0.48, 0.58),
      new THREE.Vector2(0.5, 0.78),
      new THREE.Vector2(0.42, 0.92),
      new THREE.Vector2(0.52, 1.0),
      new THREE.Vector2(0.52, 1.06),
    ],
    [],
  );

  return (
    <group position={[0.2, -1.05, 0]}>
      <mesh position={[0, 0.06, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.76, 0.11, 64]} />
        <GoldMaterial dark />
      </mesh>
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.5, 0.58, 0.1, 64]} />
        <GoldMaterial />
      </mesh>
      <mesh position={[0, 0.58, 0]}>
        <cylinderGeometry args={[0.065, 0.09, 0.68, 32]} />
        <GoldMaterial />
      </mesh>
      <mesh position={[0, 0.94, 0]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <GoldMaterial />
      </mesh>
      <mesh position={[0, 1.08, 0]} castShadow>
        <latheGeometry args={[cup, 96]} />
        <GoldMaterial />
      </mesh>
      <mesh position={[0, 2.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.3, 48]} />
        <meshStandardMaterial color="#24180c" metalness={0.5} roughness={0.4} />
      </mesh>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 0.5, 1.62, 0]} rotation={[0, side > 0 ? 0 : Math.PI, 0]}>
          <torusGeometry args={[0.22, 0.026, 16, 40, Math.PI]} />
          <GoldMaterial />
        </mesh>
      ))}
    </group>
  );
}

function GeometryField() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x += delta * 0.015;
  });

  return (
    <group ref={group} position={[0, 0.2, -2.2]} scale={0.55}>
      <mesh>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshBasicMaterial color="#bf00ff" wireframe transparent opacity={0.38} />
      </mesh>
      <mesh rotation={[0.5, 0.2, 0]}>
        <torusGeometry args={[1.45, 0.008, 12, 90]} />
        <meshBasicMaterial color="#d6b56d" transparent opacity={0.85} />
      </mesh>
      <mesh rotation={[1.1, 0.5, 0.2]}>
        <torusGeometry args={[1.8, 0.005, 12, 90]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function unit(index: number) {
  const value = Math.sin(index * 127.1) * 43758.5453;
  return value - Math.floor(value);
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 220;
    const array = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      array[index * 3] = (unit(index + 1) - 0.5) * 9;
      array[index * 3 + 1] = (unit(index + 19) - 0.5) * 6;
      array[index * 3 + 2] = (unit(index + 47) - 0.5) * 5;
    }
    return array;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#f0e2bc" size={0.018} sizeAttenuation transparent opacity={0.75} depthWrite={false} />
    </points>
  );
}

function Scene({ pointer }: { pointer: MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;
    const targetY = pointer.current.x * 0.35;
    const targetX = pointer.current.y * -0.12;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.35, 6.3]} fov={30} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[3.5, 4.5, 4]} intensity={3.4} color="#fff8ea" />
      <directionalLight position={[-3, 2, 2]} intensity={1.6} color="#e7c98a" />
      <directionalLight position={[2, 1, -3]} intensity={2.2} color="#bf00ff" />
      <spotLight position={[0.4, 3.2, 3.4]} angle={0.5} penumbra={0.85} intensity={28} color="#fff1cc" />
      <Particles />
      <GeometryField />
      <group ref={group} position={[-0.18, 0.05, 0]}>
        <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}>
          <TrophyMesh />
        </Float>
      </group>
      <ContactShadows position={[0, -1.15, 0]} opacity={0.4} scale={6} blur={2.4} far={2.8} color="#000000" />
      <Environment resolution={256}>
        <Lightformer intensity={4} color="#ffffff" position={[0, 3, 3]} scale={[8, 3, 1]} />
        <Lightformer intensity={8} color="#f0d48a" position={[-4, 1, 2]} scale={[3, 4, 1]} />
        <Lightformer intensity={6} color="#c084fc" position={[4, 0.4, -2]} scale={[3, 5, 1]} />
        <Lightformer intensity={2} color="#ffffff" position={[0, -2, 3]} scale={[8, 1, 1]} />
      </Environment>
    </>
  );
}

export default function TrophyScene({
  pointer,
}: {
  pointer: MutableRefObject<{ x: number; y: number }>;
}) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.toneMappingExposure = 1.45;
      }}
    >
      <Suspense fallback={null}>
        <Scene pointer={pointer} />
      </Suspense>
    </Canvas>
  );
}
