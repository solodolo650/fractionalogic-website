import Nav from './Nav';
import Footer from './Footer';

/** Page chrome. Each page passes its own path so the nav can mark the current section on the server. */
export default function Shell({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <>
      <Nav path={path} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
