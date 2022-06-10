module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
      },
    },
  },
  plugins: [require('daisyui')],
}
