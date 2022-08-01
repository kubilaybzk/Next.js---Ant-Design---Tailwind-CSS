module.exports = {
  important: true, // to generate utilities as !important
  content: [ // add the paths to all of your template files
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
    colors: {
      primary: '#ffc107',
      secondary: '#F8F8F8',
      violet: '#883677',
      congo: '##FF958C',
      success: '#5FC790',
      warning: '#FFA600',
      danger: '#FF5630',
      dark: '#2E3A44',
      info: '#1CA7EC',
      black: '#2E3A44',
      grey1: '#A0AABF',
      grey2: '#C0C6D4',
      grey3: '#E3E8F1',
      light: '#F9FBFC',
      white: '#FFF'
    }
  },
  plugins: []
};