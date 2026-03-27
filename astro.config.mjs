// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeSix from '@six-tech/starlight-theme-six'

// https://astro.build/config
export default defineConfig({
	site: 'https://metavisage.projecthost.dev',
	integrations: [
		starlight({
			plugins: [
				starlightThemeSix({
					navLinks: [
						{
							label: 'Docs',
							link: '/getting-started',
						}
					],
					footerText: 'MetaVisage - Open Source Project'
				})
			],
			title: 'MetaVisage',
			logo: {
				replacesTitle: true,
				light: './src/assets/metavisage-light.png',
				dark: './src/assets/metavisage-dark.png',
			},
			social: [
				{ icon: 'download', label: 'Download', href: 'https://github.com/cmershon2/MetaVisage/releases' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/cmershon2/MetaVisage' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
