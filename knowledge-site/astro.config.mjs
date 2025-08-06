// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'Leanx Ultimate Guide',
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
});
