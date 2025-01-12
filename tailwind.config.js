/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', 
    './public/index.html', 
  ],
           
  theme: {
    extend: {
      colors: { 
        primary: "#18abc6",
        light:"#a3a3a3",
        light1: "#f8f8f8",
      },
    },
  },
  plugins: [],
}

