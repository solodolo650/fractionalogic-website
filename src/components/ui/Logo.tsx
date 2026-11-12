import './Logo.css';

/*
 * Fractionalogic logo, solid version (from the business-card design, option D):
 * three square bars + the name in Inter Bold. Size it with font-size on the parent.
 *   tone "light" (light grounds): bars Teal 650, name Teal 800
 *   tone "dark" / "brand" (dark or teal grounds): all white
 *   variant "full" = mark + name; "mark" = bars only; "word" = name only.
 */
interface Props {
  variant?: 'full' | 'mark' | 'word';
  tone?: 'light' | 'dark' | 'brand';
  className?: string;
}

export default function Logo({ variant = 'full', tone = 'light', className }: Props) {
  const markColor = tone === 'light' ? '#126a66' : '#ffffff';
  return (
    <span className={['logo', `logo--${tone}`, className].filter(Boolean).join(' ')}>
      {variant !== 'word' && (
        <svg className="logo__mark" viewBox="0 0 28 19" aria-hidden="true" focusable="false">
          <rect x="0" y="0" width="28" height="4.6" fill={markColor} />
          <rect x="0" y="7.2" width="22" height="4.6" fill={markColor} />
          <rect x="0" y="14.4" width="12" height="4.6" fill={markColor} />
        </svg>
      )}
      {variant !== 'mark' && <span className="logo__word">Fractionalogic</span>}
    </span>
  );
}
