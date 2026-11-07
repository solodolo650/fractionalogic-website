export default function init() {

  class FlFilter extends HTMLElement {
    connectedCallback() {
      const chips = [...this.querySelectorAll<HTMLButtonElement>('[data-filter]')];
      const items = [...this.querySelectorAll<HTMLElement>('[data-filter-tags]')];
      const sections = [...this.querySelectorAll<HTMLElement>('[data-filter-section]')];
      const status = this.querySelector<HTMLElement>('[data-filter-status]');
      const { singular, plural } = this.dataset;

      const apply = (value: string) => {
        let shown = 0;
        items.forEach((item) => {
          const match = !value || item.dataset.filterTags!.split(' ').includes(value);
          item.hidden = !match;
          if (match) shown++;
        });
        sections.forEach((section) => {
          section.hidden = ![...section.querySelectorAll<HTMLElement>('[data-filter-tags]')].some((item) => !item.hidden);
        });
        chips.forEach((chip) => chip.setAttribute('aria-pressed', String(chip.dataset.filter === value)));
        if (status) status.textContent = `Showing ${shown} ${shown === 1 ? singular : plural}`;
      };

      const param = this.dataset.param;
      const sync = (value: string) => {
        if (!param) return;
        const url = new URL(location.href);
        if (value) url.searchParams.set(param, value);
        else url.searchParams.delete(param);
        history.replaceState(null, '', url);
      };

      chips.forEach((chip) =>
        chip.addEventListener('click', () => {
          const value = chip.dataset.filter ?? '';
          apply(value);
          sync(value);
        }),
      );

      const initial = param ? new URLSearchParams(location.search).get(param) : null;
      if (initial && chips.some((chip) => chip.dataset.filter === initial)) apply(initial);
      this.dataset.enhanced = '';
    }
  }

  if (!customElements.get('fl-filter')) customElements.define('fl-filter', FlFilter);

}
