import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMotion } from '../context/MotionContext';

interface NoiseSignalProps {
  clarityFactor?: number; // 0 = chaotic noise, 1 = clean sine signal
}

export const NoiseSignalCanvas: React.FC<NoiseSignalProps> = ({ clarityFactor = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useMotion();

  useEffect(() => {
    const container = mountRef.current;
    if (!container || !motionEnabled) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group containing the dynamic ribbon strokes
    const group = new THREE.Group();
    const ribbonCount = 20;
    const pointsCount = 140;
    const ribbons: { geometry: THREE.BufferGeometry; speed: number; noiseSeed: number }[] = [];

    // Signal Vermilion Material (#FF3B00)
    const signalMat = new THREE.LineBasicMaterial({
      color: 0xff3b00,
      transparent: true,
      opacity: 0.85,
      linewidth: 1.5,
    });

    // Dim Alabaster Material (#EDEAE4 at 15% opacity)
    const dimMat = new THREE.LineBasicMaterial({
      color: 0xedeae4,
      transparent: true,
      opacity: 0.15,
      linewidth: 1,
    });

    for (let r = 0; r < ribbonCount; r++) {
      const positions = new Float32Array(pointsCount * 3);
      const zOffset = (r - ribbonCount / 2) * 0.9;
      const spanX = 18;

      for (let i = 0; i < pointsCount; i++) {
        const u = (i / (pointsCount - 1)) * 2 - 1; // -1 to 1
        positions[i * 3] = u * spanX;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = zOffset;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const isCore = Math.abs(r - ribbonCount / 2) < 3;
      const mesh = new THREE.Line(geometry, isCore ? signalMat : dimMat);
      group.add(mesh);

      ribbons.push({
        geometry,
        speed: 1.0 + Math.random() * 0.6,
        noiseSeed: Math.random() * 100,
      });
    }

    scene.add(group);

    // Mouse tracking for reactive turbulence
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 2.0;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      group.rotation.x = 0.35 + mouseY * 0.12;
      group.rotation.y = -0.2 + mouseX * 0.15;

      ribbons.forEach((ribbon, idx) => {
        const positions = ribbon.geometry.attributes.position.array as Float32Array;
        const norm = idx / ribbonCount;

        for (let i = 0; i < pointsCount; i++) {
          const u = (i / (pointsCount - 1)) * 2 - 1;
          const envelope = Math.exp(-u * u * 3.0); // Bell window

          // 1. Noise component (high frequency jitter, chaotic phase)
          const noise1 = Math.sin(u * 28 + elapsed * 5.0 + ribbon.noiseSeed) * 0.7;
          const noise2 = Math.cos(u * 44 - elapsed * 3.8 + idx) * 0.4;
          const rawNoise = (noise1 + noise2) * (1 - clarityFactor);

          // 2. Pure Signal component (coherent fundamental acoustic wave)
          const pureSignal = Math.sin(u * 6.28 + elapsed * 2.5) * (1.6 * clarityFactor);

          // Mouse perturbation
          const interactiveWarp = Math.sin(u * 8 + mouseX * 3) * (mouseY * 0.5);

          const displacement = (rawNoise + pureSignal + interactiveWarp) * envelope;
          positions[i * 3 + 1] = displacement * (1.2 + norm * 0.3);
        }

        ribbon.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [clarityFactor, motionEnabled]);

  // Static elegant SVG fallback when motion is disabled
  if (!motionEnabled) {
    return (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-30 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 200" fill="none" className="w-full max-w-4xl text-[#FF3B00]">
          <path
            d="M 50 100 Q 200 40 400 100 T 750 100"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 50 100 Q 200 160 400 100 T 750 100"
            stroke="rgba(237,234,228,0.2)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0"
      aria-hidden="true"
    />
  );
};
