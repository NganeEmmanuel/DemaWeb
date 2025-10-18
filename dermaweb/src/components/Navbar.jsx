// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { applyTheme } from '../utils/theme';
import { MdLightMode, MdDarkMode  } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? 'shadow-md bg-[color:var(--color-surface)]/90' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,var(--color-primary),var(--color-primary-2))' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z" fill="white" opacity="0.08" />
                <path d="M7 12a5 5 0 1010 0 5 5 0 00-10 0z" fill="white" opacity="0.12" />
                <path d="M9 12a3 3 0 116 0 3 3 0 01-6 0z" fill="white" />
              </svg>
            </div>
            <div className="font-semibold tracking-tight text-lg">DermaAI</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[var(--color-primary)]' : 'text-[var(--muted)]'}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[var(--color-primary)]' : 'text-[var(--muted)]'}>About</NavLink>
            <NavLink to="/docs" className={({ isActive }) => isActive ? 'text-[var(--color-primary)]' : 'text-[var(--muted)]'}>Docs</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[var(--color-primary)]' : 'text-[var(--muted)]'}>Contact</NavLink>
            <a href="#download" className="ml-2 inline-flex items-center px-3 py-1.5 rounded-md text-white"
               style={{ background: 'linear-gradient(90deg,var(--color-primary),var(--color-primary-2))' }}>
              Get the App
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
              className="p-2 rounded-md border shadow-lg border-transparent hover:border-[var(--color-primary)]/20"
            >
              {theme === 'light' ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md border border-transparent hover:border-[var(--color-primary)]/20"
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-48 bg-[var(--color-surface)] rounded-md shadow-lg py-2 text-[var(--color-text)]">
          <NavLink to="/" className="block px-4 py-2" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block px-4 py-2" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/docs" className="block px-4 py-2" onClick={() => setOpen(false)}>Docs</NavLink>
          <NavLink to="/contact" className="block px-4 py-2" onClick={() => setOpen(false)}>Contact</NavLink>
          <a href="/download" className="block px-4 py-2 text-white" style={{ background: 'linear-gradient(90deg,var(--color-primary),var(--color-primary-2))' }}>Get the App</a>
        </div>
      )}
    </>
  );
}
