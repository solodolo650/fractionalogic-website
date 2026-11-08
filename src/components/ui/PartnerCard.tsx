import cx from 'clsx';
import Img from '@/components/ui/Img';
import { initials, type Partner } from '@/data/partners';
import './PartnerCard.css';

interface Props {
  partner: Partner;
  compact?: boolean;
}

export default function Partnercard(props: Props) {


const { partner, compact = false } = props;
  return (
    <>
<article className={cx(['partner', { 'partner--compact': compact }])}>
  {
    partner.photo ? (
      <Img className="partner__mark" src={partner.photo} alt={`Portrait of ${partner.name}`} densities={[1, 2, 3]} width={56} height={56} />
    ) : (
      <span className="partner__mark" aria-hidden="true">{initials(partner.name)}</span>
    )
  }
  <div className="partner__text">
    <h3 className="partner__name">{partner.name}</h3>
    <p className="partner__role">{partner.role}</p>
    {!compact && <p className="partner__practice">{partner.practice}</p>}
  </div>
</article>
    </>
  );
}
