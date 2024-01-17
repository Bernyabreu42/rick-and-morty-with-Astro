import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site:'https://Bernyabreu42.github.io',
  base:'https://github.com/Bernyabreu42/rick-and-morty-with-Astro',
  integrations: [
    tailwind(),
    preact({ compat: true }),
  ]
});