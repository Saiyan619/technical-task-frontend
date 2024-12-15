/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use the imported DaisyUI plugin
  ],
  daisyui: {
    darkTheme: false, // Disable DaisyUI's default dark mode
  },
  darkMode: 'class', // Optional: 'media' or 'class' based on your project
};
