import { routes } from '@/data/site';
import './JoinRoster.css';



export default function Joinroster(props: any) {

  return (
    <>
<section className="roster container section split" aria-labelledby="roster-title">
  <h2 id="roster-title" className="h3 roster__title">Are you a senior leader building a fractional practice?</h2>
  <div className="roster__body">
    <p>
      Fractionalogic brings together senior leaders and specialist marketers under its Fractional Twinning service
      in each FCMO engagement, aligned on outcomes, shared KPIs, and unified reporting.
    </p>
    <a className="btn btn-secondary" href={routes.joinRoster}>Join the roster</a>
  </div>
</section>
    </>
  );
}
