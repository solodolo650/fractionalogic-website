export default function init() {

  class FlTabs extends HTMLElement {
    connectedCallback() {
      const uid = this.dataset.uid;
      const tabs = [...this.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
      const panels = tabs.map((tab) => this.querySelector<HTMLElement>(`[data-tab-panel="${tab.dataset.tab}"]`));
      if (!tabs.length || panels.some((p) => !p)) return;

      panels.forEach((panel, i) => {
        panel!.id = `${uid}-panel-${tabs[i].dataset.tab}`;
        panel!.setAttribute('role', 'tabpanel');
        panel!.setAttribute('aria-labelledby', tabs[i].id);
        panel!.tabIndex = 0;
      });

      const select = (index: number, focus = false) => {
        tabs.forEach((tab, i) => {
          const active = i === index;
          tab.setAttribute('aria-selected', String(active));
          tab.tabIndex = active ? 0 : -1;
          panels[i]!.hidden = !active;
        });
        if (focus) tabs[index].focus();
      };

      tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => select(i));
        tab.addEventListener('keydown', (e) => {
          const last = tabs.length - 1;
          const next =
            e.key === 'ArrowRight' ? (i === last ? 0 : i + 1)
            : e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1)
            : e.key === 'Home' ? 0
            : e.key === 'End' ? last
            : null;
          if (next === null) return;
          e.preventDefault();
          select(next, true);
        });
      });

      select(0);
      this.dataset.enhanced = '';
    }
  }

  if (!customElements.get('fl-tabs')) customElements.define('fl-tabs', FlTabs);

}
