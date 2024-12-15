/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: false, // Disable DaisyUI's default dark mode
  },
  darkMode: 'class', // You can change this to 'media' or 'class' based on your needs, or set it to false to disable dark mode globally
}