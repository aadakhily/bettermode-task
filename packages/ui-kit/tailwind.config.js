/** @type {import('tailwindcss').Config} */

import sharedTailwindConfig from "@app/tailwind-config";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  presets: [sharedTailwindConfig],
};
