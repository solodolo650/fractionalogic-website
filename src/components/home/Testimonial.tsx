import { initials } from '@/data/partners';
import './Testimonial.css';



export default function Testimonial(props: any) {

const testimonials = [
  {
    quote: [
      'Working with Murali over the past two years has been both enriching and exploratory. We collaborated closely on go-to-market strategies for several mission-critical initiatives.',
      'He has a unique ability to guide founding teams with the right guardrails while shaping clear, compelling narratives that strengthen market positioning. A highlight was defining the UnicusAI brand — a rewarding journey in which Murali played a pivotal role in bringing clarity and coherence.',
    ],
    name: 'Karthik Murugan',
    role: 'Co-founder & Chief Executive Officer',
    company: 'OptiSol Business Solutions Pvt. Ltd.',
  },
  {
    quote: [
      'Murali has given OptiSol strategic clarity and marketing discipline. He shifted our focus from technical capabilities to clear market positioning and business value, backed by a structured brand playbook. He strengthened our go-to-market strategy by aligning marketing, sales, and leadership, improving our founder and corporate brands, and refining product positioning.',
      'I highly recommend Murali to founder-led tech companies that need a Fractional CMO for strategic direction, innovative thinking, and sustainable marketing capabilities.',
    ],
    name: 'Prem Kumar',
    role: 'Co-founder & Head of Growth',
    company: 'OptiSol Business Solutions Pvt. Ltd.',
  },
];
  return (
    <>
<section className="testimonial container section" aria-labelledby="testimonial-title">
  <header className="split">
    <div className="split__head">
      <p className="eyebrow">Testimonials | Fraternity speak</p>
      <h2 id="testimonial-title" className="h2">Leadership trust</h2>
    </div>
  </header>

  <ul className="testimonial__grid">
    {
      testimonials.map((t) => (
        <li className="testimonial__card">
          <figure>
            <blockquote>
              {t.quote.map((para, i) => (
                <p>
                  {i === 0 && '“'}
                  {para}
                  {i === t.quote.length - 1 && '”'}
                </p>
              ))}
            </blockquote>
            <figcaption className="testimonial__byline">
              <span className="testimonial__mark" aria-hidden="true">
                {initials(t.name)}
              </span>
              <span className="testimonial__who">
                <span className="testimonial__name">{t.name}</span>
                <span className="testimonial__role">
                  {t.role}
                  <br />
                  {t.company}
                </span>
              </span>
            </figcaption>
          </figure>
        </li>
      ))
    }
  </ul>
</section>
    </>
  );
}
