// src/sections/StatsCTA.jsx
import React from 'react';

export default function StatsCTA() {
  return (
    <section className="mt-12 mb-16 rounded-xl p-6" style={{ background: 'linear-gradient(90deg, rgba(10,61,145,0.06), rgba(31,95,191,0.03))' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Try DermaAI</h3>
          <p className="mt-2 text-[var(--muted)]">Download the mobile build or install the CLI to start analyzing skin images in minutes.</p>
        </div>

        <div id="download" className="flex gap-3">
          <a href="/downloads/dermaai-mobile.apk" className="px-4 py-2 rounded-md text-white font-medium" style={{ background: 'linear-gradient(90deg,var(--color-primary),var(--color-primary-2))' }}>Download Mobile</a>
          <a href="/downloads/dermaai-cli.zip" className="px-4 py-2 rounded-md border border-[var(--color-primary)] text-[var(--color-primary)]">Download CLI</a>
        </div>
      </div>
    </section>
  );
}
