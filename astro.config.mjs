// @ts-nocheck
// Note: `metrics` works at runtime but flags a spurious type error because
// starlight-blog is typed against a slightly older Zod than Astro 7.3 ships.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	// The GitHub Pages project URL. For local development, the Nix dev shell
	// exports SITE_URL=http://localhost:4321 so RSS/sitemap/canonical links
	// point at the dev server.
	site: process.env.SITE_URL ?? 'https://RTSAjwad.github.io',
	base: '/jlab_website',
	integrations: [
		starlight({
			title: 'Japanese Like a Breeze',
			description: 'Easily learn Japanese with anime and other movies.',
			logo: {
				src: './src/assets/logo.png',
				alt: 'Japanese Like a Breeze',
				replacesTitle: true,
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [
				{
					icon: 'patreon',
					label: 'Patreon',
					href: 'https://www.patreon.com/jlabjapanese',
				},
				{
					icon: 'email',
					label: 'Email',
					href: 'mailto:japaneselikeabreeze@gmail.com',
				},
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: "Beginner's Course", link: '/guides/beginners/' },
						{
							label: 'Using Without the Addon',
							link: '/guides/course-without-addon/',
						},
						{ label: 'Intermediate & Advanced', link: '/guides/intermediate/' },
						{ label: 'How to Continue', link: '/guides/how-to-continue/' },
						{ label: 'How to Practice Speaking', link: '/guides/speaking/' },
					],
				},
				{
					label: 'Decks',
					items: [
						{ label: 'All Decks', link: '/decks/' },
						{ label: 'Subs2srs Decks', link: '/decks/subs2srs/' },
						{ label: 'Troubleshooting', link: '/decks/troubleshooting/' },
					],
				},
				{
					label: 'Anki Addon',
					items: [
						{ label: 'Manual', link: '/addon/manual/' },
						{ label: 'Card Customization', link: '/addon/card-customization/' },
						{ label: 'Card Management', link: '/addon/card-management/' },
						{ label: 'Intermediate Deck Manual', link: '/addon/intermediate-deck/' },
						{ label: 'Linux & Mac', link: '/addon/linux-mac/' },
						{ label: 'Important Changes', link: '/addon/changes/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'FAQ', link: '/reference/faq/' },
						{ label: 'Glossary', link: '/reference/glossary/' },
						{ label: 'Grammar Cheat Sheet', link: '/reference/cheat-sheet/' },
						{ label: 'Delete Your Flashcards', link: '/reference/delete-flashcards/' },
						{
							label: 'Googling Japanese Grammar',
							link: '/reference/googling-grammar/',
						},
					],
				},
				{
					label: 'About',
					items: [
						{ label: 'About Jlab', link: '/about/' },
						{ label: 'Contact', link: '/contact/' },
						{ label: 'Newsletter', link: '/newsletter/' },
					],
				},
			],
			plugins: [
				starlightBlog({
					title: 'Blog',
					authors: {
						joe: {
							name: 'Joe',
						},
					},
					metrics: {
						readingTime: true,
						words: 'rounded',
					},
				}),
			],
		}),
	],
});
