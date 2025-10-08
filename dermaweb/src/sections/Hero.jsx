// src/sections/Hero.jsx
import React from 'react';
import heroPlaceholder from '../assets/hero-placeholder.png'; // create a placeholder or replace later

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(1200px 600px at 10% 10%, rgba(15,63,145,0.12), transparent 10%), linear-gradient(180deg,var(--color-primary),var(--color-primary-2))',
          opacity: 0.12,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: headline */}
          <div className="lg:col-span-6">
            <p className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: 'linear-gradient(90deg,var(--color-primary),var(--color-primary-2))' }}>
              AI · Dermatology · Clinical-grade
            </p>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Diagnose skin conditions with confidence — <span className="text-[var(--color-primary)]">DermaAI</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg max-w-xl text-[var(--muted)]">
              A lightweight, privacy-first tool for clinicians and researchers. Upload a photo, run the CLI, or use the mobile app to get fast, explainable lesion detection and classification.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="inline-flex items-center justify-center px-5 py-3 rounded-md text-white font-medium" style={{ background: 'linear-gradient(90deg,var(--color-primary),var(--color-primary-2))' }}>
                Download App
              </a>

              <a href="/docs" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent">
                Read Docs
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="Accuracy" value="95%" />
              <Stat label="Scans" value="10k+" />
              <Stat label="Response" value="≤3s" />
              <Stat label="Privacy" value="On-device" />
            </div>
          </div>

          {/* RIGHT: cinematic device mock */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-2xl">
              {/* laptop mock */}
              <div className="rounded-2xl shadow-2xl overflow-hidden bg-[var(--color-surface)]">
                <img
                  src={heroPlaceholder}
                  alt="DermaAI demo (placeholder)"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* mobile overlay */}
              <div className="absolute right-6 bottom-6 md:bottom-10 md:right-12 w-36 sm:w-44 transform translate-y-4 rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <img src={heroPlaceholder} alt="mobile mock" className="w-full h-auto object-cover" />
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">Mock demo image — replace with generated cinematic hero/video when ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-[var(--muted)]">{label}</div>
    </div>
  );
}
