// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Leanx Documentation',
          head: [
            {
                tag: 'meta',
                attrs: {
                    name: 'google-site-verification',
                    content: 'yrLJA1pSt1ty2eXZJtCTe5_5PQxDV1XhAqlKV3q1cVc'
                }
            }
          ],
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
                label: 'Merchant Portal ',
                autogenerate: { directory: 'portal' },
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