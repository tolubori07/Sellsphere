/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
  bg: '#dfe5f2',
  main: '#88aaee',
  mainAccent: '#4d80e6',
  'white': '#ffffff',
  'black': '#000000',
  other:'#96e6b3',
  otherAccent:'#7BE0A0'
},
screens: {
  sm: '280px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
},
  },
  plugins: [],
}

