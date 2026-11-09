import cx from 'clsx';
import './Field.css';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'tel';
  as?: 'input' | 'select' | 'textarea';
  options?: string[];
  required?: boolean;
  hint?: string;
  autoComplete?: string;
  wide?: boolean;
}

export default function Field(props: Props) {

const {
  label,
  name,
  type = 'text',
  as = 'input',
  options = [],
  required = false,
  hint,
  autoComplete,
  wide = false,
} = props;

const id = `field-${name}`;
const describedBy = [hint && `${id}-hint`, `${id}-error`].filter(Boolean).join(' ');
  return (
    <>
<div className={cx(['field', { 'field--wide': wide }])}>
  <label htmlFor={id}>
    {label}
    {required ? <span className="field__req" aria-hidden="true">Required</span> : <span className="field__opt">Optional</span>}
  </label>
  {hint && <p className="field__hint" id={`${id}-hint`}>{hint}</p>}
  {
    as === 'select' ? (
      <select id={id} name={name} required={required} aria-describedby={describedBy} data-label={label}>
        <option value="">Choose one</option>
        {options.map((o, __i) => (
          <option key={__i} value={o}>{o}</option>
        ))}
      </select>
    ) : as === 'textarea' ? (
      <textarea id={id} name={name} rows={5} required={required} aria-describedby={describedBy} data-label={label} />
    ) : (
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-describedby={describedBy}
        data-label={label}
      />
    )
  }
  <p className="field__error" id={`${id}-error`}></p>
</div>
    </>
  );
}
