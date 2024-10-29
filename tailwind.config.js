/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dynamix: ['Dx Dynamix', 'sans-serif'],
        neue: ['Neue Montreal', 'sans-serif'], 
        clash: ['Clash Display', 'sans-serif'],
        awesome: ['Awesome Serif', 'sans-serif'] 
      },
      colors: {
        custom_1: '#212833', // Adding the custom color
      },
      boxShadow: {
        'text-shadow': '2px 2px 0 #212833',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0) 100%)',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      }
    },
  },

}