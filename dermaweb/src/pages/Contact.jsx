import React from 'react';
export default function Contact(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Contact</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full p-3 rounded-md bg-[var(--color-surface)] border" placeholder="Your name" />
        <input className="w-full p-3 rounded-md bg-[var(--color-surface)] border" placeholder="Email" />
        <textarea className="w-full p-3 rounded-md bg-[var(--color-surface)] border" rows="6" placeholder="How can we help?"></textarea>
        <button type="submit" className="px-4 py-2 rounded-md text-white" style={{ background: 'linear-gradient(90deg,var(--color-primary),var(--color-primary-2))' }}>Send</button>
      </form>
    </div>
  );
}
