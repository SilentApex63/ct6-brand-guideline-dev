import { copyPatterns } from '@/data/contentExamples';

const liveCopyExamples = [
  {
    title: 'Success toast',
    label: 'Fleet sync complete.',
    body: '12 records updated.',
    className: 'copyToastSuccess',
  },
  {
    title: 'Error message',
    label: 'Fleet sync failed.',
    body: 'Check your connection and try again.',
    className: 'copyToastError',
  },
  {
    title: 'Empty state',
    label: 'No missions assigned yet.',
    body: 'CT6 operations will appear here when available.',
    className: 'copyToastEmpty',
  },
];

const navigationLabels = ['Dashboard', 'Missions', 'Blueprints', 'Ships', 'Fleet', 'Items', 'Insights', 'Org', 'Settings'];

export function MicrocopyShowcase() {
  return (
    <div className="contentSystemShowcase" aria-label="CT6 microcopy system">
      <section className="contentHeroPanel">
        <p className="eyebrow">Microcopy system</p>
        <h2>Small words should make the interface feel controlled.</h2>
        <p>
          CT6 microcopy is short, useful, and specific. It should reduce uncertainty in buttons, forms, error states, confirmations, tooltips, and notifications.
        </p>
      </section>

      <section className="copyPatternGrid" aria-label="Microcopy patterns">
        {copyPatterns.map((pattern) => (
          <article className="copyPatternCard" key={pattern.category}>
            <span>{pattern.category}</span>
            <p>{pattern.guidance}</p>
            <ul>
              {pattern.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="copyLivePanel">
        <div className="contentPanelHeader">
          <p className="eyebrow">Live copy patterns</p>
          <h2>Interface examples</h2>
          <p>These examples show the tone inside actual CT6 UI patterns.</p>
        </div>
        <div className="copyLiveGrid">
          {liveCopyExamples.map((example) => (
            <article className={`copyLiveCard ${example.className}`} key={example.title}>
              <span>{example.title}</span>
              <strong>{example.label}</strong>
              <p>{example.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="copyFormPanel">
        <div className="contentPanelHeader">
          <p className="eyebrow">Forms</p>
          <h2>Labels, placeholders, and helper text</h2>
          <p>Labels are permanent. Placeholders are only examples. Helper text should explain why the input matters.</p>
        </div>
        <div className="copyFormExample">
          <label>
            <span>RSI handle</span>
            <input defaultValue="SilentApex63" />
            <small>Used only to display private CT6 Companion insights.</small>
          </label>
          <label>
            <span>Search ships</span>
            <input placeholder="Search by ship, variant, or manufacturer" />
            <small>Use specific search hints when a field supports multiple types.</small>
          </label>
          <label className="copyFieldError">
            <span>Sync ID</span>
            <input aria-invalid="true" placeholder="Enter sync ID" />
            <small>Sync ID is required before CT6 support can review this issue.</small>
          </label>
        </div>
      </section>

      <section className="navLabelPanel">
        <div className="contentPanelHeader">
          <p className="eyebrow">Navigation labels</p>
          <h2>Keep labels predictable</h2>
          <p>Use plain labels that match the member task. Avoid vague names like Zone, Core, or Space Stuff.</p>
        </div>
        <div className="navLabelGrid">
          {navigationLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </section>
    </div>
  );
}