import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AudioWaveformCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create concentric audio wave lines resembling forensic acoustic harmonics
    const linesGroup = new THREE.Group();
    const lineCount = 18;
    const pointsCount = 120;
    const linesData: { geometry: THREE.BufferGeometry; initialY: Float32Array; speed: number; phase: number }[] = [];

    const material = new THREE.LineBasicMaterial({
      color: 0xff3b00,
      transparent: true,
      opacity: 0.72,
      linewidth: 1.5,
    });

    const dimMaterial = new THREE.LineBasicMaterial({
      color: 0xedeae4,
      transparent: true,
      opacity: 0.15,
      linewidth: 1,
    });

    for (let l = 0; l < lineCount; l++) {
      const positions = new Float32Array(pointsCount * 3);
      const initialY = new Float32Array(pointsCount);
      const zPos = (l - lineCount / 2) * 1.1;
      const radiusX = 14;

      for (let i = 0; i < pointsCount; i++) {
        const u = (i / (pointsCount - 1)) * 2 - 1; // -1 to 1
        const x = u * radiusX;
        const y = 0;
        const z = zPos;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        initialY[i] = y;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Use accent color on central lines, subtle dim on boundary lines
      const isCenter = Math.abs(l - lineCount / 2) < 4;
      const lineMesh = new THREE.Line(geometry, isCenter ? material : dimMaterial);
      linesGroup.add(lineMesh);

      linesData.push({
        geometry,
        initialY,
        speed: 0.8 + Math.random() * 0.5,
        phase: (l / lineCount) * Math.PI * 2,
      });
    }

    scene.add(linesGroup);

    // Mouse responsiveness
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 2.5;
      targetY = y * 2.0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      linesGroup.rotation.x = 0.45 + mouseY * 0.15;
      linesGroup.rotation.y = -0.25 + mouseX * 0.2;

      // Deform wave points based on synthetic voice Fourier frequencies
      linesData.forEach((ld, idx) => {
        const positions = ld.geometry.attributes.position.array as Float32Array;
        const normL = idx / lineCount;

        for (let i = 0; i < pointsCount; i++) {
          const u = (i / (pointsCount - 1)) * 2 - 1;
          const envelope = Math.exp(-u * u * 3.5); // Gaussian bell window

          // Superposition of fundamental voice frequency + harmonics + mouse perturbation
          const harmonic1 = Math.sin(u * 8 + elapsed * 2.5 * ld.speed + ld.phase);
          const harmonic2 = Math.sin(u * 18 - elapsed * 3.8 + ld.phase * 0.5) * 0.45;
          const mousePerturb = Math.sin(u * 5 + mouseX * 4) * (mouseY * 0.7);

          const displacement = (harmonic1 + harmonic2 + mousePerturb) * envelope * (1.8 + normL * 0.4);
          positions[i * 3 + 1] = displacement;
        }

        ld.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85 z-0"
      aria-hidden="true"
    />
  );
};
