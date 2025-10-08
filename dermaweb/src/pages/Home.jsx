// src/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import StatsCTA from '../sections/StatsCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
        <StatsCTA />
      </div>
    </>
  );
}
