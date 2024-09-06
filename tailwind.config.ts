import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "23.4375em", // 375px
      smTablet: "32.5em", // 520px
      mediumTablet: "38.75em", // 620px
      tablet: "48em", // 768px
      desktop: "64em", // 1024px
    },
    fontFamily: {
      spaceG: ["var(--font-space-g)", "sans-serif"],
    },
    gridTemplateColumns: {
      navbar: "auto 1fr auto",
      mainGameGrid: "141px 60px 1fr 60px 141px",
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
      fontSize: {
        scoreSmallHeading: "min(max(12px,2.76vw),16px)",
        scoreLargeHeading: "min(max(16px,9.7vw),56px)",
      },
    },
  },
  plugins: [],
};
export default config;
