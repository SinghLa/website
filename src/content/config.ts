import { defineCollection, z } from 'astro:content';

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
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const workInProgress = defineCollection({
    schema: z.object({
        title: z.string(),
        abstract: z.string(),
        coauthors: z.array(
            z.object({
                name: z.string(),
                link: z.string().url().optional()
            })
        ),
        draft: z.boolean()
    })
});

const workingPaper = defineCollection({
    schema: z.object({
        title: z.string(),
        abstract: z.string(),
        coauthors: z.array(
            z.object({
                name: z.string(),
                link: z.string().url().optional()
            })
        ),
        draft: z.boolean()
    })
});

const published = defineCollection({
    schema: z.object({
        title: z.string(),
        abstract: z.string(),
        coauthors: z.array(
            z.object({
                name: z.string(),
                link: z.string().url().optional()
            })
        ),
        draft: z.boolean()
    })
});

export const collections = { pages, workInProgress, workingPaper, published };
