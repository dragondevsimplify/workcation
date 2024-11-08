/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        routeNameActivating: '#2f3748'
      }
    },
  },
  plugins: [],
}

