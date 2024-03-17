"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center md:mb-0 md:self-center">
      <div className="items-center hidden md:flex">
        <button
          aria-label="Toggle between Dark and Light mode"
          className="text-muted dark:text-gray-400 text-sm dark:focus:ring-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 inline-flex items-center p-2.5 rounded-lg"
          type="button"
          data-aw-toggle-color-scheme=""
          onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" astro-icon="tabler:sun">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="icon-tabler"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
