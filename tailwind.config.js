const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.75rem", { lineHeight: "1.4", fontWeight: "600" }],
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
});
