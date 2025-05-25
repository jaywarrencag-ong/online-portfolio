import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = ({ isMobile }) => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <mesh>
    <hemisphereLight intensity={1.15} groundColor="black" />
    <pointLight intensity={1} />

    <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={5}
      castShadow
      shadow-mapSize={1024}
    />

    <spotLight
      position={[15, -5, 5]}
      angle={0.3}
      penumbra={0.7}
      intensity={100}
      distance={50}
      color={"#ffffff"}
    />

    <primitive
      object={earth.scene}
      scale={isMobile ? 3 : 3.4}
      position={isMobile ? [0, 0, 0] : [0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  </mesh>
  )
}

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => { setIsMobile(event.matches)};

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;