/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#4D7C0F',
        'landing-color': '#333333',
        'button-dark': '#355070',
        'button-light': '#11C3ED',
        'button-hover': '#219EBC',
        'light-text': '#FFFAFA',
        'inner-bg': '#CFCAC0',
        'linkedin': '#0072B1',
        'github': '#333333',
        'github-green': '#0D7700'
      },
    },
  },
  plugins: [],
}
