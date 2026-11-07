import cx from 'clsx';
import Img from '@/components/ui/Img';
import { isExternal, kindLabels, resourceHref, resourceSource, resourceThumbnail, type Resource } from '@/lib/resources';
import './ResourceCard.css';

interface Props {
  resource: Resource;
  headingLevel?: 'h2' | 'h3';
}

export default function Resourcecard(props: Props) {


const { resource, headingLevel = 'h3' } = props;
const Heading = headingLevel;
const thumb = resourceThumbnail(resource);
const external = isExternal(resource);
  return (
    <>
<article className="rcard">
  <div className={cx(['rcard__thumb', { 'rcard__thumb--brand': thumb.isFallback }])} style={{ '--zoom': thumb.zoom, '--pos': thumb.position }}>
    {
      typeof thumb.src === 'string' ? (
        <img src={thumb.src} alt={thumb.alt} width="640" height="400" loading="lazy" decoding="async" />
      ) : (
        <Img
          src={thumb.src}
          alt={thumb.alt}
          widths={[400, 800]}
          sizes="(min-width: 900px) 340px, (min-width: 560px) 50vw, 120px"
        />
      )
    }
  </div>
  <div className="rcard__body">
    <Heading className="rcard__title">
      <a href={resourceHref(resource)} rel={external ? 'noopener' : undefined}>
        {resource.data.title}
        {
          external && (
            <svg className="rcard__ext" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        }
      </a>
    </Heading>
    <p className="rcard__meta">
      <span className="rcard__kind">{kindLabels[resource.data.kind]}</span>
      <span>{resourceSource(resource)}</span>
    </p>
  </div>
</article>
    </>
  );
}
