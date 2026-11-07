import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import { routes } from '@/data/site';
import './404.css';

export const metadata: Metadata = {
  title: 'Page not found | Fractionalogic',
  description: 'The page you were looking for isn’t here.',
  robots: { index: false, follow: false },
};

const suggestions = [
  { label: 'Fractional CMO', href: routes.fcmo },
  { label: 'Fractional Twinning', href: routes.twinning },
  { label: 'Resources', href: routes.resources },
  { label: 'Talk to Us', href: routes.talkToUs },
];

export default function NotFound() {
  return (
    <Shell path="/404">
      <section className="missing container">
        <h1 className="page-title">This page isn’t here.</h1>
        <p className="lede">The link may be out of date, or the page may have moved. These are the pages most people look for:</p>
        <ul className="chip-list">
          {suggestions.map((s) => (
            <li key={s.href}>
              <a className="chip missing__link" href={s.href}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" href={routes.home}>
          Go to the homepage
        </a>
      </section>
    </Shell>
  );
}
