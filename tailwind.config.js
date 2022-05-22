const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "zl-pink": "#FFA5C5",
        "zl-lilac": "#FEB3F1",
        "zl-purple": "#E8C8FF",
        "zl-peach": "#FFD6E0",
        "zl-white": "#FAFAFA",
        "zl-grey-light": "#FBFBFB",
        "zl-grey": "#959595",
        "zl-brown": "#564147",
        "zl-black": "#212121",
        "zl-aqua": "#7BC5AC",
      },
      fontFamily: {
        Parisienne: ["Parisienne", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "3.5xl": [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "4.5xl": [
          "2.625rem",
          {
            lineHeight: "2.5rem",
          },
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        "zl-md": "0px 1px 4px rgba(77, 77, 77, 0.35)",
        "zl-lg": "4px 2px 10px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
