import cx from 'clsx';

interface Props {
  address: string;
  className?: string;
}

export default function Emaillink(props: Props) {
/* Assembles the address in the browser so it never appears as plain text in the HTML. */

const { address, className } = props;
const [user, domain] = address.split('@');
  return (
    <>
<a className={cx(['email-link', className])} data-user={user} data-domain={domain}>
  {user} [at] {domain}
</a>
    </>
  );
}
