module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: "#f49f85",
        purple: "#ad1fea",
        skyblue: "#62bcfa",
        lightgray: "#f2f4ff",
        seablue: "#4661e6",
        grey: "#647196",
        darkBlue: "#373f68",
      },
      backgroundImage: {
        "header-background-desktop":
          "url('/Images/suggestions/desktop/background-header.png')",
      },
      width: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
