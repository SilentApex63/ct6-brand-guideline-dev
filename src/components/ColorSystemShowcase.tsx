import { colorUsageExamples, paletteGroups } from '@/data/visualSystemData';

export function ColorSystemShowcase() {
  return (
    <section className="visualShowcase" aria-labelledby="color-system-showcase-title">
      <div className="showcaseHeader">
        <p className="eyebrow">Color specification</p>
        <h2 id="color-system-showcase-title">Operational palette rules</h2>
        <p>
          The CT6 color system is dark-first and role-based. Every accent should communicate action,
          status, hierarchy, or premium emphasis.
        </p>
      </div>

      <div className="paletteGroupStack">
        {paletteGroups.map((group) => (
          <section className="paletteGroup" key={group.title}>
            <div className="paletteGroupHeader">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <div className="advancedSwatchGrid">
              {group.colors.map((color) => (
                <article className="advancedSwatchCard" key={color.token}>
                  <div
                    className={`advancedSwatch ${color.text === 'dark' ? 'swatchTextDark' : 'swatchTextLight'}`}
                    style={{ background: color.hex }}
                  >
                    <span>{color.name}</span>
                    <strong>{color.hex}</strong>
                  </div>
                  <div className="advancedSwatchBody">
                    <dl>
                      <div>
                        <dt>RGB</dt>
                        <dd>{color.rgb}</dd>
                      </div>
                      <div>
                        <dt>Token</dt>
                        <dd><code>{color.token}</code></dd>
                      </div>
                    </dl>
                    <p>{color.usage}</p>
                    <small>{color.note}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="usageRuleGrid" aria-label="Color do and don't rules">
        {colorUsageExamples.map((example) => (
          <article className="usageRuleCard" key={example.title}>
            <h3>{example.title}</h3>
            <div>
              <span className="ruleDo">Do</span>
              <p>{example.do}</p>
            </div>
            <div>
              <span className="ruleDont">Donâ€™t</span>
              <p>{example.dont}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}