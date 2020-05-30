/* eslint-disable prettier/prettier */
module.exports = {
  purge: [
    "./pages/**/*.*", 
    "./components/**/*.*", 
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '320px',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      translate: {
        '00': '0.1rem',
      },
      translate: {
        '-00': '-0.1rem',
      },
    },
  },
  variants: {
    zIndex: ['hover'],
  },
  plugins: [],
};
