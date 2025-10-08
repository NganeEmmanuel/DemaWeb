// src/utils/theme.js
// Simple theme applier using CSS variables defined in colors.js.
// Call applyTheme('light'|'dark') to set CSS variables.

import { colors } from './colors';

export function applyTheme(mode = 'light') {
  const root = document.documentElement;
  const palette = colors[mode] || colors.light;
  Object.entries(palette).forEach(([k, v]) => {
    root.style.setProperty(k, v);
  });

  // also toggle a class for tailwind/dark utilities if desired
  if (mode === 'dark') {
    root.classList.add('theme-dark');
  } else {
    root.classList.remove('theme-dark');
  }
}
