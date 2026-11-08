import Img from '@/components/ui/Img';
import amber from '@/assets/images/stat-amber.png';
import './WhyFractional.css';



export default function Whyfractional(props: any) {

  return (
    <>
<section className="why container section split" aria-labelledby="why-title">
  <div className="why__text split__head">
    <p className="eyebrow">Why fractional, why now</p>
    <h2 id="why-title" className="h2">Fractional leadership, proven in numbers.</h2>
    <p>
      Growing businesses need experienced marketing leadership to compete in a fast-moving market, but can’t
      always justify or afford a full-time CMO. A typical CMO hiring cycle can take six to nine months — time most
      growth-stage businesses don’t have.
    </p>
  </div>

  <div className="why__stats">
    <div className="stat">
      <p className="stat__value">40%</p>
      <p className="stat__label">Indian startups now use fractional CMOs as part of their growth plan.</p>
    </div>
    <div
      className="stat stat--photo photo-card on-dark"
      style={{'--tint': 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark) 10%, transparent) 15%, color-mix(in srgb, var(--color-dark) 88%, transparent) 80%)'}}
    >
      <Img className="photo-card__bg" src={amber} alt="" widths={[331, 662]} sizes="(min-width: 900px) 330px, 50vw" />
      <p className="stat__value">30%</p>
      <p className="stat__label">
        Faster implementation of effective marketing strategies when companies involve a Fractional CMO.
      </p>
    </div>
  </div>
</section>
    </>
  );
}
