import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages requires a static output
  output: 'static',
  
  // Your custom domain
  site: 'https://shiningform.com',
  
  // '/' is correct for the primary username.github.io repository
  base: '/', 

  integrations: [
    tailwind(), 
    sanity({ 
      projectId: 'puh7k8ji', 
      dataset: 'production', 
      useCdn: false,
      // This allows the studio to link back to your local/prod site
      stega: {
        enabled: true,
        studioUrl: 'http://localhost:3333',
      },
    }), 
    sitemap()
  ],
});