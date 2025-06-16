import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({ 
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),  
        description: z.string(),
        featuredImage: z.object({
            url: z.string(),
            alt: z.string()
        }).optional()
    })
});

const course = defineCollection({
    loader: glob({ base: './src/content/course', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        duration: z.string(),
        level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
        featuredImage: z.object({
            url: z.string(),
            alt: z.string()
        }).optional()
    })
});

const theRiseOfIntelligence = defineCollection({
    loader: glob({ base: './src/content/the-rise-of-intelligence', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        featuredImage: z.object({
            url: z.string(),
            alt: z.string()
        }).optional()
    })
});

export const collections = {
    blog,
    course,
    theRiseOfIntelligence
};