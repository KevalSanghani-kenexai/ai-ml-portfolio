"use client";

import { useMemo, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-media-query";

function seeded(seed: number) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function subscribeWebGL() {
  return () => undefined;
}

function getWebGLSnapshot() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

function useWebGLSupport() {
  return useSyncExternalStore(subscribeWebGL, getWebGLSnapshot, () => false);
}

function Core({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current || reduced) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.15 + state.pointer.x * 0.2;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.12 + state.pointer.y * -0.12;
    if (wire.current) {
      wire.current.rotation.y = t * -0.08;
    }
  });

  return (
    <group ref={group} position={[1.85, 0.1, 0]} scale={1.25}>
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color="#c6f24e" wireframe transparent opacity={0.75} />
      </mesh>
      <mesh ref={wire} scale={0.52}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#9bbb3a" wireframe transparent opacity={0.9} />
      </mesh>
      <mesh scale={0.28}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#c6f24e" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Particles({ count, reduced }: { count: number; reduced: boolean }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const rand = seeded(42);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.4 + rand() * 3.8;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!points.current || reduced) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.04;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.06;
  });

  return (
    <points ref={points} geometry={geometry} position={[1.85, 0.1, 0]}>
      <pointsMaterial
        size={0.045}
        color="#c6f24e"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

function Links({ reduced }: { reduced: boolean }) {
  const lines = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => {
    const rand = seeded(99);
    const count = 56;
    const positions = new Float32Array(count * 6);
    for (let i = 0; i < count; i += 1) {
      const a = new THREE.Vector3().setFromSphericalCoords(
        1.9 + rand() * 1.6,
        rand() * Math.PI,
        rand() * Math.PI * 2,
      );
      const b = a
        .clone()
        .add(
          new THREE.Vector3(
            (rand() - 0.5) * 1.3,
            (rand() - 0.5) * 1.3,
            (rand() - 0.5) * 1.3,
          ),
        );
      positions.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!lines.current || reduced) return;
    lines.current.rotation.y = -state.clock.elapsedTime * 0.05;
  });

  return (
    <lineSegments ref={lines} geometry={geometry} position={[1.85, 0.1, 0]}>
      <lineBasicMaterial color="#c6f24e" transparent opacity={0.28} toneMapped={false} />
    </lineSegments>
  );
}

function Scene({
  particleCount,
  reduced,
}: {
  particleCount: number;
  reduced: boolean;
}) {
  return (
    <>
      <Core reduced={reduced} />
      <Particles count={particleCount} reduced={reduced} />
      <Links reduced={reduced} />
    </>
  );
}

function StaticFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
      <div className="relative h-72 w-72 md:h-[28rem] md:w-[28rem] md:translate-x-[18%]">
        <div className="absolute inset-6 rounded-full border border-accent/40" />
        <div className="absolute inset-16 rounded-full border border-accent/20" />
        <div className="absolute inset-[44%] rounded-full bg-accent/30 shadow-[0_0_60px_rgba(198,242,78,0.35)]" />
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full opacity-80">
          <polygon
            points="100,18 168,55 168,125 100,162 32,125 32,55"
            fill="none"
            stroke="#C6F24E"
            strokeWidth="1"
            opacity="0.85"
          />
          <circle cx="100" cy="100" r="5" fill="#C6F24E" />
        </svg>
      </div>
    </div>
  );
}

export function IntelligenceCore() {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const webgl = useWebGLSupport();

  if (!webgl || reduced) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, mobile ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        }}
        style={{ background: "transparent" }}
      >
        <Scene particleCount={mobile ? 800 : 2000} reduced={reduced} />
      </Canvas>
    </div>
  );
}
