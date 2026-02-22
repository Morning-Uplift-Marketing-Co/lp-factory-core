import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://scratchpetusa.com',
  build: {
    assets: '_assets',
  },
});
