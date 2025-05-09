/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Anek Telugu", "sans-serif"],
        paragraph: ["Inter", "sans-serif"],
      },
      lineHeight: {
        '3xl': '62px',
        '4xl': '82px',
      },
      colors: {
        white:'#fff',
        beige: '#FEFBEC',
        black: '#000',
        gray: '#D9D9D9',
        green: '#3D9277',
        yellow: '#F1D02D',
        orange: '#CD683E',
        red: '#CB6354',
      },
      fontSize: {
        sm: '15px',
        base: '20px',
        xl: '30px',
        '2xl': '35px',
        '3xl': '60px',
        '4xl': '80px'
      }
    },
  },
  plugins: [],
}

