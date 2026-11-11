import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only run if not previously shown in this session
    const hasLoaded = sessionStorage.getItem('uk_portfolio_loaded');
    if (hasLoaded) {
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('uk_portfolio_loaded', 'true');
        onComplete();
      },
    });

    // Animate digital counter
    const counterObj = { val: 0 };
    tl.to(counterObj, {
      val: 100,
      duration: 1.4,
      ease: 'power3.inOut',
      onUpdate: () => {
        setProgress(Math.floor(counterObj.val));
      },
    });

    // Wipe curtain up
    tl.to('.preloader-curtain-top', {
      yPercent: -100,
      duration: 0.75,
      ease: 'expo.inOut',
    }, '-=0.2');

    tl.to('.preloader-curtain-bottom', {
      yPercent: 100,
      duration: 0.75,
      ease: 'expo.inOut',
    }, '<');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col pointer-events-none select-none">
      {/* Top Shutter Curtain */}
      <div className="preloader-curtain-top flex-1 bg-[#09090B] flex flex-col justify-end p-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-baseline justify-between">
          <span className="font-mono-code text-xs tracking-widest text-[#949089] uppercase">
            [MONOGRAPH // 2026]
          </span>
          <span className="font-mono-code text-xs text-[#FF3B00] tracking-wider uppercase">
            SYSTEM BOOT SEQUENCE
          </span>
        </div>
      </div>

      {/* Bottom Shutter Curtain */}
      <div className="preloader-curtain-bottom flex-1 bg-[#09090B] flex flex-col justify-between p-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full pt-4">
          <div className="overflow-hidden">
            <h1 className="font-display text-2xl md:text-4xl text-[#EDEAE4] tracking-tight">
              Umerkhan Junaidkhan
            </h1>
          </div>
          <p className="font-mono-code text-xs text-[#5C5A55] tracking-widest uppercase mt-1">
            Audio Forensics · Clinical RAG · Smart Contracts
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full flex items-end justify-between">
          <div className="font-mono-code text-5xl md:text-7xl font-bold text-[#EDEAE4] tracking-tighter tabular-nums">
            {progress.toString().padStart(3, '0')}
            <span className="text-[#FF3B00] text-xl font-normal ml-1">%</span>
          </div>
          <span className="font-mono-code text-[11px] text-[#5C5A55] tracking-widest uppercase pb-2">
            PRESS ANY KEY TO SKIP
          </span>
        </div>
      </div>
    </div>
  );
};
