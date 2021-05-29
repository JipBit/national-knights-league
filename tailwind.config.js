module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
            myellow: {
                light: '#f2e0c8',
                medium: '#e8d3b6',
                neutral: '#a2967e',
                DEFAULT: '#bd8d4c',
                dark: '#cd8c4a',
            }
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            spectral: ['Spectral SC', 'sans-serif'],
            evil: ['MedievalSharp', 'sans-serif'],
            cinzel: ['Cinzel', 'sans-serif'],
        },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}

