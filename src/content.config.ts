// @ts-nocheck -- Astro 7.3 bundles a newer Zod than starlight-blog is typed against;
// this produces spurious type-identity errors. Runtime build is unaffected.
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: (context) => blogSchema(context),
		}),
	}),
};
