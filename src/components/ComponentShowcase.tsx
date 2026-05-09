import { componentExamples } from '@/data/componentExamples';

const missionRows = [
  { code: 'CT6-M-021', name: 'Recon Sweep', owner: 'Ops Lead', status: 'Ready', priority: 'High' },
  { code: 'CT6-BP-118', name: 'Blueprint Review', owner: 'Logistics', status: 'Pending', priority: 'Medium' },
  { code: 'CT6-FLT-044', name: 'Fleet Audit', owner: 'Command', status: 'Synced', priority: 'Normal' },
];

const badgeExamples = ['Ready', 'Synced', 'Private', 'Pending', 'Critical', 'Leadership'];

function ComponentSpecCard({ example }: { example: (typeof componentExamples)[number] }) {
  return (
    <section className="componentSpecCard" id={example.id}>
      <div className="componentSpecHeader">
        <span>{example.category}</span>
        <h3>{example.title}</h3>
        <p>{example.purpose}</p>
      </div>

      <dl className="componentSpecGrid">
        <div>
          <dt>Visual style</dt>
          <dd>{example.visualStyle}</dd>
        </div>
        <div>
          <dt>Spacing</dt>
          <dd>{example.spacing}</dd>
        </div>
        <div>
          <dt>Typography</dt>
          <dd>{example.typography}</dd>
        </div>
        <div>
          <dt>Color usage</dt>
          <dd>{example.colorUsage}</dd>
        </div>
      </dl>

      <div className="componentRuleColumns">
        <div>
          <h4>States</h4>
          <div className="componentChipRow">
            {example.states.map((state) => (
              <span className="componentChip" key={state}>{state}</span>
            ))}
          </div>
        </div>
        <div>
          <h4>Do</h4>
          <ul>{example.dos.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h4>Donâ€™t</h4>
          <ul>{example.donts.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function ButtonPreview() {
  return (
    <section className="componentPreviewPanel" aria-labelledby="button-preview-title">
      <div className="componentPreviewHeader">
        <p className="eyebrow">Live style preview</p>
        <h2 id="button-preview-title">Action hierarchy</h2>
        <p>Buttons show how CT6 actions should feel: direct, readable, and operational.</p>
      </div>
      <div className="buttonDemoGrid">
        <button className="buttonPrimary" type="button">Sync fleet</button>
        <button className="buttonSecondary" type="button">View details</button>
        <button className="componentTextButton" type="button">Open logs</button>
        <button className="componentIconButton" type="button" aria-label="Open filters">âŒ•</button>
        <button className="componentDangerButton" type="button">Revoke access</button>
        <button className="componentDisabledButton" type="button" disabled>Unavailable</button>
      </div>
    </section>
  );
}

function FormPreview() {
  return (
    <section className="componentPreviewPanel" aria-labelledby="form-preview-title">
      <div className="componentPreviewHeader">
        <p className="eyebrow">Form system</p>
        <h2 id="form-preview-title">Inputs, selects, and helper copy</h2>
        <p>Use labels, examples, and focused states instead of unclear placeholders.</p>
      </div>
      <div className="formPreviewGrid">
        <label className="fieldGroup">
          <span>RSI handle</span>
          <input defaultValue="SilentApex63" aria-describedby="handle-help" />
          <small id="handle-help">Used only for private CT6 insight examples.</small>
        </label>
        <label className="fieldGroup">
          <span>Mission type</span>
          <select defaultValue="recon">
            <option value="recon">Recon</option>
            <option value="fleet">Fleet operation</option>
            <option value="blueprint">Blueprint review</option>
          </select>
        </label>
        <label className="fieldGroup fieldGroupError">
          <span>Sync ID</span>
          <input defaultValue="" placeholder="Enter sync ID" aria-invalid="true" />
          <small>Sync ID is required before support can review this issue.</small>
        </label>
      </div>
    </section>
  );
}

function CardPreview() {
  return (
    <section className="componentPreviewPanel" aria-labelledby="card-preview-title">
      <div className="componentPreviewHeader">
        <p className="eyebrow">Surface system</p>
        <h2 id="card-preview-title">Operational cards</h2>
        <p>Cards should group one clear decision, status, or data set.</p>
      </div>
      <div className="cardPreviewGrid">
        <article className="missionCardExample">
          <div className="missionCardTop">
            <span className="statusBadge statusReady">Ready</span>
            <span className="componentCode">CT6-M-021</span>
          </div>
          <h3>Recon Sweep</h3>
          <p>Review assigned route, ship class, and mission readiness before deployment.</p>
          <div className="missionMetaGrid">
            <span><strong>Owner</strong> Ops Lead</span>
            <span><strong>Priority</strong> High</span>
          </div>
        </article>
        <article className="missionCardExample premiumCardExample">
          <div className="missionCardTop">
            <span className="statusBadge statusPremium">Leadership</span>
            <span className="componentCode">CT6-CMD</span>
          </div>
          <h3>Command Brief</h3>
          <p>Gold is reserved for leadership, premium emphasis, and rare milestone states.</p>
          <div className="missionMetaGrid">
            <span><strong>Mode</strong> Private</span>
            <span><strong>Access</strong> Restricted</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function BadgePreview() {
  return (
    <section className="componentPreviewPanel" aria-labelledby="badge-preview-title">
      <div className="componentPreviewHeader">
        <p className="eyebrow">Status language</p>
        <h2 id="badge-preview-title">Badges and indicators</h2>
        <p>Status colors must always be paired with readable text labels.</p>
      </div>
      <div className="badgeDemoRow">
        {badgeExamples.map((badge) => (
          <span className={`statusBadge status${badge.replace(/\s/g, '')}`} key={badge}>{badge}</span>
        ))}
      </div>
    </section>
  );
}

function TablePreview() {
  return (
    <section className="componentPreviewPanel" aria-labelledby="table-preview-title">
      <div className="componentPreviewHeader">
        <p className="eyebrow">Data density</p>
        <h2 id="table-preview-title">Mission data table</h2>
        <p>Dense information should remain scannable, aligned, and predictable.</p>
      </div>
      <div className="componentTableWrap">
        <table className="componentDataTable">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {missionRows.map((row) => (
              <tr key={row.code}>
                <td><code>{row.code}</code></td>
                <td>{row.name}</td>
                <td>{row.owner}</td>
                <td><span className={`statusBadge status${row.status}`}>{row.status}</span></td>
                <td>{row.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FeedbackPreview() {
  return (
    <section className="componentPreviewPanel" aria-labelledby="feedback-preview-title">
      <div className="componentPreviewHeader">
        <p className="eyebrow">System feedback</p>
        <h2 id="feedback-preview-title">Toasts, empty states, and errors</h2>
        <p>Feedback should say what happened and what the member can do next.</p>
      </div>
      <div className="feedbackPreviewGrid">
        <div className="toastExample toastSuccess"><strong>Fleet sync complete.</strong><span>12 records updated.</span></div>
        <div className="toastExample toastWarning"><strong>Blueprint data changed.</strong><span>Review updated requirements.</span></div>
        <div className="toastExample toastError"><strong>Sync failed.</strong><span>Check your connection and try again.</span></div>
        <div className="emptyStateExample">
          <div className="emptyStateIcon">âŒ¬</div>
          <h3>No fleet data synced</h3>
          <p>Connect your account or run a manual sync to view private fleet details.</p>
          <button className="buttonPrimary" type="button">Start sync</button>
        </div>
      </div>
    </section>
  );
}

export function ComponentShowcase() {
  return (
    <div className="componentShowcase" aria-label="CT6 UI component system showcase">
      <section className="componentIntroPanel">
        <p className="eyebrow">Phase 3 system reference</p>
        <h2>Component rules translated into visual examples.</h2>
        <p>
          This page defines how CT6 Companion components should look, read, and behave across the static guideline app and future CT6 product interfaces.
        </p>
      </section>

      <ButtonPreview />
      <FormPreview />
      <CardPreview />
      <BadgePreview />
      <TablePreview />
      <FeedbackPreview />

      <div className="componentSpecStack">
        {componentExamples.map((example) => (
          <ComponentSpecCard example={example} key={example.id} />
        ))}
      </div>
    </div>
  );
}

