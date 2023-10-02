/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        color1: '#49B4A1',
        color2: '#b74860',
        primaryBlack: '#000000',
        primaryWhite: '#FFFFFF'
      },
      // fontSize: {
      //   'sm': '14px',
      //   'md': '18px',
      //   'lg': '24px',
      // },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

