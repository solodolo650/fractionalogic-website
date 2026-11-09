import Logo from './ui/Logo';
import { contact, partners, routes, services } from '@/data/site';
import './Footer.css';



export default function Footer(props: any) {

const columns = [
  { heading: 'Services', links: services },
  { heading: 'Partners', links: partners },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: routes.about },
      { label: 'Resources', href: routes.resources },
      { label: 'Talk to Us', href: routes.talkToUs },
      { label: 'LinkedIn', href: contact.linkedin, external: true },
    ],
  },
];

const legal = [
  { label: 'Disclaimer', href: routes.disclaimer },
  { label: 'Terms of Use', href: routes.terms },
  { label: 'Privacy Policy', href: routes.privacy },
];

const year = new Date().getFullYear();
  return (
    <>

<footer className="footer">
  <div className="container footer__inner">
    <div className="footer__brand">
      <a className="footer__logo" href={routes.home} aria-label="Fractionalogic home"><Logo /></a>
      <p className="footer__line">
        Senior leadership logic,
        <span>applied fractionally.</span>
      </p>
    </div>

    <nav className="footer__cols" aria-label="Footer">
      {
        columns.map((col, __i) => (
          <div key={__i}>
            <h2 className="footer__heading">{col.heading}</h2>
            <ul className="footer__list">
              {col.links.map((link, __i) => (
                <li key={__i}>
                  {'external' in link && link.external ? (
                    <a href={link.href} rel="noopener">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      }
    </nav>
  </div>

  <div className="container footer__bottom">
    <p>© {year} Fractionalogic</p>
    <ul className="footer__legal">
      {
        legal.map((link, __i) => (
          <li key={__i}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))
      }
    </ul>
  </div>
</footer>
    </>
  );
}
