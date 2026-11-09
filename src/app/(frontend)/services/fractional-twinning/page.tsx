import cx from 'clsx';
import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import CtaBand from '@/components/ui/CtaBand';
import PartnerCard from '@/components/ui/PartnerCard';
import coast from '@/assets/images/card-twinning-coast.png';
import { routes } from '@/data/site';
import { roster } from '@/data/partners';
import './fractional-twinning.css';


export const metadata = {
  title: "Fractional Twinning | Two Fractional Executives, One Leadership System",
  description: "Fractional Twinning pairs two part-time senior executives with joint accountability, shared KPIs, and unified reporting — the natural extension of the Fractional CMO practice.",
};


export default function FractionalTwinning(props: any) {

const pairings = [
  {
    name: 'Identical Twinning',
    a: 'CMO',
    b: 'CMO',
    text: 'Two executives mirror the same role to add capacity and redundancy, such as two Fractional CMOs splitting brand and demand generation.',
  },
  {
    name: 'Non-identical Twinning',
    a: 'CMO',
    b: 'CRO',
    text: 'Two executives fill complementary skill gaps, such as CMO plus CRO, or CFO plus COO.',
  },
];

const functionsCovered = ['Finance', 'Technology', 'Operations', 'HR', 'Revenue'];

const complements = [
  {
    label: 'Reduces key-person dependency.',
    text: 'Twin leadership nurtures strategic context, ensures continuity, and strengthens succession resilience.',
    tone: 'dark',
  },
  {
    label: 'Capability coverage & faster execution.',
    text: 'One twin builds strategy, the other operationalizes it; together they span a full function’s lifecycle.',
    tone: 'teal',
  },
  {
    label: 'Higher decision quality.',
    text: 'Diverse viewpoints strengthen diagnosis and option generation in ambiguous, fast-moving markets.',
    tone: 'mist',
  },
];

// Each function's role in a twin pairing; tone steps from the foundation outward.
const functionRoi = [
  {
    fn: 'CMO / Marketing',
    role: 'The foundation function',
    text: 'CMO is a natural foundation function for Twinning because growth decisions intersect with revenue operations, finance, product, data, and technology.',
    tone: 'dark',
  },
  {
    fn: 'CFO / Finance',
    role: 'The governance function',
    text: 'CFO is the common governance twin because the role converts operating choices into cash, margin, risk, and capital outcomes.',
    tone: 'teal',
  },
  {
    fn: 'CTO / Technology',
    role: 'The diligence function',
    text: 'CTO is the disciplined twin, turning technical uncertainty into executive decisions, compliance, defensibility, and enterprise trust.',
    tone: 'mist',
  },
  {
    fn: 'COO / Operations',
    role: 'The discipline function',
    text: 'COO Twinning builds the operating system for accountable execution and scale readiness.',
    tone: 'surface',
  },
];

const teaser = roster.slice(0, 3);
  return (
    <>
<Shell path="/services/fractional-twinning">
  <PageHeader
    title="Fractional Twinning"
    crumbs={[{ label: 'Services' }]}
    lede="From one fractional leader to a fractional leadership system."
    actions={<>
      <a className="btn btn-primary" href={routes.bookConversation}>Scope a Twinning pairing</a>
    </>}
    aside={<figure className="system panel">
      <ul className="system__terms">
        <li>Joint accountability</li>
        <li>Shared KPIs</li>
        <li>Unified reporting</li>
      </ul>
      <figcaption>Two fractional executives, presented to the organization as a single leadership system.</figcaption>
    </figure>}
  />

  <section className="what container section" aria-labelledby="what-title">
    <div className="split what__head">
      <h2 id="what-title" className="h2">What Twinning is</h2>
      <div className="what__text">
        <p>
          Fractional Twinning pairs two part-time senior executives — most commonly a Fractional CMO and CRO, or a CFO and COO —
          to jointly deliver the scope of a single full-time leadership role, with joint accountability, shared KPIs, and
          unified reporting rather than parallel silos.
        </p>
        <p>
          The same principles that make a Fractional CMO effective — objectivity, speed, cost discipline, and outcome
          accountability — apply when two fractional leaders are twinned to cover a fuller commercial or operational lifecycle.
          It’s the natural extension as complexity grows beyond a single function.
        </p>
      </div>
    </div>

    <ul className="pairings">
      {
        pairings.map((p, __i) => (
          <li key={__i} className="pairing">
            <div className="pairing__diagram" aria-hidden="true">
              <span className="pairing__node">{p.a}</span>
              <span className="pairing__link">
                <span>Shared KPIs</span>
              </span>
              <span className={cx(['pairing__node', { 'pairing__node--alt': p.a !== p.b }])}>{p.b}</span>
            </div>
            <h3 className="pairing__name">{p.name}</h3>
            <p>{p.text}</p>
          </li>
        ))
      }
    </ul>
  </section>

  <section className="functions container section" aria-labelledby="functions-title">
    <div className="split functions__head">
      <h2 id="functions-title" className="h2">Functions covered</h2>
      <p>Across SaaS, healthcare, manufacturing, professional services, and retail.</p>
    </div>
    <ul className="functions__grid">
      {functionsCovered.map((f, __i) => <li key={__i}>{f}</li>)}
    </ul>
  </section>

  <section className="complements container section" aria-labelledby="complements-title">
    <div className="section-head">
      <h2 id="complements-title" className="h2">How Twinning complements a single hire</h2>
    </div>
    <ul className="complements__grid">
      {
        complements.map((c, __i) => (
          <li key={__i} className={cx(['tile', `tile--${c.tone}`, { 'on-dark': c.tone === 'dark' || c.tone === 'teal' }])}>
            <h3 className="tile__title">{c.label}</h3>
            <p className="tile__text">{c.text}</p>
          </li>
        ))
      }
    </ul>
  </section>

  <section className="roi container section" aria-labelledby="roi-title">
    <div className="split roi__head">
      <h2 id="roi-title" className="h2">Twinning ROI by function</h2>
      <p>
        Twinning ROI has two clear dimensions: cost avoidance versus a full-time hire, and value creation through faster
        decisions, fewer errors, and stronger commercial outcomes — across every function.
      </p>
    </div>

    <ul className="roi__grid">
      {
        functionRoi.map((f, __i) => (
          <li key={__i} className={cx(['tile', `tile--${f.tone}`, { 'on-dark': f.tone === 'dark' || f.tone === 'teal' }])}>
            <p className="tile__label">{f.fn}</p>
            <h3 className="tile__title">{f.role}</h3>
            <p className="tile__text">{f.text}</p>
          </li>
        ))
      }
    </ul>

    <div className="engage">
      <p>
        If your needs span more than one function, we’ll scope a Fractional Twinning pairing as part of the same engagement.
      </p>
      <a className="btn btn-primary" href={routes.bookConversation}>Scope a Twinning pairing</a>
    </div>
  </section>

  <section className="network container section split" aria-labelledby="network-title">
    <div className="network__text">
      <h2 id="network-title" className="h2">Who you can twin with</h2>
      <p>
        Twinning is powered by exceptional leaders. Our network brings together senior specialists — from fractional CMOs and
        CTOs to ERP experts and brand strategists — who collaborate to strengthen every critical function. The result:
        consistent quality, deeper expertise, and meaningful impact.
      </p>
      <a className="text-link" href={routes.twinPartnerNetwork}>Meet the Twin Partner Network <span aria-hidden="true">→</span></a>
    </div>
    <ul className="network__list">
      {
        teaser.map((partner, __i) => (
          <li key={__i}>
            <PartnerCard partner={partner} compact />
          </li>
        ))
      }
    </ul>
  </section>

  <CtaBand
    title="Scope a Twinning pairing"
    body="Every Twinning pairing starts from an FCMO engagement and one shared outcome. Start with a conversation about where your leadership coverage runs thin."
    action={{ label: 'Start the conversation', href: routes.bookConversation }}
    image={coast}
  />
</Shell>
    </>
  );
}
