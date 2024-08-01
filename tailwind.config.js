/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient1': 'linear-gradient(45deg, #2f4680, #500ae4)',
      },
    },
  },
  plugins: [],
}