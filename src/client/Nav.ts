export default function init() {

  const triggers = document.querySelectorAll<HTMLButtonElement>('.nav__trigger');

  const closeAll = (except?: HTMLButtonElement) => {
    triggers.forEach((t) => {
      if (t !== except) t.setAttribute('aria-expanded', 'false');
    });
  };

  triggers.forEach((trigger) => {
    const group = trigger.closest<HTMLElement>('.nav__group');
    let leaveTimer: number | undefined;

    group?.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse') return;
      window.clearTimeout(leaveTimer);
      closeAll(trigger);
      trigger.setAttribute('aria-expanded', 'true');
    });
    // A short grace period stops the menu snapping shut when the pointer
    // cuts a corner on its way down into it.
    group?.addEventListener('pointerleave', (e) => {
      if (e.pointerType !== 'mouse') return;
      leaveTimer = window.setTimeout(() => {
        if (!group.contains(document.activeElement)) trigger.setAttribute('aria-expanded', 'false');
      }, 120);
    });
    trigger.addEventListener('click', (e) => {
      // A mouse has already opened the menu on hover, so its click confirms rather than toggles.
      const hoverOpened = e instanceof PointerEvent && e.pointerType === 'mouse';
      const open = trigger.getAttribute('aria-expanded') === 'true';
      closeAll(trigger);
      trigger.setAttribute('aria-expanded', String(hoverOpened || !open));
    });
    group?.addEventListener('focusout', (e) => {
      if (!group.contains(e.relatedTarget as Node | null)) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  const toggle = document.querySelector<HTMLButtonElement>('.nav__toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  const setMobile = (open: boolean) => {
    if (!toggle || !mobileMenu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.classList.toggle('is-open', open);
  };

  toggle?.addEventListener('click', () => {
    setMobile(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!(target instanceof Element) || !target.closest('.nav__group')) closeAll();
    if (!(target instanceof Element) || !target.closest('.nav')) setMobile(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const openTrigger = document.querySelector<HTMLButtonElement>('.nav__trigger[aria-expanded="true"]');
    closeAll();
    openTrigger?.focus();
    if (toggle?.getAttribute('aria-expanded') === 'true') {
      setMobile(false);
      toggle.focus();
    }
  });

}
