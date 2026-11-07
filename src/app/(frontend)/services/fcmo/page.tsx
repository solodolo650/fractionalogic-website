import cx from 'clsx';
import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import CtaBand from '@/components/ui/CtaBand';
import mountain from '@/assets/images/card-fcmo-mountain.png';
import { routes } from '@/data/site';
import './fcmo.css';


export const metadata = {
  title: "Fractional CMO for Growth-Stage B2B SaaS | Fractionalogic",
  description: "Senior, revenue-accountable marketing leadership — embedded in your team, part-time in hours, full-time in ownership. How a Fractionalogic FCMO engagement works.",
};


export default function Fcmo(props: any) {

const steps = [
  { name: 'Diagnose', text: 'Establish where the business actually stands: ICP and market definition, positioning, and the growth constraint that matters most.' },
  { name: 'Decide', text: 'Convert the diagnosis into a go-to-market roadmap with named priorities, owners, and KPIs.' },
  { name: 'Build', text: 'Stand up demand generation, sales alignment, content, and MarTech as one connected system, not isolated activities.' },
  { name: 'Sustain', text: 'Run the operating rhythm, coach the internal team, and hand over capability that outlives the engagement.' },
];

// Bento order and tone are set here; the grid places tiles by their `span` class.
const coverage = [
  { area: 'Strategic Foundation', detail: 'ICP and market definition, brand positioning and messaging frameworks, and go-to-market roadmaps.', tone: 'dark', span: 'wide' },
  { area: 'C-Suite Strategic Advisory', detail: 'A sounding board for founders and CEOs on growth, fundraising readiness, and market expansion.', tone: 'mist', span: 'narrow' },
  {
    area: 'Demand Generation & Pipeline',
    detail: 'Full-funnel demand generation across SEO, content, email, paid, and ABM; lead funnel architecture; MQL and SQL definitions; growth experiments.',
    tone: 'teal',
    span: 'half',
  },
  { area: 'Sales & Revenue Alignment', detail: 'Sales enablement assets, pipeline velocity optimization, CRM configuration.', tone: 'surface', span: 'half' },
  { area: 'Brand & Content Leadership', detail: 'Content playbooks, product launches, customer lifecycle marketing.', tone: 'surface', span: 'third' },
  {
    area: 'MarTech & Performance Management',
    detail: 'KPI and OKR frameworks, MarTech stack selection, attribution and reporting, and budget allocation.',
    tone: 'mist',
    span: 'third',
  },
  { area: 'Team & Vendor Leadership', detail: 'Hiring, agency management, and coaching internal teams to self-sufficiency.', tone: 'surface', span: 'third' },
];

const stages = [
  {
    label: 'Early-stage startup',
    text: 'At a growth inflection point, needing brand visibility and a credible go-to-market plan. The FCMO establishes the ICP, positioning, and the first repeatable demand motion before committing headcount.',
  },
  {
    label: 'Established SME',
    text: 'Needs high-level marketing direction without full-time staff overhead. The FCMO brings structure, KPI discipline, and MarTech decisions, and coaches the existing team to run the system.',
  },
  {
    label: 'Larger business or business in transition',
    text: 'Rebranding, merger, pivot, or operating without dedicated marketing leadership. The FCMO supplies objective senior judgment unaffected by internal politics or legacy thinking, and — where complexity spans functions — becomes the anchor for a Twinning pairing.',
  },
];

const industries = [
  'IT and ITES',
  'FinTech and financial services',
  'Manufacturing and industrial',
  'Retail and e-commerce',
  'FMCG and food service',
  'Consumer durables',
  'Education and EdTech',
  'Healthcare and life sciences',
  'Trade associations',
  'Social services and nonprofits',
];

// Hero proof: the services companies rank highest in an FCMO engagement.
const topServices = [
  { name: 'Strategic planning', value: 92.67 },
  { name: 'Marketing strategy development', value: 88.67 },
  { name: 'Content strategy', value: 82.67 },
];

const benefits = [
  { name: 'Strategic Clarity', text: 'Align goals, priorities, and positioning in one accountable roadmap.' },
  { name: 'Lower Overhead', text: 'Access CMO-level expertise without the cost of a full-time hire.' },
  { name: 'Objective Perspective', text: 'Challenge assumptions, uncover blind spots, and make better decisions.' },
  { name: 'Flexible Leadership', text: 'Scale leadership involvement as your business needs change.' },
  { name: 'Proven Thinking', text: 'Apply cross-market insights to build your team’s knowledge.' },
  { name: 'Faster Execution', text: 'Move from scattered activity to focused decisions and action.' },
  { name: 'Lasting Capability', text: 'Strengthen your team, systems, and operating rhythms for the future.' },
];
  return (
    <>
<Shell path="/services/fcmo">
  <PageHeader
    title="Fractional CMO"
    current="Fractional CMO"
    crumbs={[{ label: 'Services' }]}
    lede="Fractional CMO is our core practice. We align marketing strategy, investment, and execution with your business priorities, balancing short-term needs with long-term brand strength. Get your senior marketing leadership without the cost and commitment of a full-time hire."
    actions={<>
      <a className="btn btn-primary" href={routes.bookConversation}>Talk to your FCMO</a>
    </>}
    aside={<figure className="compare" aria-labelledby="compare-caption">
      <figcaption id="compare-caption" className="compare__caption">Top-ranked FCMO services</figcaption>
      {
        topServices.map((svc) => (
          <div className="compare__row">
            <span className="compare__label">{svc.name}</span>
            <span className="compare__track">
              <span className="compare__bar compare__bar--lead compare__bar--pct" style={{ '--v': svc.value }} />
            </span>
            <span className="num compare__value">{svc.value}%</span>
          </div>
        ))
      }
    </figure>}
  />

  <section className="how container section" aria-labelledby="how-title">
    <div className="split how__head">
      <h2 id="how-title" className="h2">How it works</h2>
      <p>
        Every engagement runs the same four stages: from an honest read of what is holding growth back to a system your own team
        can run. The engagement builds through connected layers, in sequence:
      </p>
    </div>
    <ol className="flow">
      {
        steps.map((step, i) => (
          <li className="flow__step">
            <span className="flow__marker num" aria-hidden="true">{i + 1}</span>
            <h3 className="flow__name">{step.name}</h3>
            <p>{step.text}</p>
          </li>
        ))
      }
    </ol>
  </section>

  <section className="coverage container section" aria-labelledby="coverage-title">
    <div className="section-head">
      <h2 id="coverage-title" className="h2">What’s covered</h2>
    </div>
    <ul className="bento">
      {
        coverage.map((c) => (
          <li className={cx(['bento__tile', `bento__tile--${c.tone}`, `bento__tile--${c.span}`, { 'on-dark': c.tone === 'dark' || c.tone === 'teal' }])}>
            <h3 className="bento__title">{c.area}</h3>
            <p className="bento__text">{c.detail}</p>
          </li>
        ))
      }
    </ul>
  </section>

  <section className="serve container section" aria-labelledby="serve-title">
    <div className="serve__block">
      <div className="serve__intro">
        <h2 id="serve-title" className="h2">Who we serve</h2>
        <p>
          One persona: a founder or CEO who owns the growth number and has outgrown founder-led marketing. The stage changes, not
          the person.
        </p>
      </div>
      <ul className="serve__stages">
        {
          stages.map((stage) => (
            <li>
              <h3 className="serve__stage-name">{stage.label}</h3>
              <p>{stage.text}</p>
            </li>
          ))
        }
      </ul>
    </div>
  </section>

  <section className="value container section" aria-labelledby="value-title">
    <div className="split value__head">
      <h2 id="value-title" className="h2">Benefits &amp; ROI</h2>
      <p>
        Gain the strategic direction, operating discipline, and team leadership your business needs — without the permanent
        overhead of a full-time CMO. Embedded in your business and accountable for revenue, a Fractional CMO brings seasoned
        executive judgment and an objective perspective, with involvement and a cost structure aligned with your stage of
        growth.
      </p>
    </div>

    <ul className="value__grid">
      <li className="value__tile value__tile--dark on-dark">
        <p className="value__label">Savings</p>
        <p className="num value__figure">~50%</p>
        <p>A 2026 dataset: a 10-hour-a-week fractional executive costs about 50% less than a fully loaded full-time hire.</p>
      </li>
      <li className="value__tile value__tile--teal on-dark">
        <p className="value__label">Objectivity</p>
        <p className="num value__figure">63%</p>
        <p>Of companies cite objective insight as a reason they use fractional talent.</p>
      </li>
      <li className="value__tile value__tile--mist">
        <p className="value__label">Flexibility</p>
        <p className="num value__figure">83%</p>
        <p>Of businesses chose fractional leadership for flexibility and autonomy.</p>
      </li>
    </ul>

    <ul className="benefits">
      {
        benefits.map((b) => (
          <li>
            <h3 className="benefits__name">{b.name}</h3>
            <p>{b.text}</p>
          </li>
        ))
      }
    </ul>

    <div className="value__engage">
      <p>Choose your model of engagement. Get clarity. Get going.</p>
      <a className="btn btn-primary" href={routes.bookConversation}>Engage with us</a>
    </div>
  </section>

  <section className="industries container section" aria-labelledby="industries-title">
    <div className="section-head">
      <h2 id="industries-title" className="h2">Industries we serve</h2>
    </div>
    <ul className="industries__grid">
      {industries.map((name) => <li>{name}</li>)}
    </ul>
  </section>

  <CtaBand
    title="Start with a diagnostic conversation."
    body="Every engagement starts with a diagnostic conversation on your current marketing leadership gap, growth stage, and go-to-market priorities."
    action={{ label: 'Book an FCMO Conversation', href: routes.bookConversation }}
    image={mountain}
  />
</Shell>
    </>
  );
}
