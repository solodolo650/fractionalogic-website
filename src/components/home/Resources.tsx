import ResourceCard from '../ui/ResourceCard';
import { routes } from '@/data/site';
import { getResources } from '@/lib/resources';
import './Resources.css';



export default async function Resources(props: any) {

const resources = await getResources();
const picks = [...resources.filter((r) => r.data.featured), ...resources.filter((r) => !r.data.featured)].slice(0, 3);
  return (
    <>
<section className="resources container section" aria-labelledby="resources-title">
  <header className="resources__header">
    <h2 id="resources-title" className="h2">Resources</h2>
    <a className="text-link" href={routes.resources}>View all resources <span aria-hidden="true">→</span></a>
  </header>

  <ul className="resources__grid">
    {
      picks.map((r) => (
        <li>
          <ResourceCard resource={r} />
        </li>
      ))
    }
  </ul>
</section>
    </>
  );
}
