import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import ResourceCard from '@/components/ui/ResourceCard';
import { routes } from '@/data/site';
import { getResources, isExternal, kindCategories, kindLabels } from '@/lib/resources';
import './slug.css';

/* A page for every resource that isn't hosted elsewhere: reports, and articles published through the CMS. */

/** “Case studies” → “case studies”, but keep acronyms like FCMO intact. */
const lowerCategory = (k: keyof typeof kindCategories) => kindCategories[k].replace(/^([A-Z])([a-z])/, (_, a: string, b: string) => a.toLowerCase() + b);

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getResources()).filter((r) => !isExternal(r)).map((r) => ({ slug: r.id }));
}

async function getEntry(slug: string) {
  return (await getResources()).find((r) => r.id === slug && !isExternal(r));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const entry = await getEntry((await params).slug);
  if (!entry) return {};
  return { title: `${entry.data.title} | Fractionalogic Resources`, description: entry.data.summary ?? entry.data.title };
}

export default async function ResourcePage({ params }: Params) {
  const { slug } = await params;
  const entry = await getEntry(slug);
  if (!entry) notFound();

  const { title, headline, invite, measures, principle, secondaryAction, summary, kind, audience, file, downloadLabel, companion, date } =
    entry.data;
  const [principleLead, ...principleRest] = (principle ?? '').split(/(?<=\.)\s+/);
  const hasBody = Boolean(entry.body?.trim());
  const related = (await getResources()).filter((r) => r.data.kind === kind && r.id !== entry.id).slice(0, 3);

  return (
    <Shell path={`${routes.resources}/${slug}`}>
      <PageHeader title={headline ?? title} current={title} crumbs={[{ label: 'Resources', href: routes.resources }]} lede={summary}>
        {invite && <p className="detail__invite">{invite}</p>}
        {measures && (
          <ul className="detail__measures" aria-label="What the case measures">
            {measures.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
        {principle && (
          <p className="detail__principle">
            <strong>{principleLead}</strong> {principleRest.join(' ')}
          </p>
        )}
        <p className="detail__meta">
          <span>{kindLabels[kind]}</span>
          {date && (
            <time dateTime={date.toISOString()}>
              {date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          )}
        </p>
        {kind === 'report' && (
          <div className="detail__actions">
            {file ? (
              <a className="btn btn-primary" href={file} download>
                {downloadLabel ?? `Download ${title}`}
              </a>
            ) : companion?.button ? (
              <a className="btn btn-primary" href={companion.url} rel="noopener">
                {companion.button}
              </a>
            ) : (
              <p className="detail__pending">PDF coming soon</p>
            )}
            {secondaryAction && (
              <a className="btn btn-secondary" href={secondaryAction.href}>
                {secondaryAction.label}
              </a>
            )}
            {companion && (file || !companion.button) && (
              <a className="text-link detail__companion" href={companion.url} rel="noopener">
                Free to read: {companion.label}
              </a>
            )}
          </div>
        )}
      </PageHeader>

      {(audience || hasBody) && (
        <div className="container detail">
          {audience && (
            <div className="detail__audience">
              <h2 className="detail__label">Written for</h2>
              <p>{audience}</p>
            </div>
          )}
          {hasBody && <article className="article" dangerouslySetInnerHTML={{ __html: marked.parse(entry.body) as string }} />}
        </div>
      )}

      {related.length > 0 && (
        <section className="container section related" aria-labelledby="related-title">
          <div className="related__head">
            <h2 id="related-title" className="h3">
              More {lowerCategory(kind)}
            </h2>
            <a className="text-link" href={`${routes.resources}?type=${kind}`}>
              All {lowerCategory(kind)} <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="related__grid">
            {related.map((r) => (
              <li key={r.id}>
                <ResourceCard resource={r} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Shell>
  );
}
