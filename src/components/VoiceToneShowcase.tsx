import { toneExamples, voicePrinciples, wordsToAvoid, wordsToUse } from '@/data/contentExamples';

const toneRules = [
  { label: 'Capitalization', value: 'Use sentence case for UI labels and messages.' },
  { label: 'Punctuation', value: 'Use periods for full sentences. Avoid exclamation marks in product UI.' },
  { label: 'Emoji', value: 'Do not use emoji in core app, security, error, or account messages.' },
  { label: 'Jargon', value: 'Use CT6 operational terms only when they improve clarity.' },
];

function WordList({ title, words, variant }: { title: string; words: readonly string[]; variant: 'use' | 'avoid' }) {
  return (
    <section className={`wordPanel wordPanel-${variant}`}>
      <h3>{title}</h3>
      <div className="wordGrid">
        {words.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </div>
    </section>
  );
}

export function VoiceToneShowcase() {
  return (
    <div className="contentSystemShowcase" aria-label="CT6 voice and tone system">
      <section className="contentHeroPanel">
        <p className="eyebrow">Phase 6 content system</p>
        <h2>CT6 Companion speaks like a calm operations officer.</h2>
        <p>
          The voice is direct, professional, serious, and useful. It should make members feel informed and in control without adding drama, jokes, or fake military chatter.
        </p>
      </section>

      <section className="voicePrincipleGrid" aria-label="Voice principles">
        {voicePrinciples.map((principle) => (
          <article className="voicePrincipleCard" key={principle.title}>
            <span>{principle.title}</span>
            <p>{principle.description}</p>
            <code>{principle.example}</code>
          </article>
        ))}
      </section>

      <section className="toneRulesPanel">
        <div className="contentPanelHeader">
          <p className="eyebrow">Rules of expression</p>
          <h2>Tone controls</h2>
          <p>These rules keep CT6 copy consistent across screens, alerts, onboarding, settings, and notifications.</p>
        </div>
        <div className="toneRuleGrid">
          {toneRules.map((rule) => (
            <article key={rule.label}>
              <strong>{rule.label}</strong>
              <p>{rule.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wordListGrid" aria-label="Vocabulary rules">
        <WordList title="Words to use" words={wordsToUse} variant="use" />
        <WordList title="Words to avoid" words={wordsToAvoid} variant="avoid" />
      </section>

      <section className="toneExamplePanel">
        <div className="contentPanelHeader">
          <p className="eyebrow">Situation examples</p>
          <h2>Bad copy vs CT6 copy</h2>
          <p>Use these examples as the baseline for product writing and launch material.</p>
        </div>
        <div className="toneExampleTableWrap">
          <table className="toneExampleTable">
            <thead>
              <tr>
                <th>Situation</th>
                <th>Bad example</th>
                <th>Good example</th>
                <th>Why it works</th>
              </tr>
            </thead>
            <tbody>
              {toneExamples.map((example) => (
                <tr key={example.situation}>
                  <td>{example.situation}</td>
                  <td className="badCopy">{example.bad}</td>
                  <td className="goodCopy">{example.good}</td>
                  <td>{example.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}