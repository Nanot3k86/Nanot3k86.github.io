import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://shiningform.com',
  integrations: [
    tailwind(), 
    sanity({ projectId: 'puh7k8ji', dataset: 'production', useCdn: false }), 
    sitemap()
  ],
});