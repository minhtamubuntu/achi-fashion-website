import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('Phong cách'),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    productName: z.string(),
    cover: z.string().optional(),
    shopeeUrl: z.string().url().optional(),
    tiktokUrl: z.string().url().optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, reviews };
