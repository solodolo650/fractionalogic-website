import 'react';

declare module 'react' {
  // CSS custom properties in style objects (e.g. { '--tint': '...' }).
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    // Progressive-enhancement custom elements (registered in src/client).
    interface IntrinsicElements {
      'fl-filter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<`data-${string}`, string | number | undefined>;
      'fl-tabs': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<`data-${string}`, string | number | undefined>;
      'fl-toc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<`data-${string}`, string | number | undefined>;
    }
  }
}
