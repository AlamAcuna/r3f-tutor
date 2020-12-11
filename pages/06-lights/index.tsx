import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Cube, Plane, Sphere } from './components';
import DirectionalLight from './lights/DirectionalLight';

export default function Scene() {
  // const { color, intensity } = useTweaks('Ambient Light', {
  //   intensity: { value: 1, min: 0, max: 2 },
  //   color: '#fff',
  // });

  // const { groundColor, skyColor, intensity } = useTweaks('Hemisphere Light', {
  //   intensity: { value: 1, min: 0, max: 2 },
  //   groundColor: '#b97a20',
  //   skyColor: '#b1e1ff',
  // });

  return (
    <Canvas
      camera={{
        position: [0, 10, 20],
        fov: 45,
        aspect: 2,
        near: 0.1,
        far: 100,
      }}
    >
      <Suspense fallback={null}>
        <Plane />
        <Cube />
        <Sphere />
      </Suspense>

      {/* <ambientLight color={color} intensity={intensity} /> */}
      {/* <hemisphereLight args={[skyColor, groundColor, intensity]} /> */}
      <DirectionalLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
