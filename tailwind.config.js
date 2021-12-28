module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'golden-yellow': '#edc32d',
      'dark-blue': '#303961',
      'pastel-rose': '#e4b5ae',
      'dark-rose': '#c87c93',
      white: '#ffffff',
      'pastel-yellow': '#e8d388',
    },
    fontFamily: {
      raleway: ['Raleway'],
      gravitas: ['"Gravitas One"'], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
