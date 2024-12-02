/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry: ['zentry','sans-serif'],
        general: ['general','sans-serif'],
        'circular-web':['robert-medium','sanf-serif'],
        'robert-regular' : ['robert-regular','sanf-serif'],
        'robert-medium' : ['robert-medium','sanf-serif']
      },
      colors:{
        blue : { 
          50: '#dfdff0',
          75: '#dfdff2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD'
        },
        voilet: {
          300 : '#5724ff'
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66'
        }
      }
    },
  },
  plugins: [],
}