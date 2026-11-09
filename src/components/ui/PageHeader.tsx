import cx from 'clsx';
import './PageHeader.css';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  /** Breadcrumb label when the page title is a sentence rather than the page name. */
  current?: string;
  /** "band" (default): the header sits in the rounded dark-teal hero band. "plain": no band. */
  tone?: 'band' | 'plain';
}

export default function Pageheader(props: Props) {
const { children, actions, aside } = props;


const { title, lede, crumbs = [], current, tone = 'band' } = props;
const hasAside = Boolean(aside);
  return (
    <>
<header className={cx(['page-header', 'container', { 'page-header--split': hasAside, 'page-header--band band on-dark': tone === 'band' }])}>
  <div className="page-header__main">
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        {crumbs.map((crumb, __i) => <li key={__i}>{crumb.href ? <a href={crumb.href}>{crumb.label}</a> : <span>{crumb.label}</span>}</li>)}
        <li aria-current="page">{current ?? title}</li>
      </ol>
    </nav>
    <h1 className="page-title">{title}</h1>
    {lede && <p className="lede">{lede}</p>}
    {
      Boolean(actions) && (
        <div className="page-header__actions">
          {actions}
        </div>
      )
    }
    {children}
  </div>
  {
    hasAside && (
      <div className="page-header__aside">
        {aside}
      </div>
    )
  }
</header>
    </>
  );
}
