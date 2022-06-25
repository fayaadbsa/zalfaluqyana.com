const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "zl-white": "#FFFFFF",
        "zl-white-secondary": "#FCFCFC",
        "zl-grey": "#959595",
        "zl-grey-light": "#FBFBFB",
        "zl-black": "#212121",
        "zl-brown": "#564147",
        "zl-pink": "#FFA5C5",
        "zl-pink-dark": "#EE5E90",
        "zl-pink-light": "#FFD6E0",
        "zl-pink-light-super": "#FFF5F9",
        "zl-lilac": "#FEB3F1",
        "zl-purple": "#E8C8FF",
        "zl-aqua": "#7BC5AC",
        "zl-green": "#C1E9DC",
        "zl-green-dark": "#8BB1A5",
        "zl-green-light": "#EDFDF8",
      },
      fontFamily: {
        Parisienne: ["Parisienne", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
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
        "7xl": [
          "4.5rem",
          {
            lineHeight: "6.75rem",
          },
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      margin: {
        15: "60px",
        17: "68px",
      },
      boxShadow: {
        "zl-md": "0px 1px 3px rgba(77, 77, 77, 0.35)",
        "zl-lg": "4px 2px 10px rgba(0, 0, 0, 0.15)",
        "zl-xl": " 0px 1px 8px rgba(0, 0, 0, 0.25);",
      },
      brightness: {
        45: "0.45",
      },
    },
  },
  plugins: [],
};
