/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      
      colors: {
        // colorplatte
        customColor1: '#EDF1D6',
        customColor2: '#9DC08B',
        customColor3: '#609966',
        customColor4: '#40513B',

      },

      // rightmenu animation
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        }
        
      },

      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      }
      
      
    },
  },
  plugins: [],
}