import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Cube } from './components';

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 2],
        fov: 75,
        aspect: 2,
        near: 0.1,
        far: 5,
      }}
    >
      <Suspense fallback={null}>
        <Cube />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}