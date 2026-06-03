'use client';

import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MODEL = '/avatar.glb';

// Tweakables (model is normalized to a ~2-unit cube; safe defaults below so it
// can't render as a giant clipped close-up before we see it on a real screen):
const SCALE = 0.9;
const BASE_Y = -0.1;
const FACE_DIR = 0; // set to Math.PI if the model faces away from camera

function Avatar() {
  const { scene } = useGLTF(MODEL, '/draco/');
  const ref = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const scroll = typeof window !== 'undefined' ? Math.min(window.scrollY / 600, 1) : 0;

    // Whole-avatar "watch the cursor" turn + a touch of scroll rotation.
    const targetYaw = FACE_DIR + mouse.current.x * 0.55 + scroll * 0.35;
    const targetPitch = -mouse.current.y * 0.28;
    g.rotation.y += (targetYaw - g.rotation.y) * 0.07;
    g.rotation.x += (targetPitch - g.rotation.x) * 0.07;

    // Gentle idle float.
    g.position.y = BASE_Y + Math.sin(t * 0.8) * 0.035;
  });

  return <primitive ref={ref} object={scene} scale={SCALE} position={[0, BASE_Y, 0]} />;
}

export default function Avatar3D() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.15} />
        <directionalLight position={[-4, 1, -3]} intensity={0.9} color="#e8a838" />
        <pointLight position={[0, -1, 3]} intensity={0.4} color="#f0b848" />
        <Suspense fallback={null}>
          <Avatar />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL, '/draco/');
