import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.lachisingh.com',
    integrations: [mdx(), sitemap(), react()],
    redirects: {
        '/projects': '/#research',
        '/research': '/#research',
        '/teaching': '/#teaching'
    },
    vite: {
        plugins: [tailwindcss()]
    }
});
