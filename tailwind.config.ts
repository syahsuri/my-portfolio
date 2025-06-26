import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ovo: ["var(--font-ovo)"],
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};

export default config;