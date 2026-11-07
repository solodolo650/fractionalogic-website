export default function init() {

  document.querySelectorAll<HTMLAnchorElement>('a.email-link[data-user]').forEach((link) => {
    const address = `${link.dataset.user}@${link.dataset.domain}`;
    link.href = `mailto:${address}`;
    link.textContent = address;
  });

}
