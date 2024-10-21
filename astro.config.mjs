import { defineConfig } from 'astro/config';
import { remarkSidenotes } from './remark-sidenotes.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://pd76.github.io',
  markdown: {
    remarkPlugins: [remarkSidenotes],
  },
});
