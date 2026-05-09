import {
  accessibilityCards,
  doDontExamples,
  implementationTracks,
  motionCards,
  qaChecklist,
  themeCards,
} from '@/data/qualityExamples';

function CardGrid({ cards }: { cards: { title: string; summary: string; rules: string[] }[] }) {
  return (
    <div className="qualityCardGrid">
      {cards.map((card) => (
        <article className="qualityCard" key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.summary}</p>
          <ul>
            {card.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function AccessibilityShowcase() {
  return (
    <div className="qualityShowcase">
      <section className="qualityHeroPanel">
        <div>
          <p className="eyebrow">Accessibility system</p>
          <h2>Premium design must remain usable under real conditions.</h2>
          <p>
            CT6 Companion can look tactical and premium, but it must remain readable, keyboard-friendly,
            color-blind-friendly, and usable on mobile.
          </p>
        </div>
        <div className="accessibilityPreview">
          <div className="contrastTile strong">Primary text<br /><span>4.5:1 target</span></div>
          <div className="contrastTile active">Focus state<br /><span>Visible green outline</span></div>
          <div className="contrastTile warning">Warning<br /><span>Icon plus label</span></div>
        </div>
      </section>
      <CardGrid cards={accessibilityCards} />
    </div>
  );
}

function ThemesShowcase() {
  return (
    <div className="qualityShowcase">
      <section className="qualityHeroPanel">
        <div>
          <p className="eyebrow">Theme system</p>
          <h2>Dark mode is primary. Light mode is functional and controlled.</h2>
          <p>
            The CT6 identity must survive theme changes. Light mode should not become a generic white dashboard.
          </p>
        </div>
        <div className="themePreviewGrid">
          <div className="themePreview darkThemePreview">
            <span>Dark mode</span>
            <strong>Command ready</strong>
            <em>Void Black / Command Green</em>
          </div>
          <div className="themePreview lightThemePreview">
            <span>Light mode</span>
            <strong>Operational document</strong>
            <em>Cool grey / Deep green</em>
          </div>
        </div>
      </section>
      <CardGrid cards={themeCards} />
    </div>
  );
}

function MotionShowcase() {
  return (
    <div className="qualityShowcase">
      <section className="qualityHeroPanel">
        <div>
          <p className="eyebrow">Motion and interaction</p>
          <h2>Movement should communicate status, not show off.</h2>
          <p>
            CT6 motion is fast, controlled, and tactical. It supports orientation, feedback, and confidence.
          </p>
        </div>
        <div className="motionPreview">
          <div className="motionPulse">Active card</div>
          <div className="motionTiming"><strong>150ms</strong><span>Small interaction</span></div>
          <div className="motionTiming"><strong>300ms</strong><span>Modal transition</span></div>
        </div>
      </section>
      <CardGrid cards={motionCards} />
    </div>
  );
}

function DoDontShowcase() {
  return (
    <div className="qualityShowcase">
      <section className="qualityHeroPanel">
        <div>
          <p className="eyebrow">Decision control</p>
          <h2>Specific do and do-not examples reduce inconsistent execution.</h2>
          <p>
            These examples help designers, developers, writers, and marketers make consistent CT6 decisions.
          </p>
        </div>
      </section>
      <div className="doDontGrid">
        {doDontExamples.map((example) => (
          <article className="doDontCard" key={example.area}>
            <h3>{example.area}</h3>
            <div className="doBlock"><span>Do</span><p>{example.doThis}</p></div>
            <div className="dontBlock"><span>Do not</span><p>{example.avoidThis}</p></div>
            <p className="reasonBlock">{example.reason}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ImplementationShowcase() {
  return (
    <div className="qualityShowcase">
      <section className="qualityHeroPanel">
        <div>
          <p className="eyebrow">Implementation control</p>
          <h2>The guideline app should be usable as a production source of truth.</h2>
          <p>
            This page turns the brand manual into an execution checklist for design, engineering, launch, and QA.
          </p>
        </div>
        <div className="implementationScorecard">
          <strong>Static guideline status</strong>
          <span>Stable deployment</span>
          <span>Visual system active</span>
          <span>Identity assets integrated</span>
        </div>
      </section>
      <CardGrid cards={implementationTracks} />
      <section className="qualityPanel">
        <p className="eyebrow">Final QA checklist</p>
        <h2>Review before declaring the brand guideline complete</h2>
        <ul className="qaChecklist">
          {qaChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function QualityShowcase({ variant }: { variant: string }) {
  if (variant === 'accessibility') return <AccessibilityShowcase />;
  if (variant === 'themes') return <ThemesShowcase />;
  if (variant === 'motion') return <MotionShowcase />;
  if (variant === 'do-dont') return <DoDontShowcase />;
  return <ImplementationShowcase />;
}