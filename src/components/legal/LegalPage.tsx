import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import { legal, legalUpdated } from '@/data/legal';
import './LegalPage.css';

/* Legal pages share one template; the text lives in src/data/legal.ts. */

export type Slug = keyof typeof legal;

export function legalMetadata(slug: Slug): Metadata {
  const page = legal[slug];
  return { title: `${page.title} | Fractionalogic`, description: `Fractionalogic ${page.title}.`, robots: { index: false, follow: false } };
}

/* Escape the text, then link URLs and email addresses. */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (s: string) =>
  esc(s)
    .replace(/https?:\/\/[^\s)]+?(?=[.,;)]?(\s|$))/g, (u) => `<a href="${u}" rel="noopener">${u.replace(/^https?:\/\//, '')}</a>`)
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+\w/g, (m) => `<a href="mailto:${m}">${m}</a>`);

export default function LegalPage({ slug }: { slug: Slug }) {
  const page = legal[slug];

  return (
    <Shell path={`/${slug}`}>
      <PageHeader title={page.title} lede={page.lede}>
        <p className="legal__updated">
          Last updated <time dateTime={legalUpdated.iso}>{legalUpdated.label}</time>
        </p>
      </PageHeader>
      <div className="container legal-body">
        <div className="legal">
          {page.blocks.map((b, i) =>
            'h' in b ? (
              <h2 key={i}>{b.h}</h2>
            ) : 'p' in b ? (
              <p key={i} dangerouslySetInnerHTML={{ __html: rich(b.p) }} />
            ) : 'ul' in b ? (
              <ul key={i}>
                {b.ul.map((li, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: rich(li) }} />
                ))}
              </ul>
            ) : (
              <div key={i} className="legal__table">
                <table>
                  <thead>
                    <tr>
                      {b.table.head.map((c) => (
                        <th key={c} scope="col">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.table.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          )}
        </div>
      </div>
    </Shell>
  );
}
