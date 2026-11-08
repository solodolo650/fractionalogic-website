import Img from '@/components/ui/Img';
import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import OnThisPage from '@/components/ui/OnThisPage';
import CtaBand from '@/components/ui/CtaBand';
import portrait from '@/assets/images/founder-muralidharan-erumbala-portrait.jpg';
import mountain from '@/assets/images/card-fcmo-mountain.png';
import { routes } from '@/data/site';
import './about.css';


export const metadata = {
  title: "About Fractionalogic | Fractional CMO and Fractional Twinning",
  description: "Fractionalogic is a Fractional CMO practice founded by Muralidharan Erumbala: embedded, evidence-led senior marketing leadership that extends into a full fractional leadership system.",
};


export default function About(props: any) {

const toc = [
  { id: 'founder', label: 'Founder' },
  { id: 'story', label: 'Our story' },
  { id: 'growth', label: 'How the practice grew' },
  { id: 'market', label: 'The market' },
  { id: 'footprint', label: 'Footprint' },
  { id: 'values', label: 'Values' },
];

const recognition = [
  { title: 'Top 100 Most Innovative Marketing Technology Leader', by: 'World Marketing Congress, 2019' },
  { title: 'Member, Global Advisory Council', by: 'World Brand Congress' },
];

const beats = [
  {
    label: 'The moment we exist for',
    body: [
      'Growth eventually exposes the limits of founder-led commercial momentum. For growth-stage B2B SaaS, AI, enterprise technology, and tech-enabled businesses, marketing may be active yet fragmented, go-to-market decisions may still depend on the founder, and sales and marketing may operate from different assumptions. At this inflection point, the business does not need more activity or occasional advice. It needs senior leadership that can diagnose what is holding growth back, make the right choices, align the organization, and build a repeatable growth system — without necessarily adding a full-time C-suite role.',
    ],
  },
  {
    label: 'Where the name comes from',
    body: [
      'Fractionalogic exists for that moment. We give founders and CEOs clear, flexible access to seasoned C-suite capability tailored to their needs. “Fractional” makes that leadership flexible. “Logic” makes it effective: evidence before assumption, priorities before proliferation, ownership before activity, and measurable progress before vanity metrics.',
      'Fractionalogic is where flexible, on-demand senior expertise meets the discipline, systems, and evidence that make fractional leadership enterprise-grade dependable. We free senior capability from the constraints of full-time employment, then reconstruct it into a structured engine of growth.',
    ],
  },
  {
    label: 'What we are not',
    body: [
      'This is not consulting at arm’s length, an agency executing disconnected campaigns, or a part-time executive filling a calendar. Fractionalogic embeds into the leadership team, takes responsibility for the mandate, and connects strategy with execution. The work begins with clear diagnosis and moves through decisions, systems, programs, KPIs, team development, and a leadership rhythm that the organization can sustain.',
    ],
  },
  {
    label: 'How the journey begins',
    body: [
      'The journey typically begins with a Fractional CMO: a revenue-accountable growth leader who brings market insight, ICP clarity, positioning, go-to-market strategy, demand, sales alignment, marketing technology, and team capability into one coherent agenda. The purpose is not to produce another plan. It turns market ambition into coordinated action, stronger commercial decisions, and visible momentum.',
    ],
  },
  {
    label: 'How the model extends',
    body: [
      'As the business grows, its challenges rarely remain within one function. Fractional Twinning extends the model by pairing complementary senior leaders around one shared business outcome. They work through a shared diagnosis, integrated priorities, unified reporting, and joint accountability — giving the organization broader leadership coverage without creating parallel advisers, conflicting agendas, or unnecessary executive overhead.',
    ],
  },
  {
    label: 'The intelligence layer',
    body: [
      'Around this embedded leadership sits a wider advantage: proven frameworks, collective intelligence, specialist partners, capability tools, and AI-enabled insight. AI expands the speed and depth of analysis; experienced human judgment remains accountable for context, priority, creativity, ethics, and commercial consequence. Technology strengthens the decision — it does not replace the leader.',
    ],
  },
  {
    label: 'What we leave behind',
    body: [
      'The goal is not to create dependency but to leave behind a stronger internal team, clearer ownership, and a sustainable growth system that equips the business for the future. Fractionalogic starts with the leadership capability the business needs now, proves impact through action, and expands only when greater complexity demands it.',
    ],
  },
];

const regions = [
  {
    name: 'APAC (ex-India)',
    text: 'Riding India’s fractional wave with a time lag, powered by SaaS scale-ups and remote diaspora talent.',
  },
  {
    name: 'Middle East (UAE/GCC)',
    text: 'With SMEs accounting for around 94% of UAE companies and 90% of GCC employers reporting skills shortages in 2025 (Hays survey), fractional leadership offers a flexible alternative to full-time executive hiring. UAE provider Fractional estimates costs at 30–60% below a full-time C-suite hire, making the UAE/GCC a cost-sensitive market for Twinning.',
  },
  {
    name: 'United Kingdom',
    text: 'A 2026 survey of 180 UK fractional leaders found that 74.4% of them win work primarily through personal networks, highlighting a relationship-driven market with significant scope for better executive discovery.',
  },
  {
    name: 'United States',
    text: 'Fractional hiring is gaining momentum. Fractional Jobs’ 2026 report recorded 149% year-over-year growth in tracked hiring demand between Q1 2025 and Q1 2026 — a platform-level indicator, not a national business-adoption rate. Fractional sales leadership is becoming an established operating model, making the US a market suited to scaling Twinning.',
  },
];

const values = [
  { label: 'Objective, not transactional.', text: 'Every engagement begins with the business’s long-term vision — sustained growth isn’t bought by the hour.' },
  { label: 'Seasoned, strategic, simple.', text: 'Deep expertise delivered without unnecessary complexity. Priorities before proliferation.' },
  { label: 'Extension, not dilution.', text: 'We grow client relationships by adding complementary fractional leadership as complexity crosses beyond a single function — never by stretching one leader thinner.' },
  { label: 'Evidence-based.', text: 'Data, KPIs, and named sources back every recommendation and market claim on this site.' },
  { label: 'Capability that outlives the engagement.', text: 'We build internal team capability and sustainable systems, not long-term external dependence.' },
];
  return (
    <>
<Shell path="/about">
  <PageHeader
    title="A fully assembled fractional leadership team."
    current="About"
    lede="One senior leader demonstrated it. Now the Fractionalogic model scales — delivering reliable results that build confidence in your leadership decisions."
  />

  <div className="about container">
    <aside className="about__toc">
      <OnThisPage links={toc} />
    </aside>

    <div className="about__body">
      <section id="founder" className="founder-bio" aria-labelledby="founder-title">
        <header className="founder-bio__head">
          <span className="portrait-frame founder-bio__frame">
            <Img
              className="founder-bio__photo"
              src={portrait}
              alt="Portrait of Muralidharan Erumbala"
              width={128}
              densities={[1, 2, 3]}
              loading="eager"
            />
          </span>
          <div className="founder-bio__id">
            <h2 id="founder-title" className="h2">Muralidharan Erumbala</h2>
            <p className="founder-bio__role">Founder &amp; Fractional CMO</p>
            <p className="founder-bio__tag">From analog roots to AI-era relevance</p>
          </div>
        </header>
        <div className="founder-bio__text">
          <p>
            Muralidharan Erumbala has spent over four decades across IT, FMCG, manufacturing, retail, financial services, and
            telecom, evolving from analog-era creativity to AI-shaped strategic leadership. A founder’s instinct, a storyteller’s
            eye, and an artist’s precision shaped his conviction: senior marketing leadership should be both flexible and
            structured, delivering enterprise-grade outcomes without the delay and rigidity of traditional full-time hiring.
          </p>
          <p>
            That conviction became Fractionalogic — the brand he built to turn fractional marketing leadership into a
            disciplined, scalable growth model. Having led teams at Ivy Mobility, Sheenlac, Datri, Future Telecom, OptiSol
            Business Solutions, Newwton, WiWA, and Wordedge, he built a cross-industry command of brand, demand, revenue, and
            execution. As a Fractional CMO and founder, he designs ICP-led strategy, full-funnel demand generation, sharper
            sales-marketing alignment, and MarTech advisory.
          </p>
          <p>
            That experience gave rise to Fractional Twinning, extending fractional leadership beyond a single advisory role by
            pairing a second, complementary leader with the Fractional CMO for continuity, speed, and scale. Recognized by the
            World Marketing Congress as a Top 100 Most Innovative Marketing Technology Leader in 2019, Muralidharan blends
            founder, strategist, and operator into one adaptive, evidence-driven growth engine.
          </p>
        </div>

        <div className="recognition">
          <h3 className="recognition__title">Recognition</h3>
          <ul>
            {
              recognition.map((r) => (
                <li>
                  <span className="recognition__name">{r.title}</span>
                  <span className="recognition__by">{r.by}</span>
                </li>
              ))
            }
          </ul>
        </div>

        <p className="founder-bio__handoff">
          Full-service depth for both the <a href={routes.fcmo}>FCMO practice</a> and{' '}
          <a href={routes.twinning}>Fractional Twinning</a> lives on Services — what follows is the belief behind it.
        </p>
      </section>

      <section id="story" className="story" aria-labelledby="story-title">
        <div className="section-head">
          <h2 id="story-title" className="h2">The Fractionalogic story</h2>
          <p className="story__thesis">
            Senior judgment. Embedded ownership. Connected execution. Measurable progress that builds confidence in sustainable
            growth.
          </p>
        </div>

        <ol className="story__arc">
          {
            beats.map((beat) => (
              <li className="story__beat">
                <h3 className="story__label">{beat.label}</h3>
                <div className="story__beat-body">
                  {beat.body.map((p) => (
                    <p>{p}</p>
                  ))}
                </div>
              </li>
            ))
          }
        </ol>

        <p className="story__close">
          Fractionalogic transforms fractional leadership from a staffing choice into a scalable leadership architecture: senior
          judgment, embedded ownership, connected execution, and measurable progress — applied fractionally, delivered with full
          impact, and extended with logic.
        </p>
      </section>


      <section id="growth" className="growth" aria-labelledby="growth-title">
        <h2 id="growth-title" className="h2">How the practice grew</h2>
        <div className="growth__text">
          <p>
            What began as a single Fractional CMO practice grew into a broader philosophy: senior expertise delivered on demand,
            without the cost and delay of full-time hiring. As FCMO clients scaled, a natural question followed — if this works
            for marketing, why not finance, technology, or operations? That question is the origin of Fractional Twinning: the
            natural next step as complexity crosses beyond a single function. Once proven in one, senior leadership extends into
            others, without diluting focus.
          </p>
          <p>
            For companies that have already engaged a Fractional CMO, the question shifts from “should we go fractional again?”
            to “how do we extend the model we already trust?” Fractional Twinning answers it by pairing a second, complementary
            fractional executive alongside continued FCMO leadership: no new hires, no lost momentum.
          </p>
        </div>
      </section>

      <section id="market" className="market" aria-labelledby="market-title">
        <div className="section-head">
          <h2 id="market-title" className="h2">The category context</h2>
          <p>
            Fractional leadership is transitioning from a cost-flexibility solution to a strategic workforce model. Estimates of
            the global fractional-executive market vary significantly; a 2026 report estimated it at USD 5.7 billion in 2025, with
            projections of USD 10–12 billion by 2029. A broader estimate by DataIntelo revised the market to USD 17.6 billion in
            2025 and USD 36.68 billion by 2034, reflecting an 8.5% CAGR. For fractional CMOs specifically, growth is estimated
            from USD 2.11 billion in 2025 to USD 3.51 billion by 2031, at a 9.01% CAGR. Demand is evident, with requests for
            interim leaders rising 310% from 2020 to 2025.
          </p>
        </div>

        <h3 className="market__subhead">The 2026 data behind the model</h3>
        <ul className="stats" aria-label="The 2026 data behind the model">
          <li className="stat stat--lead on-dark">
            <span className="num stat__figure" aria-hidden="true">68%</span>
            <p>Year-over-year growth in fractional CXO demand; 40% of Indian startups now use part-time executives.</p>
          </li>
          <li className="stat stat--india">
            <span className="num stat__figure" aria-hidden="true">$5.7 bn</span>
            <p>The fractional executive market, growing at 14% annually.</p>
          </li>
          <li className="stat stat--us">
            <span className="num stat__figure" aria-hidden="true">25%</span>
            <p>Of U.S. businesses now use fractional hiring, projected to reach 35% by the end of 2026.</p>
            <div className="stat__bars" aria-hidden="true">
              <div className="stat__bar-row">
                <span className="stat__bar-label">Today</span>
                <span className="stat__track"><span className="stat__bar stat__bar--lead" style={{'--v': '25'}}></span></span>
                <span className="num stat__bar-value">25%</span>
              </div>
              <div className="stat__bar-row">
                <span className="stat__bar-label">End of 2026</span>
                <span className="stat__track"><span className="stat__bar" style={{'--v': '35'}}></span></span>
                <span className="num stat__bar-value">35%</span>
              </div>
            </div>
          </li>
          <li className="stat stat--gartner">
            <span className="num stat__figure" aria-hidden="true">30%</span>
            <p>Adoption forecast: midsize firms with a fractional executive by 2027, as observed by recent research.</p>
          </li>
          <li className="stat stat--wide">
            <div className="stat__main">
              <span className="num stat__figure" aria-hidden="true">2.5×</span>
              <p>
                The number of organizations using fractional leaders could grow to about 2.5 times its 2026 level by 2031.
              </p>
            </div>
            <div className="stat__growth" aria-hidden="true">
              <div className="stat__bar-row">
                <span className="stat__bar-label">2026</span>
                <span className="stat__track"><span className="stat__bar" style={{'--v': '16'}}></span></span>
                <span className="num stat__bar-value">1×</span>
              </div>
              <div className="stat__bar-row">
                <span className="stat__bar-label">2031</span>
                <span className="stat__track"><span className="stat__bar stat__bar--lead" style={{'--v': '40'}}></span></span>
                <span className="num stat__bar-value">2.5×</span>
              </div>
            </div>
          </li>
        </ul>
      </section>

  <section id="footprint" className="footprint" aria-labelledby="footprint-title">
    <div className="section-head">
      <h2 id="footprint-title" className="h2">One global shift. Five distinct growth realities.</h2>
      <p>
        FCMO is the entry point, and Twinning is the path to scale in every market. Regional economics, talent gaps, adoption
        maturity, and regulatory context shape each opportunity differently.
      </p>
    </div>

    <ul className="footprint__grid">
      <li className="footprint__home photo-card on-dark" style={{'--tint': 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark) 35%, transparent) 0%, color-mix(in srgb, var(--color-dark) 92%, transparent) 70%)'}}>
        <Img className="photo-card__bg" src={mountain} alt="" widths={[520, 1020]} sizes="(min-width: 900px) 520px, 100vw" />
        <p className="footprint__badge">Primary base</p>
        <h3 className="footprint__name">India</h3>
        <p>
          Fractional leadership is gaining traction across Indian startups, growth-stage companies, and mid-market GCCs as
          businesses seek experienced leadership without adding full-time executive overhead. Industry research indicates strong
          year-on-year growth in demand for fractional executives, and Instahyre projects fractional senior-leadership hiring in
          India’s GCC segment to grow more than 25% annually.
        </p>
      </li>
      {
        regions.map((r) => (
          <li className="footprint__region">
            <h3 className="footprint__name">{r.name}</h3>
            <p>{r.text}</p>
          </li>
        ))
      }
    </ul>

    <p className="footprint__rest">
      The rest of the world is served through the vetted Twin Partner Network.
      <a className="text-link" href={routes.twinPartnerNetwork}>Meet the network <span aria-hidden="true">→</span></a>
    </p>
  </section>

  <section id="values" className="values" aria-labelledby="values-title">
    <h2 id="values-title" className="h2">Values</h2>
    <ul className="rule-list">
      {
        values.map((v) => (
          <li>
            <h3 className="rule-list__label">{v.label}</h3>
            <p>{v.text}</p>
          </li>
        ))
      }
    </ul>
  </section>
    </div>
  </div>

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
