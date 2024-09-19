import type { Config } from "tailwindcss";

const config: Omit<Config, "content" | "darkMode"> = {
  theme: {
    fontFamily: {
      sans: ["Vazirmatn", "ui-sans-serif", "system-ui"],
    },
    colors: {
      primary: {
        DEFAULT: "oklch(49.12% 0.3096 275.75)",
        dark: "oklch(65.69% 0.196 275.75)",
      },
      secondary: {
        DEFAULT: "oklch(69.71% 0.329 342.55)",
        dark: "oklch(74.8% 0.26 342.55)",
      },
      accent: {
        DEFAULT: "oklch(76.76% 0.184 183.61)",
        dark: "oklch(74.51% 0.167 183.61)",
      },
      neutral: {
        DEFAULT: "#2B3440",
        dark: "#2a323c",
      },
      "neutral-content": {
        DEFAULT: "#D7DDE4",
        dark: "#A6ADBB",
      },
      "base-100": {
        DEFAULT: "oklch(100% 0 0)",
        dark: "#1d232a",
      },
      "base-200": {
        DEFAULT: "#F2F2F2",
        dark: "#191e24",
      },
      "base-300": {
        DEFAULT: "#E5E6E6",
        dark: "#15191e",
      },
      "base-content": {
        DEFAULT: "#1f2937",
        dark: "#A6ADBB",
      },
    },
  },
};
export default config;
