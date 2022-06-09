const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        360: "360px",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in",
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
      colors: {
        primary: "#00ab49",
        "custom-red": "#be2d2b",
        title: "#323232",
        text: "#808080",
        border: "rgb(228, 228, 228)",
      },
      boxShadow: {
        def: "rgb(0 0 0 / 20%) 0px 1px 0px",
        card: "rgb(0 0 0 / 4%) 0px 3px 3px",
        btn: "rgb(0 171 73 / 25%) 0px 5px 10px",
        custom: "rgb(0 0 0 / 5%) 0px 10px 30px",
        header: "rgb(0 0 0 / 10%) 0px 4px 100px",
        menu: "rgb(234 46 46 / 20%) 0px 10px 15px",
      },
      flexGrow: {
        3: "3",
      },
      gridTemplateRows: {
        "custom-184": "184px 1fr",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addComponents, theme, addUtilites }) => {
      addComponents({
        ".btn-primary": {
          backgroundColor: "#00ab49",
          color: "white",
          width: "100%",
          borderRadius: "1.5rem",
        },
        ".btn-light": {
          backgroundColor: "rgb(74 222 128)",
          color: "white",
          width: "100%",
          borderRadius: "1.5rem",
        },
        ".active-menu": {
          color: "white",
          backgroundColor: "#be2d2b",
        },
      });
    }),
  ],
};
