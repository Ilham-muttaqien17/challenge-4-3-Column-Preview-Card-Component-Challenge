module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        deca: ["Lexend Deca"],
        shoulders: ["Big Shoulders Display"]
      },
      colors: {
        orange: "hsl(31, 77%, 52%)",
        cyan: {
          "100": "hsl(184, 100%, 22%)",
          "200": "hsl(179, 100%, 13%)"
        },
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "light-gray": "hsl(0, 0%, 95%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
