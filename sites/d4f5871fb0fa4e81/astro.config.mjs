import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://LoanBridges.com',
  build: {
    assets: '_assets',
  },
});
