import './Tabs.css';

interface Tab {
  id: string;
  label: string;
}

interface Props {
  children?: React.ReactNode;
  label: string;
  tabs: Tab[];
}

export default function Tabs(props: Props) {
const { children } = props;
/*
 * Accessible tabs as progressive enhancement. Children mark each panel with
 * data-tab-panel="<id>" and give it a .tab-heading; without JavaScript every
 * panel shows in order under its own heading.
 */


const { label, tabs } = props;
const uid = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <>
<fl-tabs data-uid={uid}>
  <div className="tabs__list" role="tablist" aria-label={label}>
    {
      tabs.map((tab, i) => (
        <button key={i}
          className="tabs__tab"
          type="button"
          role="tab"
          id={`${uid}-tab-${tab.id}`}
          aria-controls={`${uid}-panel-${tab.id}`}
          aria-selected={i === 0 ? 'true' : 'false'}
          tabIndex={i === 0 ? 0 : -1}
          data-tab={tab.id}
        >
          {tab.label}
        </button>
      ))
    }
  </div>
  <div className="tabs__panels">
    {children}
  </div>
</fl-tabs>
    </>
  );
}
