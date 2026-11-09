import Img from '@/components/ui/Img';
import mountain from '@/assets/images/card-fcmo-mountain.png';
import coast from '@/assets/images/card-twinning-coast.png';
import { routes } from '@/data/site';
import './Services.css';



export default function Services(props: any) {

const cards = [
  {
    title: 'Fractional CMO',
    body: 'A part-time Chief Marketing Officer embeds into your leadership team, builds the strategy, and owns revenue-facing marketing outcomes.',
    cta: 'See how FCMO works',
    href: routes.fcmo,
    image: mountain,
    tint: 'linear-gradient(285deg, color-mix(in srgb, var(--color-dark) 15%, transparent) 10%, color-mix(in srgb, var(--color-dark) 90%, transparent) 88%)',
  },
  {
    title: 'Fractional Twinning',
    body: 'Two fractional executives work together with shared KPIs and joint accountability, covering broader commercial or operational ground at fractional capacity. This is a deliberate extension to the FCMO practice.',
    cta: 'Learn more about Twinning',
    href: routes.twinning,
    image: coast,
    tint: 'linear-gradient(313deg, color-mix(in srgb, var(--color-brand) 10%, transparent) 20%, color-mix(in srgb, var(--color-brand) 92%, transparent) 82%)',
  },
];
  return (
    <>
<section className="services container section" aria-labelledby="services-title">
  <header className="services__header split">
    <div className="split__head">
      <p className="eyebrow">Services</p>
      <h2 id="services-title" className="h2">One practice. One path.</h2>
    </div>
    <p className="services__intro">
      Fractionalogic’s core practice is the Fractional CMO — senior marketing leadership embedded into your team,
      owning revenue-facing outcomes. As businesses grow, needs often extend beyond marketing alone. Fractional
      Twinning brings a second senior leader into the mix, adding expertise across finance, technology, or
      operations at the same fractional capacity.
    </p>
  </header>

  <ul className="services__grid">
    {
      cards.map((card, __i) => (
        <li key={__i} className="photo-card service-card on-dark" style={{ '--tint': card.tint }}>
          <Img
            className="photo-card__bg"
            src={card.image}
            alt=""
            widths={[510, 1020]}
            sizes="(min-width: 900px) 510px, 100vw"
          />
          <h3 className="service-card__title">{card.title}</h3>
          <p className="service-card__body">{card.body}</p>
          <a className="text-link service-card__cta" href={card.href}>
            {card.cta} <span aria-hidden="true">→</span>
          </a>
        </li>
      ))
    }
  </ul>
</section>
    </>
  );
}
