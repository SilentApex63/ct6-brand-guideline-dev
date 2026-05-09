import { fontFamilies, typeScale, typographyRules } from '@/data/visualSystemData';

export function TypographyShowcase() {
  return (
    <section className="visualShowcase" aria-labelledby="typography-showcase-title">
      <div className="showcaseHeader">
        <p className="eyebrow">Typography specification</p>
        <h2 id="typography-showcase-title">Readable tactical hierarchy</h2>
        <p>
          CT6 typography should feel precise, modern, and operational. The system uses readable UI text,
          confident headings, and mono styling only for technical data.
        </p>
      </div>

      <div className="fontFamilyGrid">
        {fontFamilies.map((font) => (
          <article className="fontFamilyCard" key={font.name}>
            <div>
              <span>{font.role}</span>
              <h3>{font.name}</h3>
            </div>
            <p className={`fontSample fontSample${font.name.replace(/\s+/g, '')}`}>{font.sample}</p>
            <dl>
              <div>
                <dt>Token</dt>
                <dd><code>{font.token}</code></dd>
              </div>
              <div>
                <dt>Usage</dt>
                <dd>{font.usage}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <section className="typeScalePanel" aria-label="Type scale preview">
        <div className="typeScaleHeader">
          <h3>Type scale preview</h3>
          <p>Use these styles as the baseline for app screens, documentation, and launch materials.</p>
        </div>
        <div className="typeScaleRows">
          {typeScale.map((item) => (
            <article className="typeScaleRow" key={item.token}>
              <div className="typeMeta">
                <strong>{item.style}</strong>
                <span>{item.size} / {item.lineHeight} / {item.weight}</span>
                <code>{item.token}</code>
              </div>
              <p className={`typePreview typePreview${item.style.replace(/\s+/g, '')}`}>{item.sample}</p>
              <small>{item.usage}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="typographyRuleGrid" aria-label="Typography rules">
        {typographyRules.map((rule) => (
          <article className="typographyRuleCard" key={rule.title}>
            <h3>{rule.title}</h3>
            <p>{rule.detail}</p>
          </article>
        ))}
      </section>
    </section>
  );
}