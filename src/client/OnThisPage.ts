export default function init() {

  class FlToc extends HTMLElement {
    connectedCallback() {
      const links = [...this.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')];
      const sections = links
        .map((link) => document.getElementById(link.dataset.tocLink!))
        .filter((s): s is HTMLElement => Boolean(s));

      const mark = (id: string) =>
        links.forEach((link) => link.setAttribute('aria-current', String(link.dataset.tocLink === id)));

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible[0]) mark(visible[0].target.id);
        },
        { rootMargin: '-20% 0px -65% 0px' },
      );
      sections.forEach((section) => observer.observe(section));
    }
  }

  if (!customElements.get('fl-toc')) customElements.define('fl-toc', FlToc);

}
