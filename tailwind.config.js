/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,jsx}",
    "./src/*.{html,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "system-ui", "-apple-system", "BlinkMacSystemFont", 'Segoe UI', "Roboto", "Oxygen", "Ubuntu", "Cantarell", 'Open Sans', 'Helvetica Neue', "sans-serif"]
      }
    },
  },
  plugins: [],
}

