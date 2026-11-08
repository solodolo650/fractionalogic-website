export default function init() {

  const messageFor = (field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const label = (field.dataset.label ?? 'this field').toLowerCase();
    if (field.validity.valueMissing) return field instanceof HTMLSelectElement ? `Choose your ${label}` : `Enter your ${label}`;
    if (field.validity.typeMismatch && field.type === 'email') return 'Enter an email address like name@company.com';
    if (field.validity.typeMismatch && field.type === 'url') return 'Enter a full link, starting with https://';
    return field.validationMessage;
  };

  document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
    const shell = form.parentElement!;
    const summary = form.querySelector<HTMLElement>('[data-summary]')!;
    const summaryList = form.querySelector<HTMLElement>('[data-summary-list]')!;
    const errorBox = form.querySelector<HTMLElement>('[data-error]')!;
    const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
    const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;
    const success = shell.querySelector<HTMLElement>('[data-success]')!;
    const fields = [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[data-label]')];
    const idleLabel = submitLabel.textContent;

    const showFieldError = (field: (typeof fields)[number], message: string) => {
      const error = document.getElementById(`${field.id}-error`);
      if (error) error.textContent = message;
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
    };

    fields.forEach((field) =>
      field.addEventListener('blur', () => {
        if (field.getAttribute('aria-invalid') === 'true' || field.value) showFieldError(field, field.checkValidity() ? '' : messageFor(field));
      }),
    );

    const finish = () => {
      form.hidden = true;
      success.hidden = false;
      success.focus();
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      errorBox.hidden = true;

      const invalid = fields.filter((field) => !field.checkValidity());
      fields.forEach((field) => showFieldError(field, field.checkValidity() ? '' : messageFor(field)));
      if (invalid.length) {
        summaryList.replaceChildren(
          ...invalid.map((field) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${field.id}`;
            a.textContent = messageFor(field);
            a.addEventListener('click', (e) => {
              e.preventDefault();
              field.focus();
            });
            li.append(a);
            return li;
          }),
        );
        summary.hidden = false;
        summary.focus();
        return;
      }
      summary.hidden = true;

      const trap = form.querySelector<HTMLInputElement>('[data-trap]');
      if (trap?.value) return finish();

      if (!form.getAttribute('action')) {
        errorBox.hidden = false;
        return;
      }

      const data = new FormData(form);
      data.delete('website');
      submit.setAttribute('aria-busy', 'true');
      submit.disabled = true;
      submitLabel.textContent = 'Sending…';

      try {
        const response = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error(String(response.status));
        finish();
      } catch {
        errorBox.hidden = false;
      } finally {
        submit.removeAttribute('aria-busy');
        submit.disabled = false;
        submitLabel.textContent = idleLabel;
      }
    });
  });

}
