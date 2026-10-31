import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/*
 * Resources are the only CMS-managed content. Entries live as Markdown today; to move to a CMS,
 * replace this loader with the CMS's Astro loader (or a fetch-based one) that returns the same
 * schema. Nothing else in the site reads the collection directly — see src/lib/resources.ts.
 */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    /** Page heading when it should differ from the card title (cards and breadcrumbs keep `title`). */
    headline: z.string().optional(),
    /** One closing line under the summary, inviting the read. */
    invite: z.string().optional(),
    /** Report pages: what the piece measures, shown as a ruled row of terms. */
    measures: z.array(z.string()).optional(),
    /** Report pages: a short emphasised principle; the first sentence is set bold. */
    principle: z.string().optional(),
    /** Report pages: a second action beside the read/download action. */
    secondaryAction: z.object({ label: z.string(), href: z.string() }).optional(),
    kind: z.enum(['report', 'pov', 'case-study', 'series', 'writing']),
    summary: z.string().optional(),
    audience: z.string().optional(),
    /** Report PDF path under /public (e.g. /downloads/fcmo-business-case.pdf). Omit until the file exists. */
    file: z.string().optional(),
    downloadLabel: z.string().optional(),
    /**
     * Card thumbnail: a path relative to the entry (optimised at build) or an absolute URL from a CMS.
     * Without one, the card shows the brand-toned photo for its category.
     */
    thumbnail: image().or(z.url()).optional(),
    thumbnailAlt: z.string().optional(),
    /** Articles hosted elsewhere. Reports, and entries with no url but a Markdown body, get their own page. */
    url: z.url().optional(),
    publisher: z.enum(['LinkedIn', 'WordPress']).optional(),
    companion: z.object({ label: z.string(), url: z.url(), button: z.string().optional() }).optional(),
    /** Report audience: buyers see these first; roster-facing reports sit apart. */
    forRoster: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { resources };
