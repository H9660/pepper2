/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fffaff",
          "200": "#151531",
          "300": "rgba(21, 21, 49, 0.6)",
          "400": "rgba(255, 250, 255, 0.1)",
          "500": "rgba(21, 21, 49, 0.8)",
          "600": "rgba(255, 250, 255, 0.8)",
        },
        blue: "#9d0aff",
        turquoise: "#00f59b",
        white: "#fff",
        indigo: "#845aff",
      },
      fontFamily: {
        inter: "Inter",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        xxs: "18px",
        small: "22px",
        base: "30px",
        large: "32px",
        xxl: "100px",
      },
    },
    fontSize: {
      "3xs": "12px",
      "2xs": "13px",
      xs: "14px",
      sm: "15px",
      base: "16px",
      lg: "20px",
      xl: "22px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "34px",
      "5xl": "48px",
      "6xl": "60px",
    },
    screens: { lg: { max: "1200px" } },
  },
  corePlugins: { preflight: false },
};
