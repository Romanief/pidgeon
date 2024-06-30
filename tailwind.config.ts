import { League_Spartan } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pWhite": "#E6F0FC",
        "pSlate": "#424564",
        "pBlue": "#86A4CA",
        "pPurple": "#874A97",
        "pTeal": "#5DDDD0",
        "dirtWhite": "#F5F9FF",
        "shadow": "#F5F9FF"
      },
      fontFamily: {
        "league" : ["League_Sparta", "Serif"]
      }
    },
  },
  plugins: [],
};
export default config;
