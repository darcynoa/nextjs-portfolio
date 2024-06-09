import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noah)"],
      },
      colors: {
        primary: "#1E1C1C",
        secondary: "#fffafa",
        accent: "#bb241f",
      },
    },
  },
  plugins: [],
};
export default config;
