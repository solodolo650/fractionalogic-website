import { routes } from '@/data/site';
import { getReport, reportDownloadHref } from '@/lib/resources';
import './Hero.css';



export default async function Hero(props: any) {

const businessCase = await getReport('fcmo-business-case');
const caseFile = Boolean(businessCase?.data.file);
const caseHref = businessCase ? reportDownloadHref(businessCase) : routes.resources;
  return (
    <>
<section className="hero band on-dark" aria-labelledby="hero-title">
  <h1 id="hero-title" className="hero__title">Senior marketing leadership, applied fractionally.</h1>
  <p className="hero__body">
    When B2B SaaS growth outpaces founder-led marketing, Fractionalogic steps in with an embedded, revenue-accountable,
    evidence-led Fractional CMO and a leadership system that scales with your business.
  </p>
  <div className="hero__actions">
    <a className="btn btn-primary" href={routes.bookConversation}>Book an FCMO Conversation</a>
    <a className="btn btn-secondary" href={caseHref} download={caseFile || undefined}>
      Read the FCMO Business Case
    </a>
  </div>
</section>
    </>
  );
}
