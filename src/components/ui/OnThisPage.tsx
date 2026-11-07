import './OnThisPage.css';

interface Props {
  links: { id: string; label: string }[];
}

export default function Onthispage(props: Props) {

const { links } = props;
  return (
    <>
<fl-toc>
  <nav className="toc" aria-label="On this page">
    <p className="toc__title">On this page</p>
    <ol className="toc__list">
      {
        links.map((link) => (
          <li>
            <a href={`#${link.id}`} data-toc-link={link.id}>
              {link.label}
            </a>
          </li>
        ))
      }
    </ol>
  </nav>
</fl-toc>
    </>
  );
}
