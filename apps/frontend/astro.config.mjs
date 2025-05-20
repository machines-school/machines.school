// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
    site: 'https://machines.school',
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        rehypePlugins: [rehypeSlug],
    },
});
