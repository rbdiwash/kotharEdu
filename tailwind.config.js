module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Roboto Serif", "serif"],
        // inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        headline: "4rem",
        subHeadline: "1.5rem",
        body: "1.25rem",
      },
    },
    colors: {
      primary: "#ED6A06",
      primary2: "#FFAB6B",
      second: "#63AFC7",
      altSecond: "#BEE2ED",
      blue: "#00A1CF",
      blueAlt: "#00A1CF",
      lightBlue: "#BEE2ED",
      secondaryText: "#00A1CF",
      black: "#373737",
      altBlack: "#212121",
      white: "#fff",
      altWhite: "#727272",
    },
  },
  plugins: [],
};
