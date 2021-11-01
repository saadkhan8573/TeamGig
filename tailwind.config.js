module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '32p': '32%',
        '49p': '49%',
      },
      minHeight: {
        '450': '450px',
      },
      borderRadius: {
        '100': '100px',
        '200': '200px',
        '300': '300px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}