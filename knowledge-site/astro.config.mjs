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
                  collapsed: true,
              },
              {
                  label: 'Account Setup',
                  autogenerate: { directory: 'setup' },
                  collapsed: true,
              },
              {
                label: 'Dashboard',
                autogenerate: { directory: 'dashboard' },
                collapsed: true,
              },
              {
                  label: 'Transaction Flow',
                  autogenerate: { directory: 'flow' },
                  collapsed: true,
              },
              {
                  label: 'Integration Guide',
                  autogenerate: { directory: 'integration' },
                  collapsed: true,
              },
              {
                  label: 'Compliance & Security',
                  autogenerate: { directory: 'security' },
                  collapsed: true,
              },
              {
                  label: 'FAQs',
                  slug: 'faq',
              },
              {
                  label: 'Support & Resources',
                  autogenerate: { directory: 'support' },
                  collapsed: true,
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});