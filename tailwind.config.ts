import type { Config } from "tailwindcss";
import flowbitePlugin from 'flowbite/plugin'


export default {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#EEF2FF',   // Very light blue
          100: '#E4E9FF',
          200: '#D1DEFF',
          300: '#2563EB',  // Main blue from logo/heading
          400: '#1E40AF',
          500: '#1E3A8A',
          600: '#2563EB',  // The primary blue used in the UI
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        lime: {
          200: '#ECFCCB'  // Light lime green from the geometric shapes
        },
        indigo: {
          200: '#C7D2FE'  // Light purple/lavender from the geometric shapes
        }
      }
    }
  },

  plugins: [flowbitePlugin]
} as Config;
