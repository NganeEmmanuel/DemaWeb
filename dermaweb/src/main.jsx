// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { applyTheme } from './utils/theme';

// set default theme (light). You can persist in localStorage if desired.
const saved = localStorage.getItem('theme') || 'light';
applyTheme(saved);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
