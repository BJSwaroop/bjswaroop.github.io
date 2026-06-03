'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const MODEL = '/avatar.glb';
const FACE = -Math.PI / 2; // rotation that turns the model to face the camera

function Model() {
  const { scene } = useGLTF(MODEL, '/draco/');
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Center the model and give it a clean matte-marble material (it ships untextured).
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: 0xece5d8,
          roughness: 0.5,
          metalness: 0.04,
        });
      }
    });
  }, [scene]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const scroll = typeof window !== 'undefined' ? Math.min(window.scrollY / 600, 1) : 0;
    const targetYaw = FACE + mouse.current.x * 0.4 - scroll * 0.4;
    const targetPitch = -mouse.current.y * 0.18 + scroll * 0.15;
    g.rotation.y += (targetYaw - g.rotation.y) * 0.06;
    g.rotation.x += (targetPitch - g.rotation.x) * 0.06;
    g.position.y = Math.sin(t * 0.8) * 0.025;
  });

  return (
    <group ref={group} rotation={[0, FACE, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function Env() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.02).texture;
    scene.environment = env;
    return () => {
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

export default function Avatar3D() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.05, 2.6], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.82;
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Env />
        <ambientLight intensity={0.12} />
        <directionalLight position={[2.6, 2.6, 2.4]} intensity={2.0} color="#fff1da" />
        <directionalLight position={[-2.2, 1.6, -3.2]} intensity={3.4} color="#e8a838" />
        <directionalLight position={[-3, -0.6, 1.5]} intensity={0.35} color="#aec6ff" />
        <pointLight position={[-0.6, 0.3, -1.8]} intensity={1.6} distance={7} color="#f0b848" />
        <Model />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL, '/draco/');
