import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const workInProgress = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/workInProgress' }),
    schema: z.object({
        title: z.string(),
        abstract: z.string().optional(),
        coauthors: z.string().optional(),
        funding: z.string().optional(),
        note: z.string().optional(),
        draft: z.boolean()
    })
});

const workingPaper = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/workingPaper' }),
    schema: z.object({
        title: z.string(),
        abstract: z.string(),
        coauthors: z.string().optional(),
        funding: z.string().optional(),
        links: z.string().optional(),
        note: z.string().optional(),
        draft: z.boolean()
    })
});

const published = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/published' }),
    schema: z.object({
        title: z.string(),
        abstract: z.string(),
        coauthors: z.string().optional(),
        funding: z.string().optional(),
        note: z.string().optional(),
        draft: z.boolean()
    })
});

export const collections = { pages, workInProgress, workingPaper, published };
