import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        packs: {
          red: "#c41e3a",
          "red-dark": "#a01830",
          gray: "#374151",
          "gray-light": "#6b7280",
        },
      },
    },
  },
  plugins: [],
};
export default config;
