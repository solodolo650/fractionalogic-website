import Img from '@/components/ui/Img';
import portrait from '@/assets/images/founder-muralidharan-erumbala-portrait.jpg';
import { routes } from '@/data/site';
import './Founder.css';



export default function Founder(props: any) {

  return (
    <>
<section className="founder container section split" aria-labelledby="founder-title">
  <div className="founder__aside">
    <div className="split__head">
      <p className="eyebrow">Our story</p>
      <h2 id="founder-title" className="h2">A note from the founder</h2>
    </div>
    <span className="portrait-frame founder__frame">
      <Img
        className="founder__photo"
        src={portrait}
        alt="Portrait of Muralidharan Erumbala"
        widths={[420, 820, 1200]}
        sizes="(min-width: 900px) 410px, 100vw"
      />
    </span>
  </div>

  <figure className="founder__note ruled-quote">
    <blockquote>
      <p>
        “After four decades in marketing leadership across IT, FMCG, manufacturing, retail, financial services, and
        telecom, I built Fractionalogic on one conviction: senior leadership should be flexible without losing
        structure. That’s the practice I run today.”
      </p>
    </blockquote>
    <figcaption className="founder__byline">
      <span className="ruled-quote__name">Muralidharan Erumbala</span>
      <span>Founder, Fractionalogic &amp; Fractional CMO</span>
      <span className="founder__award">
        World Marketing Congress Top 100 Most Innovative Marketing Technology Leader, 2019
      </span>
    </figcaption>
    <a className="text-link" href={routes.about}>Read the full story <span aria-hidden="true">→</span></a>
  </figure>
</section>
    </>
  );
}
