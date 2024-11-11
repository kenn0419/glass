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
      },
      backgroundImage: {
        'custom-radial-header': 'radial-gradient(circle, rgb(30, 60, 114), rgb(42, 82, 152))',
        'banner-image': 'linear-gradient(rgb(245, 247, 250), rgb(195, 207, 226))',
      },
      dropShadow: {
        'header': 'rgb(0, 0, 0) 1px 2px 3px'
      },
      animation: {
        'pulse-scale': 'pulse-scale 3s infinite',
        flash: 'flash 3s infinite',
        'rotate-word': 'rotateWord 3s infinite',
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
      }
    },
    fontFamily: {
      'sriracha': ["Sriracha", 'cursive'],
      'oswald': ["Oswald", 'sans-serif'],
      'quicksand': ["Quicksand", 'sans-serif'],
      'roboto': ["Roboto", 'sans-serif']
    }
  },
  plugins: [],
}