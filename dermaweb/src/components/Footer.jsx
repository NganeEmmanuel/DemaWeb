// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const now = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-[rgba(0,0,0,0.06)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg" style={{ background: 'linear-gradient(135deg,var(--color-primary),var(--color-primary-2))' }}></div>
              <div className="font-semibold">DermaAI</div>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)] max-w-md">
              AI-powered skin lesion detection & classification. Built for clinicians, researchers, and curious users.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="font-medium mb-2">Product</h4>
              <ul className="text-sm text-[var(--muted)] space-y-1">
                <li><Link to="/docs">Documentation</Link></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Company</h4>
              <ul className="text-sm text-[var(--muted)] space-y-1">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Social</h4>
              <ul className="text-sm text-[var(--muted)] space-y-1">
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-[var(--muted)] flex items-center justify-between">
          <div>© {now} DermaAI. All rights reserved.</div>
          <div>Made with ❤️ · Privacy · Terms</div>
        </div>
      </div>
    </footer>
  );
}
