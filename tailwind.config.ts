import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "smTablet": "32.5em", // 520px
    },
    fontFamily: {
      spaceG: ["var(--font-space-g)", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: "#5C2DD5",
      secondary: "#7945FF",
      pink: "#FD6687",
      yellow: "#FFCE67",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
