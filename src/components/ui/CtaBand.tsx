import Img from '@/components/ui/Img';
import type { StaticImageData as ImageMetadata } from 'next/image';
import './CtaBand.css';

interface Props {
  title: string;
  body: string;
  action: { label: string; href: string };
  image: ImageMetadata;
  id?: string;
}

export default function Ctaband(props: Props) {


const { title, body, action, image, id = 'closing' } = props;
  return (
    <>
<section
  className="cta-band container section photo-card on-dark"
  aria-labelledby={`${id}-title`}
  style={{'--tint': 'linear-gradient(90deg, color-mix(in srgb, var(--color-dark) 92%, transparent) 0%, color-mix(in srgb, var(--color-dark) 70%, transparent) 50%, color-mix(in srgb, var(--color-dark) 30%, transparent) 100%)'}}
>
  <Img className="photo-card__bg" src={image} alt="" widths={[1060]} sizes="(min-width: 1100px) 1060px, 100vw" />
  <div className="cta-band__text">
    <h2 id={`${id}-title`} className="h2">{title}</h2>
    <p>{body}</p>
  </div>
  <a className="btn btn-secondary cta-band__action" href={action.href}>{action.label}</a>
</section>
    </>
  );
}
