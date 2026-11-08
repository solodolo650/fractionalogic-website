import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import FilterGroup from '@/components/ui/FilterGroup';
import PartnerCard from '@/components/ui/PartnerCard';
import Form from '@/components/forms/Form';
import Field from '@/components/forms/Field';
import { partnerFunctions, roster } from '@/data/partners';
import './twin-partner-network.css';


export const metadata = {
  title: "Twin Partner Network | Fractional Leaders Who Twin with the FCMO Practice",
  description: "Vetted senior specialists who pair with Fractionalogic's FCMO practice, or with each other, to extend leadership coverage across functions. Apply to join the roster.",
};


export default function TwinPartnerNetwork(props: any) {

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const functionOptions = [
  'Marketing',
  'Revenue and sales',
  'Finance',
  'Technology and AI',
  'Operations',
  'People and HR',
  'Digital transformation',
  'Personal branding',
  'Other',
];

const regionOptions = ['India', 'APAC', 'Middle East', 'United Kingdom', 'United States', 'Other'];
  return (
    <>
<Shell path="/partners/twin-partner-network">
  <PageHeader
    title="Twin Partner Network"
    crumbs={[{ label: 'Partners' }]}
    lede="Vetted specialists who pair with the FCMO practice, or with each other, to extend leadership coverage across functions."
    actions={<>
      <a className="btn btn-secondary" href="#apply">Apply to join the roster</a>
    </>}
  />

  <section className="roster container section" aria-labelledby="roster-title">
    <h2 id="roster-title" className="h2">The roster</h2>
    <FilterGroup
      label="Filter partners by function"
      options={partnerFunctions.map((f) => ({ value: slug(f), label: f }))}
      noun={['partner', 'partners']}
    >
      <ul className="roster__grid">
        {
          roster.map((partner) => (
            <li data-filter-tags={partner.functions.map(slug).join(' ')}>
              <PartnerCard partner={partner} />
            </li>
          ))
        }
      </ul>
    </FilterGroup>
  </section>

  <section id="apply" className="apply container section" aria-labelledby="apply-title">
    <div className="apply__intro">
      <h2 id="apply-title" className="h2">Build your fractional practice inside a leadership system.</h2>
      <p>
        We are selective. Roster partners are senior operators who can carry a mandate, work to shared KPIs and unified reporting
        alongside an FCMO, and hand back capability the client keeps. If that describes your practice, tell us about it.
      </p>
    </div>

    <div className="apply__form surface">
      <Form
        id="roster-application"
        subject="Twin Partner Network application"
        submitLabel="Apply to join the roster"
        successTitle="Application received"
        successBody="Thank you for telling us about your practice. Every application is read personally, and we’ll be in touch if there’s a fit with a current or upcoming engagement."
      >
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="LinkedIn profile" name="linkedin" type="url" required hint="The full link, starting with https://" wide />
        <Field label="Primary function" name="function" as="select" options={functionOptions} required />
        <Field label="Region you work from" name="region" as="select" options={regionOptions} required />
        <Field
          label="Your practice"
          name="practice"
          as="textarea"
          required
          wide
          hint="The mandates you carry, the clients you serve, and how you work alongside other leaders."
        />
      </Form>
    </div>
  </section>
</Shell>
    </>
  );
}
