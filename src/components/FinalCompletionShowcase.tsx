import {
  completionCards,
  finalQaItems,
  foundationRules,
  layoutRules,
  strategyRules,
  visualLanguageRules,
} from '@/data/finalExamples';

type RuleCard = {
  title: string;
  principle: string;
  rules: string[];
};

function RuleGrid({ rules }: { rules: RuleCard[] }) {
  return (
    <div className="finalRuleGrid">
      {rules.map((rule) => (
        <article className="finalRuleCard" key={rule.title}>
          <h3>{rule.title}</h3>
          <p>{rule.principle}</p>
          <ul>
            {rule.rules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function CompletionDashboard() {
  return (
    <div className="finalShowcase">
      <section className="finalHeroPanel">
        <div>
          <p className="eyebrow">Final brand system status</p>
          <h2>CT6 Companion now has a working static brand guideline app.</h2>
          <p>
            The guideline now covers strategy, identity, design language, components, content,
            launch communication, accessibility, and implementation readiness.
          </p>
        </div>
        <div className="finalStatusConsole">
          <strong>System readiness</strong>
          <span>Static app deployed</span>
          <span>Primary routes verified</span>
          <span>Design system documented</span>
          <span>Identity assets integrated</span>
        </div>
      </section>

      <div className="completionGrid">
        {completionCards.map((card) => (
          <article className="completionCard" key={card.title}>
            <span>{card.status}</span>
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
            <ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>

      <section className="finalPanel">
        <p className="eyebrow">Final QA</p>
        <h2>Completion checklist</h2>
        <ul className="finalQaList">
          {finalQaItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}

function FoundationFinal() {
  return (
    <div className="finalShowcase">
      <section className="finalHeroPanel">
        <div>
          <p className="eyebrow">Foundation polish</p>
          <h2>The foundation should guide real design, product, and writing decisions.</h2>
          <p>
            CT6 Companion is a private operational companion. Every strategic statement must translate
            into product behavior, visual hierarchy, or communication style.
          </p>
        </div>
        <div className="finalStatusConsole">
          <strong>Foundation rules</strong>
          <span>CT6-only</span>
          <span>Private and controlled</span>
          <span>Command-ready</span>
        </div>
      </section>
      <RuleGrid rules={foundationRules} />
    </div>
  );
}

function StrategyFinal() {
  return (
    <div className="finalShowcase">
      <section className="finalHeroPanel">
        <div>
          <p className="eyebrow">Strategy polish</p>
          <h2>Position the app as the private CT6 command layer.</h2>
          <p>
            CT6 Companion should stand apart from general tools by being member-specific, operational,
            and connected to CT6 planning, readiness, and private context.
          </p>
        </div>
        <div className="positioningFormula">
          <span>For CT6 members</span>
          <strong>Private operational companion</strong>
          <em>Unified data, readiness, and member support</em>
        </div>
      </section>
      <RuleGrid rules={strategyRules} />
    </div>
  );
}

function LayoutFinal() {
  return (
    <div className="finalShowcase">
      <section className="finalHeroPanel">
        <div>
          <p className="eyebrow">Layout polish</p>
          <h2>Command layouts should support fast scanning and controlled density.</h2>
          <p>
            The CT6 layout system should be flexible enough for dashboards, databases, mobile cards,
            admin screens, and static brand pages.
          </p>
        </div>
        <div className="layoutPreview">
          <div className="layoutBar" />
          <div className="layoutCards">
            <span />
            <span />
            <span />
          </div>
          <div className="layoutTable">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
      <RuleGrid rules={layoutRules} />
    </div>
  );
}

function VisualLanguageFinal({ variant }: { variant: 'iconography' | 'illustration' | 'imagery' }) {
  const label = variant === 'imagery' ? 'Photography and imagery' : variant.charAt(0).toUpperCase() + variant.slice(1);
  return (
    <div className="finalShowcase">
      <section className="finalHeroPanel">
        <div>
          <p className="eyebrow">Visual language polish</p>
          <h2>{label} should support the CT6 command-console identity.</h2>
          <p>
            Visual assets should make the interface clearer, more premium, and more operational.
            They should not become decoration that competes with the information.
          </p>
        </div>
        <div className="visualLanguagePreview">
          <div className="schematicIcon">CT6</div>
          <div className="schematicLines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
      <RuleGrid rules={visualLanguageRules[variant]} />
    </div>
  );
}

export function FinalCompletionShowcase({ variant }: { variant: string }) {
  if (variant === 'overview') return <CompletionDashboard />;
  if (variant === 'foundation') return <FoundationFinal />;
  if (variant === 'strategy') return <StrategyFinal />;
  if (variant === 'layout') return <LayoutFinal />;
  if (variant === 'iconography' || variant === 'illustration' || variant === 'imagery') {
    return <VisualLanguageFinal variant={variant} />;
  }
  return <CompletionDashboard />;
}