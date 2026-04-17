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
        yellow: "#F5C400",
        charcoal: "#1a1a1a",
        "charcoal-mid": "#242424",
        "charcoal-light": "#2e2e2e",
        muted: "#8a8a8a",
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
