'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Swappable character. Drop in any .glb here (a Ready Player Me / cartoon
// avatar of Swaroop) and the whole flow below keeps working unchanged.
const MODEL = '/character.glb';

const pointer = { x: 0, y: 0 };

function Character() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL);
  const { actions, names } = useAnimations(animations, group);
  const smooth = useRef({ x: 0, y: 0 });

  // Center the model on the origin so framing is predictable.
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  // Play a calm idle loop (falls back to the first clip if "Idle" is absent).
  useEffect(() => {
    const clip = actions['Idle'] || (names[0] ? actions[names[0]] : undefined);
    clip?.reset().fadeIn(0.5).play();
    return () => {
      clip?.fadeOut(0.3);
    };
  }, [actions, names]);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    smooth.current.x += (pointer.x - smooth.current.x) * 0.05;
    smooth.current.y += (pointer.y - smooth.current.y) * 0.05;
    const scroll = typeof window !== 'undefined' ? Math.min(window.scrollY / 700, 1) : 0;
    // Turn the character toward the cursor, with a slight scroll drift.
    g.rotation.y = smooth.current.x * 0.5 - scroll * 0.35;
    g.rotation.x = smooth.current.y * 0.12 + scroll * 0.1;
  });

  return (
    <group ref={group} dispose={null} scale={0.92} position={[0, -0.1, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function Env() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    return () => {
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

export default function Avatar3D() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.2, 8.6], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Env />
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 4]} intensity={1.8} color="#fff1da" />
        <directionalLight position={[-3, 2, -3]} intensity={2.2} color="#e8a838" />
        <directionalLight position={[-2, -1, 3]} intensity={0.4} color="#88a0ff" />
        <pointLight position={[0, 0.5, 3]} intensity={1.2} distance={10} color="#f0b848" />
        <Character />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL);
