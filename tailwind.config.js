/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1F3E77',
        'sub-main': '#4366B0',
        'red-custom': '#f0542b',
        'gray-custom': '#585858',
        'orange-custom': '#f96e40'
      },
      backgroundImage: {
        'custom-radial-header': 'radial-gradient(circle, rgb(30, 60, 114), rgb(42, 82, 152))',
        'banner-image': 'linear-gradient(rgb(245, 247, 250), rgb(195, 207, 226))',
        'button-background': 'linear-gradient(rgb(255, 149, 103), rgb(237, 78, 8))'
      },
      dropShadow: {
        'header': 'rgb(0, 0, 0) 1px 2px 3px'
      },
      boxShadow: {
        'custom-bottom': '0px 0px 30px -10px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'pulse-scale': 'pulse-scale 3s infinite',
        flash: 'flash 3s infinite',
        'rotate-word': 'rotateWord 3s infinite',
        'swing-custom': 'swingCustom 1s ease-in-out infinite',
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        flash: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        rotateWord: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0)' },
        },
        swingCustom: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0)' },
        },
      }
    },
    fontFamily: {
      'sriracha': ["Sriracha", 'cursive'],
      'oswald': ["Oswald", 'sans-serif'],
      'quicksand': ["Quicksand", 'sans-serif'],
      'roboto': ["Roboto", 'sans-serif'],
      'noto': ["Noto Serif", 'serif'],
    }
  },
  plugins: [],
}