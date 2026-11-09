import './FilterGroup.css';

interface Option {
  value: string;
  label: string;
  count?: number;
}

interface Props {
  children?: React.ReactNode;
  label: string;
  options: Option[];
  noun: [singular: string, plural: string];
  /** Query parameter that mirrors the active filter, so a filtered view can be linked. */
  param?: string;
  total?: number;
}

export default function Filtergroup(props: Props) {
const { children } = props;
/*
 * Chip filter as progressive enhancement. Filterable children carry
 * data-filter-tags="a b"; a wrapper marked data-filter-section hides when none of its items match.
 * Without JavaScript the chips stay hidden and every item shows.
 */


const { label, options, noun, param, total } = props;
  return (
    <>
<fl-filter data-singular={noun[0]} data-plural={noun[1]} data-param={param}>
  <div className="filter__bar" role="group" aria-label={label}>
    <button className="chip" type="button" aria-pressed="true" data-filter="">
      All{total !== undefined && <span className="chip__count">{total}</span>}
    </button>
    {
      options.map((o, __i) => (
        <button key={__i} className="chip" type="button" aria-pressed="false" data-filter={o.value}>
          {o.label}
          {o.count !== undefined && <span className="chip__count">{o.count}</span>}
        </button>
      ))
    }
  </div>
  <p className="visually-hidden" role="status" aria-live="polite" data-filter-status></p>
  {children}
</fl-filter>
    </>
  );
}
