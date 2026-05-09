import {
  appIconGuidance,
  assetChecklist,
  logoDontRules,
  logoUsageRules,
  logoVariants,
} from '@/data/identityExamples';

type IdentityVariant = 'logo' | 'app-icon' | 'assets';

function LogoPreviewStage() {
  return (
    <section className="identityHeroPanel" aria-labelledby="logo-preview-title">
      <div className="identityHeroCopy">
        <p className="eyebrow">Approved identity asset</p>
        <h2 id="logo-preview-title">CT6 Cobra Team 6 emblem</h2>
        <p>
          The provided logo gives the brand a strong tactical identity: metallic, elite, command-ready, and aligned with the dark premium CT6 Companion system.
        </p>
      </div>
      <div className="logoStage identityDarkStage">
        <img src="/brand-assets/ct6-logo-transparent.png" alt="CT6 Cobra Team 6 emblem" />
      </div>
    </section>
  );
}

function LogoVariants() {
  return (
    <section className="identitySection" aria-labelledby="logo-variants-title">
      <div className="identitySectionHeader">
        <p className="eyebrow">Logo files</p>
        <h2 id="logo-variants-title">Approved logo exports</h2>
        <p>Use these as the current logo source assets inside the static brand guideline app.</p>
      </div>
      <div className="logoVariantGrid">
        {logoVariants.map((variant) => (
          <article className="logoVariantCard" key={variant.name}>
            <div className={variant.name.includes('White') ? 'logoVariantCanvas logoVariantCanvasLight' : 'logoVariantCanvas'}>
              <img src={variant.asset} alt={variant.name} />
            </div>
            <h3>{variant.name}</h3>
            <p>{variant.usage}</p>
            <small>{variant.note}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClearSpaceDemo() {
  return (
    <section className="identitySection" aria-labelledby="clear-space-title">
      <div className="identitySectionHeader">
        <p className="eyebrow">Construction</p>
        <h2 id="clear-space-title">Clear space and minimum size</h2>
        <p>The logo is detailed. Give it space and avoid using it where its text becomes unreadable.</p>
      </div>
      <div className="identityTwoColumn">
        <div className="clearSpaceDemo">
          <div className="clearSpaceFrame">
            <img src="/brand-assets/ct6-logo-transparent.png" alt="CT6 logo with clear space" />
          </div>
          <p><strong>Clear space:</strong> keep at least 12 percent of the logo width around the emblem on all sides.</p>
        </div>
        <div className="sizeRulesPanel">
          <h3>Minimum digital sizes</h3>
          <ul>
            <li><strong>Hero / cover:</strong> 420px wide minimum</li>
            <li><strong>Marketing card:</strong> 260px wide minimum</li>
            <li><strong>Header logo:</strong> use a simplified lockup below 180px</li>
            <li><strong>Favicon / nav:</strong> do not use the full emblem</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function LogoRules() {
  return (
    <section className="identitySection" aria-labelledby="logo-rules-title">
      <div className="identitySectionHeader">
        <p className="eyebrow">Usage rules</p>
        <h2 id="logo-rules-title">How the logo should be used</h2>
      </div>
      <div className="identityRuleGrid">
        {logoUsageRules.map((rule) => (
          <article className="identityRuleCard" key={rule.title}>
            <span className="identityRuleMarker identityRuleMarkerDo">Do</span>
            <h3>{rule.title}</h3>
            <p>{rule.body}</p>
          </article>
        ))}
        {logoDontRules.map((rule) => (
          <article className="identityRuleCard" key={rule.title}>
            <span className="identityRuleMarker identityRuleMarkerDont">Do not</span>
            <h3>{rule.title}</h3>
            <p>{rule.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AppIconPreview() {
  return (
    <section className="identityHeroPanel" aria-labelledby="app-icon-title">
      <div className="identityHeroCopy">
        <p className="eyebrow">App icon direction</p>
        <h2 id="app-icon-title">Simplify the emblem into a compact CT6 mark.</h2>
        <p>
          The full logo should guide the icon style, but the final app icon should remove tiny text and keep the CT6/cobra identity readable at small sizes.
        </p>
      </div>
      <div className="appIconPreviewGrid">
        <div className="appIconTile appIconTileFull">
          <img src="/brand-assets/ct6-logo-transparent.png" alt="Full CT6 logo in app icon mask" />
          <span>Full emblem: brand use</span>
        </div>
        <div className="appIconTile appIconTileConcept" aria-label="Simplified CT6 app icon concept">
          <strong>CT6</strong>
          <span>Simplified icon target</span>
        </div>
      </div>
    </section>
  );
}

function AppIconRules() {
  return (
    <section className="identitySection" aria-labelledby="app-icon-rules-title">
      <div className="identitySectionHeader">
        <p className="eyebrow">Icon rules</p>
        <h2 id="app-icon-rules-title">Small-size identity requirements</h2>
      </div>
      <div className="identityRuleGrid identityRuleGridCompact">
        {appIconGuidance.map((rule) => (
          <article className="identityRuleCard" key={rule.title}>
            <span className="identityRuleMarker">Rule</span>
            <h3>{rule.title}</h3>
            <p>{rule.body}</p>
          </article>
        ))}
      </div>
      <div className="iconSizeStrip" aria-label="App icon size preview">
        <div><span className="miniIcon size16">CT6</span><strong>16px</strong></div>
        <div><span className="miniIcon size32">CT6</span><strong>32px</strong></div>
        <div><span className="miniIcon size64">CT6</span><strong>64px</strong></div>
        <div><span className="miniIcon size96">CT6</span><strong>128px+</strong></div>
      </div>
    </section>
  );
}

function AssetChecklist() {
  return (
    <section className="identitySection" aria-labelledby="asset-checklist-title">
      <div className="identitySectionHeader">
        <p className="eyebrow">Production checklist</p>
        <h2 id="asset-checklist-title">Brand assets to create, export, and maintain</h2>
        <p>The provided logo assets are now part of the guideline. The remaining assets should be derived from the same CT6 visual language.</p>
      </div>
      <div className="assetChecklistTableWrap">
        <table className="assetChecklistTable">
          <thead>
            <tr>
              <th>Category</th>
              <th>Asset</th>
              <th>Status</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {assetChecklist.map((item) => (
              <tr key={`${item.category}-${item.asset}`}>
                <td>{item.category}</td>
                <td>{item.asset}</td>
                <td><span className={`assetStatus assetStatus${item.status}`}>{item.status}</span></td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function IdentityShowcase({ variant }: { variant: IdentityVariant }) {
  if (variant === 'app-icon') {
    return (
      <div className="identityShowcase" aria-label="CT6 app icon identity guidance">
        <AppIconPreview />
        <AppIconRules />
      </div>
    );
  }

  if (variant === 'assets') {
    return (
      <div className="identityShowcase" aria-label="CT6 brand asset checklist">
        <LogoPreviewStage />
        <AssetChecklist />
      </div>
    );
  }

  return (
    <div className="identityShowcase" aria-label="CT6 logo system guidance">
      <LogoPreviewStage />
      <LogoVariants />
      <ClearSpaceDemo />
      <LogoRules />
    </div>
  );
}