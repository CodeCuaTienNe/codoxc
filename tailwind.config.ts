import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: "#B8D8E8",
          pink: "#FFD1DC",
          green: "#C1E1C1",
          yellow: "#FDFD96",
          purple: "#D8B FD",
          peach: "#FFD4B2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
