const systemStats = [
  { label: 'Guideline pages', value: '24' },
  { label: 'Core tokens', value: '8 sets' },
  { label: 'Primary mode', value: 'Dark' },
  { label: 'Build type', value: 'Static' },
];

const focusAreas = [
  {
    title: 'Brand foundation',
    body: 'Mission, vision, values, positioning, and CT6-only audience rules.',
    href: '/foundation',
  },
  {
    title: 'Visual system',
    body: 'Color, typography, layout, iconography, motion, and reusable UI rules.',
    href: '/colors',
  },
  {
    title: 'Implementation',
    body: 'Design tokens, checklists, and rules for future CT6 app builds.',
    href: '/tokens',
  },
];

const commandPriorities = [
  'Make every guideline page feel like a premium CT6 command manual.',
  'Use clear visual examples instead of long walls of text wherever possible.',
  'Keep the app static, reviewable, and easy to deploy after each step.',
  'Protect private CT6, account, fleet, and member information in all examples.',
];

const buildPhases = [
  {
    phase: 'Phase 01',
    title: 'Foundation shell',
    status: 'Deployed',
    body: 'Static route structure, sidebar, token files, and initial content.',
  },
  {
    phase: 'Phase 02',
    title: 'Command layout',
    status: 'Current',
    body: 'Landing page, grouped navigation, command bar, stronger page hierarchy.',
  },
  {
    phase: 'Phase 03',
    title: 'Component previews',
    status: 'Next',
    body: 'Buttons, cards, inputs, badges, tables, modals, toasts, and states.',
  },
  {
    phase: 'Phase 04',
    title: 'Brand assets',
    status: 'Planned',
    body: 'Logo direction, app icon mock areas, social/app-store templates, do/don’t visuals.',
  },
];

export function LandingPage() {
  return (
    <article className="landingPage" aria-labelledby="landing-title">
      <section className="landingHero">
        <div className="heroCopy">
          <p className="eyebrow">Static Brand Guideline App</p>
          <h1 id="landing-title">CT6 Companion Brand Command Manual</h1>
          <p className="summary">
            A dark, tactical, premium guideline system for designing CT6 Companion and future CT6 apps with one consistent visual language.
          </p>
          <div className="heroActions" aria-label="Primary guideline actions">
            <a className="buttonPrimary" href="/overview">Start review</a>
            <a className="buttonSecondary" href="/tokens">View tokens</a>
          </div>
        </div>

        <aside className="heroConsole" aria-label="CT6 brand system snapshot">
          <div className="consoleHeader">
            <span className="statusDot" aria-hidden="true" />
            <strong>Command Glass Ops</strong>
          </div>
          <dl className="statGrid">
            {systemStats.map((stat) => (
              <div key={stat.label} className="statCard">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <div className="consoleReadout">
            <span>Primary action</span>
            <strong>Command Green</strong>
            <code>#35E184</code>
          </div>
        </aside>
      </section>

      <section className="landingBand" aria-label="Guideline purpose">
        <div>
          <span>Purpose</span>
          <strong>Source of truth for CT6 brand, UI, writing, launch, and implementation standards.</strong>
        </div>
        <div>
          <span>Rule</span>
          <strong>This is a static review app. No backend, no accounts, no live RSI data.</strong>
        </div>
      </section>

      <section className="landingSection" aria-labelledby="focus-title">
        <div className="landingSectionHeader">
          <p className="eyebrow">Review path</p>
          <h2 id="focus-title">Start with the systems that shape every future screen.</h2>
        </div>
        <div className="focusGrid">
          {focusAreas.map((area) => (
            <a className="focusCard" key={area.title} href={area.href}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
              <span>Open section →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="landingSplit" aria-label="Current priorities and build phases">
        <div className="panel priorityPanel">
          <p className="eyebrow">Current priorities</p>
          <h2>What this phase improves</h2>
          <ul className="checkList">
            {commandPriorities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel roadmapPanel">
          <p className="eyebrow">Build sequence</p>
          <h2>Static app roadmap</h2>
          <div className="roadmapList">
            {buildPhases.map((item) => (
              <div className="roadmapItem" key={item.phase}>
                <span>{item.phase}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
                <em>{item.status}</em>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
