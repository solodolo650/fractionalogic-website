import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import CtaBand from '@/components/ui/CtaBand';
import waterfall from '@/assets/images/banner-waterfall.png';
import { routes } from '@/data/site';
import { getReport, reportDownloadHref } from '@/lib/resources';
import './strategic-partners.css';


export const metadata = {
  title: "Strategic Partners | Magic Pencils and Fractionalogic",
  description: "Fractionalogic's strategic partnership with Magic Pencils closes the seam between market readiness and revenue execution, with Momentum Zone, Huddle, and Skill Forge supporting every FCMO engagement.",
};


export default async function StrategicPartners(props: any) {

const deepDive = await getReport('partner-methodology-deep-dive');
// Deep-dive actions show only once the report is published (see isPublishable).
const deepDiveHref = deepDive ? reportDownloadHref(deepDive) : undefined;
const deepDiveFile = Boolean(deepDive?.data.file);

// The partnership's three principles: each pair reads "this, before that".
const principles = [
  { lead: 'Evidence', rest: 'before assumption' },
  { lead: 'Ownership', rest: 'before activity' },
  { lead: 'Capability', rest: 'before dependency' },
];

const outcomes = [
  'Decisions made in days instead of quarters.',
  'Non-obvious risk and opportunity surfaced from people who never reach the boardroom.',
  'Execution — because every session ends in an owned commitment.',
];

const instruments = [
  {
    name: 'Momentum Zone',
    text: 'A structured readiness assessment that sharpens the opening diagnostic, pinpointing whether a growth stall is a positioning, sales-execution, or product problem.',
  },
  {
    name: 'Huddle',
    text: 'A collective-intelligence platform that surfaces frontline insight fast, feeding the Fractional CMO wider evidence than scheduled interviews alone.',
  },
  {
    name: 'Skill Forge',
    text: 'A capability index that tracks whether the team built during the engagement can execute the plan after it ends.',
  },
];

const frameworks = [
  { name: 'C3', steps: ['Consult', 'Coach', 'Conquer'], text: 'The delivery philosophy behind every FCMO engagement.' },
  { name: 'R4', steps: ['Repair', 'Replenish', 'Recreate', 'Relaunch'], text: 'The brand-renewal sequence an engagement can lead to.' },
];
  return (
    <>
<Shell path="/partners/strategic-partners">
  <PageHeader
    title="Measure what is holding growth back."
    current="Strategic Partners"
    crumbs={[{ label: 'Partners' }]}
    lede="Then put senior leadership behind the answer."
    actions={<>
      <a className="btn btn-primary" href={routes.bookConversation}>Talk to the partners</a>
      {deepDiveHref && <a className="btn btn-secondary" href={deepDiveHref} download={deepDiveFile || undefined}>Take the deep dive</a>}
    </>}
    aside={<figure className="pact panel">
      <figcaption className="pact__title">
        <span><strong>Magic</strong> meets <strong>Logic</strong></span>
        <span className="pact__sub">A partnership of Thought + Leadership</span>
      </figcaption>
      <div className="pact__pair" aria-hidden="true">
        <span className="pact__side">
          <span className="pact__name">Magic Pencils</span>
          <span className="pact__role">Thought</span>
        </span>
        <span className="pact__join">+</span>
        <span className="pact__side pact__side--logic">
          <span className="pact__name">Fractionalogic</span>
          <span className="pact__role">Leadership</span>
        </span>
      </div>
      <ul className="pact__principles">
        {
          principles.map((pr) => (
            <li>
              <strong>{pr.lead}</strong>
              <span>{pr.rest}</span>
            </li>
          ))
        }
      </ul>
    </figure>}
  />

  <section className="mp container section" aria-labelledby="mp-title">
    <div className="mp__intro">
      <h2 id="mp-title" className="h2">Magic Pencils</h2>
      <p>
        Chennai-based Magic Pencils is a measurement-first transformation practice. Its instruments show where the organization
        stands, surface the commitments people will own, and test whether the required capability exists. The client keeps the
        software, data, baseline, and the ability to re-run the reading.
      </p>
    </div>

  </section>

  <section className="seams container section" aria-labelledby="seams-title">
    <div className="section-head">
      <h2 id="seams-title" className="h2">Growth rarely stalls in one function. It stalls in the seams.</h2>
      <p>
        Magic Pencils prevents the engagement from beginning with assumptions. Fractionalogic prevents the diagnosis from
        ending as a report.
      </p>
    </div>

    <div className="seam-map" role="img" aria-label="Magic Pencils covers readiness, decisions and capability; the Fractional CMO turns each reading into positioning, go-to-market plans and pipeline outcomes.">
      <p className="seam-map__owner">Magic Pencils instruments</p>
      <ol className="seam-map__track">
        <li>Readiness</li>
        <li>Decisions</li>
        <li>Capability</li>
      </ol>
      <p className="seam-map__owner seam-map__owner--fcmo">The FCMO turns each reading into</p>
      <ol className="seam-map__track seam-map__track--fcmo">
        <li>Positioning</li>
        <li>Go-to-market plans</li>
        <li>Pipeline outcomes</li>
      </ol>
    </div>

    <div className="outcomes">
      <h3 className="outcomes__title">What the client gets</h3>
      <ul className="outcomes__list">
        {outcomes.map((o) => <li>{o}</li>)}
      </ul>
    </div>
  </section>

  <section className="founder container section" aria-labelledby="senthil-title">
    <span className="founder__mark" aria-hidden="true">SB</span>
    <div className="founder__text">
      <h2 id="senthil-title" className="h3">Senthil Kumar Bellukutty</h2>
      <p className="founder__role">Founder, Magic Pencils Consulting</p>
      <p>
        Transformation consultant and leadership coach with over 25 years in technology, business consulting, and
        organizational transformation. Creator of Huddle, Momentum Zone, and Skill Forge.
      </p>
    </div>
  </section>

  <section className="instruments container section" aria-labelledby="instruments-title">
    <h2 id="instruments-title" className="h2">Three instruments support an FCMO engagement</h2>
    <ul className="rule-list">
      {
        instruments.map((i) => (
          <li>
            <h3 className="rule-list__label">{i.name}</h3>
            <p>{i.text}</p>
          </li>
        ))
      }
    </ul>

    <ul className="frameworks">
      {
        frameworks.map((f) => (
          <li className="framework surface">
            <h3 className="framework__name">{f.name}</h3>
            <ol className="framework__steps">
              {f.steps.map((step) => (
                <li>{step}</li>
              ))}
            </ol>
            <p>{f.text}</p>
          </li>
        ))
      }
    </ul>

    {deepDiveHref && (
    <div className="instruments__more">
      <p>Full mechanics for each instrument, and the C3 and R4 frameworks, are in the Partner Methodology Deep Dive.</p>
      <a className="btn btn-secondary" href={deepDiveHref} download={deepDiveFile || undefined}>
        {deepDiveFile ? 'Download the partner methodology deep dive' : 'See the partner methodology deep dive'}
      </a>
    </div>
    )}
  </section>

  <CtaBand
    title="Start with a diagnostic conversation."
    body="Every engagement starts with a diagnostic conversation on your current marketing leadership gap, growth stage, and go-to-market priorities."
    action={{ label: 'Book an FCMO Conversation', href: routes.bookConversation }}
    image={waterfall}
  />
</Shell>
    </>
  );
}
