/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#E17242',
        'custom-hover-orange': '#EB946F',
        'custom-grey': '#5D5B5B',
        'bg-light-grey': '#D3D3D3',
        'custom-light-grey': '#F3F3F3',
        'text-grey': '#969897',
      },
      height: {
        '1066': '266.5rem',
        '719': '179.75rem',
        '240': '60rem',
        '213': '53.25rem',
        '160': '40rem',
      },
      width: {
        '1066': '266.5rem',
        '719': '179.75rem',
        '251': '62.75rem',
        '240': '60rem',
        '213': '53.25rem',
        '160': '40rem',
      },
      translate: {
        '110': '27.5rem',
        '75': '18.75rem',
        '65': '16.25rem',
        '58': '14.5rem',
        '53': '13.25rem',
        '50': '12.5rem',
        '48': '12rem',
        '45': '11.25rem',
        '38': '9.5rem',
        '36': '9rem',
        '35': '8.75rem',
        '32': '8rem',
        '30': '7.5rem',
        '15': '3.75rem',
      },
      scale: {
        '110': '1.10',
      }
    },
  },
  plugins: [],
};