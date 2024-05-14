const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // NOTE: overriding the colors instead of extending them to enforce the use of the color palette
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#FBFBFB',
        150: '#f1f1f1',
        200: '#DADADA',
        300: '#C7C7C7',
        400: '#B5B5B5',
        500: '#A3A3A3',
        600: '#919191',
        700: '#7E7E7E',
        800: '#474747',
        900: '#191919',
        1000: '#A2A2A2',
        1100: '#999999',
        1200: '#7D7D7D',
        1300: '#CBCBCB',
      },
      red: {
        base1: '#8A0025',
        base2: '#D00038',
        base3: '#95062C',
      },
      darkGray: {
        base1: '#242424',
        base2: '#0D222D',
      },
      // primary
      maroon: '#7E1728',
      maroon2: '#AC3953',
      // secondary
      crimson: '#BE283D',
      burgundy: '#922A42',
      
      pink:{
        base1: '#E31B48',
        base2: '#EB5E7E',
        base3: '#F18CA3',
        base4: '#F8C5D1',
        base5: '#FBE7EC',
      },
      beige:{
        base1: '#D4B59E',
        base2: '#E1CBBB',
        base3: '#E8DBCE',
        base4: '#F5ECE7',
        base5: '#FCF8F5',
      },
      monarch: '#95062C',
      monarch2: '#60060C',
      darkGray2: '#121212',
      success: '#4BB543',
      lightGray: '#F4F4F4',
      platinum: '#E6E6E6',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xs: '600px',
        sm: '700px',
        md: '728px',
        lg: '984px',
        xl: '1000px',
        '2xl': '1176px',
      },
    },
    extend: {
      boxShadow: {
        inner1: 'inset -1px 3px 12px #00000029',
      },
      screens: {
        xs: '400px',
        xsm: '500px',
        '2md': '984px',
        '3xl': '1260px',
      },
      fontFamily: {
        sans: ['var(--font-frutiger)', ...fontFamily.sans],
        Medium:['Medium', 'Gilroy-Medium'],
        Bold:['Bold', 'Gilroy-Bold'],
        Light:['Light', 'Gilroy-Light'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
