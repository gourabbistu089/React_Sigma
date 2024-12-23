/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#535bf2',
        'background-color': '#f7f7f7',
        'text-color': '#1e1f23',
        'button-color': '#2a2c30',
        'secondary-color': '#4b4f56',
        'border-color': '#e3eaf0',
        'background-secondary': '#fefefe',
      },
      boxShadow: {
        'custom-header': '0 6px 24px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}