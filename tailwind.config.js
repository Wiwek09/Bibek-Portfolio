/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:"burtons",
      },
    },
   
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('postcss-import'),
    require('postcss-nesting'),
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}