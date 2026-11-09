import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import FilterGroup from '@/components/ui/FilterGroup';
import ResourceCard from '@/components/ui/ResourceCard';
import { faqs } from '@/data/faqs';
import { getResources, kindCategories, type ResourceKind } from '@/lib/resources';
import './index.css';


export const metadata = {
  title: "Resources | Fractional CMO Reports, Case Studies and FAQs | Fractionalogic",
  description: "Reports, points of view, case studies, and answers on Fractional CMO and Fractional Twinning engagements — in one place.",
};


export default async function Index(props: any) {

const resources = await getResources();
const kinds = [...new Set(resources.map((r) => r.data.kind))] as ResourceKind[];
const categories = kinds.map((kind) => ({
  value: kind,
  label: kindCategories[kind],
  count: resources.filter((r) => r.data.kind === kind).length,
}));

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
  return (
    <>
<Shell path="/resources">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

  <PageHeader
    title="Resources"
    lede="Reports, points of view, case studies, and answers — in one place. Data, KPIs, and named sources back every claim on this site."
  />

  <section className="library container" aria-label="Resource library">
    <FilterGroup label="Filter resources by type" options={categories} total={resources.length} noun={['resource', 'resources']} param="type">
      <ul className="library__grid">
        {
          resources.map((r, __i) => (
            <li key={__i} data-filter-tags={r.data.kind}>
              <ResourceCard resource={r} headingLevel="h2" />
            </li>
          ))
        }
      </ul>
    </FilterGroup>
  </section>

  <section id="faq" className="faq container section" aria-labelledby="faq-title">
    <h2 id="faq-title" className="h2">Frequently asked questions</h2>
    <div className="faq__list">
      {
        faqs.map((f, __i) => (
          <details key={__i} className="faq__item">
            <summary>
              <span>{f.question}</span>
              <svg className="faq__icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M8 3v10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq__answer">
              <p>{f.answer}</p>
              {f.link && (
                <a className="text-link" href={f.link.href}>
                  {f.link.label} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </details>
        ))
      }
    </div>
  </section>
</Shell>
    </>
  );
}
