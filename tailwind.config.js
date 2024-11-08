/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        routeNameActivating: '#2f3748',
      },
      colors: {
        'indigo-500': '#667eea',
        'gray-100': '#f7fafc',
        'gray-900': '#1a202c',
        'gray-600': '#718096',
      },
    },
  },
  plugins: [],
}

