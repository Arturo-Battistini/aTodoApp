/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        skyblue: '#64FFDA',
        darkblue: '#0A192F',
        titleText: '#CCD6F6',
        pText: '#8892B0',
        leadText: '#ccd6f6',

        //light Mode
        skyblueLight: '#64FFDA',
        darkblueLight: '#98B0A9',
        titleTextLight: '#6AD2FF',
        pTextLight: '#364B45',
        leadTextLight: '#009CEB',
      },
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  // ...
};
