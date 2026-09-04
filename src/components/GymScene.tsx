import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";

function Dumbbell() {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.25}
      floatIntensity={0.4}
    >
      <group
        rotation={[0.2, 0.15, 1.1]}
        scale={1.35}
      >
        {/* Handle */}
        <mesh>
          <cylinderGeometry
            args={[0.12, 0.12, 4.6, 32]}
          />

          <meshStandardMaterial
            color="#D9D9D9"
            metalness={1}
            roughness={0.15}
          />
        </mesh>

        {/* LEFT INNER PLATE */}
        <mesh position={[0, -1.75, 0]}>
          <cylinderGeometry
            args={[0.72, 0.72, 0.5, 32]}
          />

          <meshStandardMaterial
            color="#1A0706"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        {/* LEFT RED PLATE */}
        <mesh position={[0, -2.15, 0]}>
          <cylinderGeometry
            args={[1.05, 1.05, 0.4, 32]}
          />

          <meshStandardMaterial
            color="#DD0200"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>

        {/* RIGHT INNER PLATE */}
        <mesh position={[0, 1.75, 0]}>
          <cylinderGeometry
            args={[0.72, 0.72, 0.5, 32]}
          />

          <meshStandardMaterial
            color="#1A0706"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        {/* RIGHT RED PLATE */}
        <mesh position={[0, 2.15, 0]}>
          <cylinderGeometry
            args={[1.05, 1.05, 0.4, 32]}
          />

          <meshStandardMaterial
            color="#DD0200"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={3}
      />

      <pointLight
        position={[4, 3, 4]}
        color="#DD0200"
        intensity={35}
      />

      <pointLight
        position={[-4, -1, 2]}
        color="#55100D"
        intensity={25}
      />

      <spotLight
        position={[0, 6, 5]}
        color="#D9D9D9"
        intensity={25}
        angle={0.35}
        penumbra={1}
      />

      <Dumbbell />

      <Environment preset="warehouse" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.05}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </>
  );
}

export default function GymScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8.5],
        fov: 42,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Scene />
    </Canvas>
  );
}