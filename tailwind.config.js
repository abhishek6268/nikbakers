/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#832622",
        secondary:"#fef8e2",
        tertiary:"#f15a24"
      },
      fontFamily:{
        paragraph:"PlayFair Display "
      }
    },
  },
  plugins: [],
}


