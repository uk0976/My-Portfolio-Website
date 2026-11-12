import React from 'react';
import { Link } from 'react-router-dom';

export const MetaCaseStudyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <div className="hairline-b pb-12">
        <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
          [META ARCHITECTURE]
        </div>
        <h1 className="font-display text-4xl md:text-7xl text-[#EDEAE4] tracking-tight">
          How This Site Was Made
        </h1>
        <p className="font-sans text-sm md:text-base text-[#949089] mt-4 leading-relaxed">
          An engineering breakdown of the design tokens, custom WebGL audio shader, motion system, and static deployment pipeline.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-12 text-[#949089] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            01 // Core Philosophy &amp; Aesthetic Restraint
          </h2>
          <p className="font-sans text-sm md:text-base text-[#EDEAE4]/90">
            This portfolio was designed from first principles with zero AI-generated visual boilerplate: no purple gradient blobs,
            no glowing orbs, and no identical 3-column card grids. It pairs the high-contrast editorial typography of Fraunces
            with the engineered precision of Geist Sans and Geist Mono.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            02 // The WebGL Spectrogram &amp; Fourier Wave Shader
          </h2>
          <p className="font-sans text-sm md:text-base text-[#EDEAE4]/90">
            The signature background visual is built in Three.js, executing a real-time mathematical simulation of synthetic
            voice harmonics and jitter degradation. As the user moves through the site, mouse coordinate perturbations deform
            the Fourier lines, mirroring the biometric acoustic analysis performed in VoiceGuard.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            03 // Motion Architecture &amp; Accessibility
          </h2>
          <p className="font-sans text-sm md:text-base text-[#EDEAE4]/90">
            Smooth physics-based inertia scrolling is orchestrated via Lenis. All animations respect the visitor's
            prefers-reduced-motion OS settings and can be immediately toggled off via the persistent [MOTION: ON/OFF]
            control in the header.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            04 // Static Render Deployment
          </h2>
          <div className="p-6 bg-black border border-white/10 font-mono-code text-xs text-[#EDEAE4] space-y-2">
            <div>FRAMEWORK: Vite + React 18 + TypeScript</div>
            <div>STYLING: Tailwind CSS v4 + Design Tokens</div>
            <div>ROUTER: React Router (Client-side with _redirects SPA fallback)</div>
            <div>HOSTING: Static Web Service on Render</div>
          </div>
        </section>
      </div>

      <div className="hairline-t pt-10 font-mono-code text-xs">
        <Link to="/" className="text-[#EDEAE4] hover:text-[#FF3B00] transition-colors">
          ← Return to Home Monograph
        </Link>
      </div>
    </div>
  );
};
