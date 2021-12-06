module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: 
      {
        chris: "#9cdbff"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
