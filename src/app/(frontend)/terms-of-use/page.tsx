import LegalPage, { legalMetadata } from '@/components/legal/LegalPage';

export const metadata = legalMetadata('terms-of-use');

export default function Page() {
  return <LegalPage slug="terms-of-use" />;
}
