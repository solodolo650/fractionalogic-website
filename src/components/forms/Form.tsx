import EmailLink from '../ui/EmailLink';
import { contact, routes } from '@/data/site';
import './Form.css';

interface Props {
  children?: React.ReactNode;
  id: string;
  subject: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
}

export default function Form(props: Props) {
const { children } = props;
/*
 * Posts to one third-party form endpoint (Formspree, Web3Forms, Basin, Getform…) so the site
 * stays static and host-agnostic. Configure PUBLIC_FORM_ENDPOINT, and PUBLIC_FORM_ACCESS_KEY
 * when the provider needs a key in the payload (see .env.example).
 */


const { id, subject, submitLabel, successTitle, successBody } = props;
const endpoint = process.env.PUBLIC_FORM_ENDPOINT;
const accessKey = process.env.PUBLIC_FORM_ACCESS_KEY;
  return (
    <>
<div className="form-shell">
  <form id={id} className="form" method="post" action={endpoint} noValidate data-form>
    <div className="form__summary" tabIndex={-1} hidden data-summary>
      <p className="form__summary-title">Check the highlighted fields</p>
      <ul data-summary-list></ul>
    </div>

    <input type="hidden" name="subject" value={subject} />
    <input type="hidden" name="form" value={id} />
    <input type="hidden" name="from_name" value="Fractionalogic website" />
    {accessKey && <input type="hidden" name="access_key" value={accessKey} />}
    <div className="form__trap" aria-hidden="true">
      <label htmlFor={`${id}-website`}>Leave this empty</label>
      <input id={`${id}-website`} name="botcheck" type="text" tabIndex={-1} autoComplete="off" data-trap />
    </div>

    <div className="form__fields">
      {children}
    </div>

    <div className="form__footer">
      <button className="btn btn-primary form__submit" type="submit" data-submit>
        <span data-submit-label>{submitLabel}</span>
      </button>
      <p className="form__privacy">
        We use the details you share only to respond to your enquiry. We don’t sell them or add you to marketing lists
        without asking. See our <a href={routes.privacy}>Privacy Policy</a>.
      </p>
      <p className="form__error" role="alert" data-error hidden>
        Your message didn’t send. Check your connection and try again, or email <EmailLink address={contact.email} /> directly.
      </p>
    </div>
  </form>

  <div className="form__success" tabIndex={-1} hidden data-success>
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="13" fill="none" stroke="currentColor" strokeWidth="1.5"></circle>
      <path d="m8.5 14.5 3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    <h3 className="form__success-title">{successTitle}</h3>
    <p>{successBody}</p>
  </div>
</div>
    </>
  );
}
