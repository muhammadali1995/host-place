export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: '18px'
      },
      colors: {
        primary: '#F8F9FAFF',
        secondary: '#565E6DFF',
        gray: {
          150: '#DEE1E6FF',
          250: '#424956FF',
          350: '#171A1FFF'
        }
      }
    },
  },
  plugins: [],
}
