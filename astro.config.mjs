// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig(
  {
  site: 'https://khoo04.github.io',
  base: '/khoo04',
  vite: {
    plugins: [tailwindcss()],
  },
});
