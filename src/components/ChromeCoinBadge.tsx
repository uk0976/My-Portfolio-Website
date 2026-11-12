import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMotion } from '../context/MotionContext';

export const ChromeCoinBadge: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useMotion();

  useEffect(() => {
    const container = mountRef.current;
    if (!container || !motionEnabled) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Procedural High-Contrast Studio Environment Generator (Daff approach)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envScene = new THREE.Scene();
    // High-contrast softbox light bars
    const lightGeo = new THREE.PlaneGeometry(12, 4);
    const keyLightMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const keyLight = new THREE.Mesh(lightGeo, keyLightMat);
    keyLight.position.set(0, 8, 4);
    keyLight.rotation.x = Math.PI / 2.5;
    envScene.add(keyLight);

    // Rim kicker light
    const kickerMat = new THREE.MeshBasicMaterial({ color: 0xff3b00, side: THREE.DoubleSide });
    const kicker = new THREE.Mesh(new THREE.PlaneGeometry(8, 2), kickerMat);
    kicker.position.set(-6, -4, -4);
    kicker.rotation.y = Math.PI / 3;
    envScene.add(kicker);

    const envRenderTarget = pmremGenerator.fromScene(envScene);
    scene.environment = envRenderTarget.texture;

    // Procedural Coin Construction via ExtrudeGeometry
    const coinGroup = new THREE.Group();

    // 1. Base Coin Disc
    const coinShape = new THREE.Shape();
    const radius = 2.2;
    coinShape.absarc(0, 0, radius, 0, Math.PI * 2, false);

    const extrudeSettings = {
      depth: 0.18,
      bevelEnabled: true,
      bevelSegments: 6,
      bevelSize: 0.08,
      bevelThickness: 0.06,
      curveSegments: 48,
    };

    const coinGeo = new THREE.ExtrudeGeometry(coinShape, extrudeSettings);
    coinGeo.center();

    // Hyper-reflective chrome material with subtle iridescence
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111113,
      metalness: 1.0,
      roughness: 0.045,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      iridescence: 0.35,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [180, 420],
      reflectivity: 1.0,
    });

    const coinMesh = new THREE.Mesh(coinGeo, chromeMaterial);
    coinGroup.add(coinMesh);

    // 2. Embossed Waveform / UK Emblem Relief
    const emblemShape = new THREE.Shape();
    // UK Monogram + Waveform Striations
    emblemShape.moveTo(-1.2, 1.0);
    emblemShape.lineTo(-0.8, 1.0);
    emblemShape.lineTo(-0.8, -0.6);
    emblemShape.quadraticCurveTo(-0.4, -1.0, 0.0, -0.6);
    emblemShape.lineTo(0.0, 1.0);
    emblemShape.lineTo(0.4, 1.0);
    emblemShape.lineTo(0.4, -0.7);
    emblemShape.quadraticCurveTo(-0.4, -1.5, -1.2, -0.7);
    emblemShape.closePath();

    const emblemGeo = new THREE.ExtrudeGeometry(emblemShape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
    emblemGeo.center();

    const signalGoldMat = new THREE.MeshPhysicalMaterial({
      color: 0xff3b00,
      metalness: 0.9,
      roughness: 0.12,
      clearcoat: 0.8,
      emissive: 0x330c00,
    });

    const emblemMesh = new THREE.Mesh(emblemGeo, signalGoldMat);
    emblemMesh.position.z = 0.14;
    coinGroup.add(emblemMesh);

    scene.add(coinGroup);

    // Spring Physics Simulation for Mouse Tilt and Click Spin (Daff mechanism)
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let currentScale = 1;
    let targetScale = 1;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotX = y * 0.75;
      targetRotY = x * 0.95;
    };

    const onMouseEnter = () => {
      targetScale = 1.06;
    };

    const onMouseLeave = () => {
      targetScale = 1.0;
      targetRotX = 0;
      targetRotY = 0;
    };

    const onClick = () => {
      // 360-degree flip impulse with elastic spring
      targetRotY += Math.PI * 2;
      targetScale = 1.15;
      setTimeout(() => {
        targetScale = 1.06;
      }, 250);
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('click', onClick);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Damped spring physics
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentScale += (targetScale - currentScale) * 0.1;

      // Subtle continuous idle breath
      coinGroup.rotation.x = currentRotX + Math.sin(elapsed * 1.2) * 0.06;
      coinGroup.rotation.y = currentRotY + Math.cos(elapsed * 0.9) * 0.08;
      coinGroup.scale.set(currentScale, currentScale, currentScale);

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
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      pmremGenerator.dispose();
      envRenderTarget.dispose();
      if (renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [motionEnabled]);

  if (!motionEnabled) {
    return (
      <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-white/20 bg-[#121215] flex flex-col items-center justify-center p-6 text-center select-none shadow-2xl">
        <span className="font-mono-code text-3xl font-bold text-[#FF3B00]">[UK]</span>
        <span className="font-mono-code text-[10px] text-[#5C5A55] tracking-widest uppercase mt-2">
          ACOUSTIC FORENSICS COIN
        </span>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 cursor-pointer select-none relative"
      data-cursor="SPIN"
      title="Click to spin coin"
    />
  );
};
