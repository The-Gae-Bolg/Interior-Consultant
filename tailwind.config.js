/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px', 
      'md': '768px',
      'mdMax': {'max': '768px'},
      'lg': '1024px',
    },
    extend: {
      boxShadow: {
        'card-sd': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'serif'],
      'Lora': ['Lora', 'serif'],
      'CrimsonPro': ['Crimson Pro', 'serif'],
    }
  },
  plugins: [],
}

