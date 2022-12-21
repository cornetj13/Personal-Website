/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'metal': '#6E6E6E',
        'bermuda': '#78DCCA',
        'charcoal': '#333333',
        'snow': '#FFFAFA',
        'platinum': '#E5E4E2',
        'light-blue': '#98C1D9',
        'warm-blue': '#219EBC',
        'dark-blue': '#355070',
        'linkedin': '#0072B1',
        'github': '#333333'
      },
    },
  },
  plugins: [],
}
