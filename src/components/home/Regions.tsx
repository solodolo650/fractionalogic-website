import Img from '@/components/ui/Img';
import waterfall from '@/assets/images/banner-waterfall.png';
import { routes } from '@/data/site';
import './Regions.css';



export default function Regions(props: any) {

  return (
    <>
<section
  className="regions container section photo-card on-dark"
  aria-labelledby="regions-title"
  style={{'--tint': 'linear-gradient(86deg, color-mix(in srgb, var(--color-dark) 90%, transparent) 0%, color-mix(in srgb, var(--color-dark) 55%, transparent) 55%, color-mix(in srgb, var(--color-dark) 15%, transparent) 100%)'}}
>
  <Img className="photo-card__bg" src={waterfall} alt="" widths={[1060]} sizes="(min-width: 1100px) 1060px, 100vw" />
  <div className="regions__text">
    <h2 id="regions-title" className="h3">Fractionalogic, one base, a global reach.</h2>
    <p>
      Based in India, Fractionalogic helps startups access fractional leadership for greater agility and cost
      efficiency.
    </p>
    <p className="regions__stat"><span className="num">223,000</span> DPIIT-recognized startups in India</p>
  </div>
  <a className="btn btn-glass regions__cta" href={routes.footprint}>See the footprint</a>
</section>
    </>
  );
}
