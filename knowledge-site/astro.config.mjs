// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Leanx Documentation',
		  customCss: ['./src/styles/global.css'],
          sidebar: [
              {
                  label: 'Getting Started',
                  autogenerate: { directory: 'start' },
              },
              {
                  label: 'Account Setup',
                  autogenerate: { directory: 'setup' },
                  collapsed: true,
              },
              {
                  label: 'Integration Guide',
                  autogenerate: { directory: 'integration' },
                  collapsed: true,
              },
              {
                  label: 'Transaction Flow',
                  autogenerate: { directory: 'flow' },
                  collapsed: true,
              },
              {
                  label: 'Compliance & Security',
                  autogenerate: { directory: 'security' },
                  collapsed: true,
              },
              {
                  label: 'FAQs',
                  autogenerate: { directory: 'faq' },
                  collapsed: true,
              },
              {
                  label: 'Support & Resources',
                  autogenerate: { directory: 'resource' },
                  collapsed: true,
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});