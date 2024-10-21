import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pd76.github.io',
  markdown: {
    remarkPlugins: [remarkSidenotes],
  },
});
