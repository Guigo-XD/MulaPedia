import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mulapedia.vercel.app', // troque pelo domínio real
});

const pages = defineCollection({
  loader: glob({
    base: './src/content',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string().optional(),
    order: z.number().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  pages,
};