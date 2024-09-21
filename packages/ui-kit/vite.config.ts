import { defineConfig } from "vite";
import { glob } from "glob";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: [
              "src/components/**/*.d.ts",
              "src/components/**/*.stories.tsx",
              "src/components/**/*.test.{ts,tsx}",
            ],
          })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
