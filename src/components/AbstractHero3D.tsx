'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Shared, module-level pointer so the listener is set up once. Values are
// normalised to roughly [-1, 1] from the viewport centre.
const pointer = { x: 0, y: 0 };

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  // MeshDistortMaterial exposes `distort` / `speed` as live uniforms.
  const mat = useRef<THREE.Material & { distort: number; speed: number }>(null);
  const smooth = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    const scroll =
      typeof window !== 'undefined' ? Math.min(window.scrollY / 700, 1) : 0;

    // Ease the pointer so the motion feels weighted, not twitchy.
    smooth.current.x += (pointer.x - smooth.current.x) * 0.045;
    smooth.current.y += (pointer.y - smooth.current.y) * 0.045;

    // Continuous slow spin, nudged by the cursor and the scroll position.
    m.rotation.y = t * 0.12 + smooth.current.x * 0.55;
    m.rotation.x = smooth.current.y * 0.3 + scroll * 0.7;

    if (shell.current) {
      shell.current.rotation.y = -t * 0.05 - smooth.current.x * 0.3;
      shell.current.rotation.z = t * 0.03;
    }

    // The core morphs harder as the viewer scrolls into the page.
    if (mat.current) {
      mat.current.distort = 0.3 + scroll * 0.22 + Math.sin(t * 0.6) * 0.035;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.7}>
      {/* Molten amber core */}
      <Icosahedron ref={mesh} args={[1.12, 18]}>
        <MeshDistortMaterial
          ref={mat as never}
          color="#e8a838"
          roughness={0.22}
          metalness={0.62}
          distort={0.32}
          speed={1.6}
          envMapIntensity={0.95}
        />
      </Icosahedron>

      {/* Faint faceted shell, counter-rotating, for a sense of structure */}
      <Icosahedron ref={shell} args={[1.78, 1]}>
        <meshBasicMaterial color="#e8a838" wireframe transparent opacity={0.1} />
      </Icosahedron>

      {/* Amber motes drifting around the core */}
      <Sparkles count={48} scale={[5.5, 5.5, 3.5]} size={2.2} speed={0.3} opacity={0.55} color="#f0b848" />
    </Float>
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

export default function AbstractHero3D() {
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
        camera={{ position: [0, 0, 4.2], fov: 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Env />
        <ambientLight intensity={0.2} />
        <directionalLight position={[3, 3, 3]} intensity={1.6} color="#fff1da" />
        <directionalLight position={[-3, 2, -3]} intensity={2.4} color="#e8a838" />
        <directionalLight position={[-2, -1.5, 2]} intensity={0.4} color="#88a0ff" />
        <pointLight position={[0, 0.4, 3]} intensity={1.3} distance={9} color="#f0b848" />
        <Core />
      </Canvas>
    </div>
  );
}
