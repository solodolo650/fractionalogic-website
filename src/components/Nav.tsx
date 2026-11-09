import cx from 'clsx';
import Logo from './ui/Logo';
import { primaryNav, routes, type NavItem } from '@/data/site';
import './Nav.css';



export default function Nav({ path: rawPath }: { path: string }) {

const path = rawPath.replace(/\/$/, '') || '/';
const isCurrent = (href: string) => href === path;
const groupIsCurrent = (item: NavItem) => 'children' in item && item.children.some((c) => isCurrent(c.href));
  return (
    <>
<div className="nav-shell">
  <header className="nav">
    <a className="nav__logo" href={routes.home} aria-label="Fractionalogic home"><Logo className="nav__mark" /></a>

    <nav className="nav__links" aria-label="Primary">
      <ul className="nav__list">
        {
          primaryNav.map((item, i) =>
            'children' in item ? (
              <li key={item.label} className="nav__group">
                <button
                  className={cx(['nav__item', 'nav__trigger', { 'is-current': groupIsCurrent(item) }])}
                  type="button"
                  aria-expanded="false"
                  aria-controls={`nav-menu-${i}`}
                >
                  {item.label}
                  <svg className="nav__chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M3 4.75 6 7.75l3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="nav__menu" id={`nav-menu-${i}`}>
                  <ul>
                    {item.children.map((child, __i) => (
                      <li key={__i}>
                        <a className="nav__menu-link" href={child.href} aria-current={isCurrent(child.href) ? 'page' : undefined}>
                          <span className="nav__menu-title">{child.label}</span>
                          {child.description && <span className="nav__menu-desc">{child.description}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <a className="nav__item" href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
                  {item.label}
                </a>
              </li>
            ),
          )
        }
      </ul>
    </nav>

    <a className="nav__cta" href={routes.talkToUs} aria-current={isCurrent(routes.talkToUs) ? 'page' : undefined}>
      Talk to Us
    </a>

    <button className="nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
      <span className="nav__burger" aria-hidden="true"><span></span><span></span></span>
    </button>

    <div className="mobile-menu" id="mobile-menu">
      <ul className="mobile-menu__list">
        {
          primaryNav.map((item) =>
            'children' in item ? (
              <li key={item.label} className="mobile-menu__group">
                <p className="mobile-menu__heading">{item.label}</p>
                <ul className="mobile-menu__sub">
                  {item.children.map((child, __i) => (
                    <li key={__i}>
                      <a href={child.href} aria-current={isCurrent(child.href) ? 'page' : undefined}>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <a className="mobile-menu__top" href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
                  {item.label}
                </a>
              </li>
            ),
          )
        }
      </ul>
      <a className="btn btn-primary mobile-menu__cta" href={routes.talkToUs}>Talk to Us</a>
    </div>
  </header>
</div>
    </>
  );
}
