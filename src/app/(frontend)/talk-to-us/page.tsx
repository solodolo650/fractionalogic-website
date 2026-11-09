import Shell from '@/components/Shell';
import PageHeader from '@/components/ui/PageHeader';
import EmailLink from '@/components/ui/EmailLink';
import Form from '@/components/forms/Form';
import Field from '@/components/forms/Field';
import { contact, routes } from '@/data/site';
import './talk-to-us.css';


export const metadata = {
  title: "Talk to Us | Book an FCMO Conversation | Fractionalogic",
  description: "Every engagement starts with a Fractional CMO conversation — a diagnostic session on your marketing leadership gap, growth stage, and go-to-market priorities.",
};


export default function TalkToUs(props: any) {

const sources = ['LinkedIn', 'Search engine', 'Referral or word of mouth', 'Event or talk', 'Article or publication', 'Other'];

const regions = ['India', 'APAC', 'Middle East', 'United Kingdom', 'United States', 'Other'];
  return (
    <>
<Shell path="/talk-to-us">
  <PageHeader
    title="Start the conversation."
    current="Talk to Us"
    lede="Every engagement starts with a Fractional CMO conversation — a diagnostic session on your current marketing leadership gap, growth stage, and go-to-market priorities."
  />

  <div className="talk container">
    <div className="talk__side">
      <p className="talk__promise">
        No pitch deck, no proposal at the first meeting — just an honest read on whether there’s a leadership problem worth
        solving, and whether we’re the right people to solve it.
      </p>
      <p>If your needs span more than one function, we’ll scope a Fractional Twinning pairing as part of the same engagement.</p>

      <div className="talk__contact">
        <h2 className="talk__contact-title">Other ways to reach us</h2>
        <dl>
          <div>
            <dt>Email</dt>
            <dd><EmailLink address={contact.email} /></dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{contact.location}</dd>
          </div>
        </dl>
      </div>

      <p className="talk__roster">
        Are you a fractional leader looking to join our network?{' '}
        <a href={routes.joinRoster}>Apply to the Twin Partner Network</a> instead.
      </p>
    </div>

    <section id="start" className="talk__form surface" aria-labelledby="start-title">
      <h2 id="start-title" className="h3">Book an FCMO conversation</h2>
      <Form
        id="fcmo-conversation"
        subject="FCMO conversation request"
        submitLabel="Book an FCMO Conversation"
        successTitle="Request received"
        successBody="Thank you. We’ll be in touch to arrange your diagnostic FCMO conversation."
      >
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field label="Role" name="role" required autoComplete="organization-title" />
        <Field label="Country" name="country" required autoComplete="country-name" />
        <Field label="Preferred region" name="region" as="select" options={regions} required />
        <Field label="How can we help?" name="message" as="textarea" wide required />
        <Field label="How did you find us?" name="source" as="select" options={sources} />
      </Form>
    </section>
  </div>
</Shell>
    </>
  );
}
