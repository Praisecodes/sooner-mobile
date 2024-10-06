/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary": "#09090B",
      "accent": "#6610F2",
      "grey": "#1f1f1f",
      "grey-100": "#a3a3a3",
      "grey-200": "#171717",
      "grey-300": "#262626",
      "white": "#FAFAFA",
    },
    extend: {
      fontFamily: {
        "inter": ["inter"],
        "inter-bold": ["inter-bold"],
        "inter-light": ["inter-light"],
        "inter-thin": ["inter-thin"],
        "inter-semibold": ["inter-semibold"],
      }
    },
  },
  plugins: [],
}
