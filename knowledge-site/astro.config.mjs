// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Leanx Ultimate Guide',
		  customCss: [
			'./src/styles/global.css'
		  ],
          sidebar: [
              {
                  label: 'Getting Started',
                  autogenerate: { directory: 'start' }
              },
              {
                  label: 'Account Setup',
                  autogenerate: { directory: 'setup' },
              },
              {
                  label: 'Integration Guide',
                  autogenerate: { directory: 'integration' }
              },
              {
                  label: 'Transaction Flow',
                  autogenerate: { directory: 'flow' }
              },
              {
                  label: 'Compliance & Security',
                  autogenerate: { directory: 'security' }
              },
              {
                  label: 'FAQs',
                  autogenerate: { directory: 'faq' }
              },
              {
                  label: 'Support & Resources',
                  autogenerate: { directory: 'resource' }
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});