const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        teals: {
          100: '#b3e0dc',
          200: '#81cdc6 ',
          300: '#4fb9af',
          400: '#28a99e',
          500: '#05998c',
          600: '#048c7f',
          700: '#037c6e',
          800: '#036c5f',
          900: '#025043',
        },
      },
      backgroundImage: {
        header: "url('./header.jpg')",
      },
      fontFamily: {
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        lemon: ['Lemon', ...defaultTheme.fontFamily.sans],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
