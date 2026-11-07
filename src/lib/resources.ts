/*
 * Resources, read from Markdown in src/content/resources for now.
 * Phase 2 swaps getAllResources() for a Payload query that returns the same shape,
 * so nothing else in the site needs to change.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { StaticImageData } from 'next/image';
import mountain from '@/assets/images/card-fcmo-mountain.png';
import coast from '@/assets/images/card-twinning-coast.png';
import amber from '@/assets/images/stat-amber.png';
import waterfall from '@/assets/images/banner-waterfall.png';
import { resourceImages } from './resource-images';
import { routes } from '@/data/site';

export type ResourceKind = 'report' | 'pov' | 'case-study' | 'series' | 'writing';

export interface ResourceData {
  title: string;
  /** Page heading when it should differ from the card title (cards and breadcrumbs keep `title`). */
  headline?: string;
  /** One closing line under the summary, inviting the read. */
  invite?: string;
  /** Report pages: what the piece measures, shown as a ruled row of terms. */
  measures?: string[];
  /** Report pages: a short emphasised principle; the first sentence is set bold. */
  principle?: string;
  /** Report pages: a second action beside the read/download action. */
  secondaryAction?: { label: string; href: string };
  kind: ResourceKind;
  summary?: string;
  audience?: string;
  /** Report PDF path under /public. Omit until the file exists. */
  file?: string;
  downloadLabel?: string;
  /** Card thumbnail: a bundled image or an absolute URL from the CMS. */
  thumbnail?: StaticImageData | string;
  thumbnailAlt?: string;
  /** Articles hosted elsewhere. Reports, and entries with no url but a body, get their own page. */
  url?: string;
  publisher?: 'LinkedIn' | 'WordPress';
  companion?: { label: string; url: string; button?: string };
  forRoster: boolean;
  featured: boolean;
  order: number;
  date?: Date;
}

export interface Resource {
  id: string;
  data: ResourceData;
  body: string;
}

/** Singular label, used on a card. */
export const kindLabels: Record<ResourceKind, string> = {
  report: 'Report',
  pov: 'Point of view',
  'case-study': 'Case study',
  series: 'FCMO series',
  writing: 'From the founder',
};

/** Plural label, used on the category filter. */
export const kindCategories: Record<ResourceKind, string> = {
  report: 'Reports',
  pov: 'Points of view',
  'case-study': 'Case studies',
  series: 'FCMO series',
  writing: 'From the founder',
};

/** Brand-toned stand-in thumbnails until an entry supplies its own; crops keep shared photos distinct. */
const fallbackCovers: Record<ResourceKind, { image: StaticImageData; position: string }> = {
  report: { image: mountain, position: '50% 45%' },
  pov: { image: coast, position: '20% 50%' },
  'case-study': { image: amber, position: '50% 50%' },
  series: { image: waterfall, position: '65% 50%' },
  writing: { image: coast, position: '90% 85%' },
};

const DIR = path.join(process.cwd(), 'src/content/resources');

function load(file: string): Resource {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), 'utf8'));
  const thumb = typeof data.thumbnail === 'string' ? data.thumbnail : undefined;
  return {
    id: file.replace(/\.md$/, ''),
    body: content.trim(),
    data: {
      ...(data as ResourceData),
      thumbnail: thumb ? (/^https?:/.test(thumb) ? thumb : resourceImages[path.basename(thumb)]) : undefined,
      forRoster: Boolean(data.forRoster),
      featured: Boolean(data.featured),
      order: typeof data.order === 'number' ? data.order : 100,
      date: data.date ? new Date(data.date) : undefined,
    },
  };
}

const byOrder = (a: Resource, b: Resource) => a.data.order - b.data.order;

export function getAllResources(): Resource[] {
  return fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).map(load);
}

/**
 * A report with nothing to read yet (no PDF, no readable companion article) stays
 * off the site entirely, and appears automatically once its `file` is added.
 */
export const isPublishable = (r: Resource) => r.data.kind !== 'report' || Boolean(r.data.file || r.data.companion?.button);

export async function getResources() {
  return getAllResources().filter(isPublishable).sort(byOrder);
}

export async function getReport(id: string) {
  return (await getResources()).find((r) => r.data.kind === 'report' && r.id === id);
}

/** Articles published elsewhere link out; reports, and anything without an external url, get a page here. */
export const isExternal = (r: Resource) => r.data.kind !== 'report' && Boolean(r.data.url);

export const resourceHref = (r: Resource) => (isExternal(r) ? r.data.url! : `${routes.resources}/${r.id}`);

/** For "Download…" buttons elsewhere on the site: the PDF when it exists, otherwise the report's page. */
export const reportDownloadHref = (r: Resource) => r.data.file ?? resourceHref(r);

/* Entries sharing a stand-in photo each get their own crop, derived from the id so it never shifts between builds. */
const crops = [
  { x: 50, y: 50, zoom: 1 },
  { x: 20, y: 30, zoom: 1.35 },
  { x: 80, y: 70, zoom: 1.5 },
  { x: 35, y: 80, zoom: 1.25 },
  { x: 70, y: 25, zoom: 1.6 },
  { x: 10, y: 60, zoom: 1.4 },
];

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

export function resourceThumbnail(r: Resource) {
  if (r.data.thumbnail) return { src: r.data.thumbnail, alt: r.data.thumbnailAlt ?? '', position: 'center', zoom: 1, isFallback: false };
  const { image, position } = fallbackCovers[r.data.kind];
  const crop = crops[hash(r.id) % crops.length];
  return {
    src: image,
    alt: '',
    position: crop.zoom === 1 ? position : `${crop.x}% ${crop.y}%`,
    zoom: crop.zoom,
    isFallback: true,
  };
}

/** Where the piece opens, shown on the card. */
export function resourceSource(r: Resource) {
  if (r.data.kind === 'report') return r.data.file ? 'PDF download' : r.data.companion?.button ? 'Free read' : 'PDF coming soon';
  return isExternal(r) ? `On ${r.data.publisher ?? 'the web'}` : 'On this site';
}
