import { tokenCategories, tokenSnippets } from '@/data/visualSystemData';

export function TokenSystemShowcase() {
  return (
    <section className="visualShowcase" aria-labelledby="token-system-showcase-title">
      <div className="showcaseHeader">
        <p className="eyebrow">Token specification</p>
        <h2 id="token-system-showcase-title">Developer-ready source of truth</h2>
        <p>
          Tokens turn the CT6 brand into reusable engineering decisions. Use role-based names for UI,
          not one-off hardcoded values.
        </p>
      </div>

      <div className="tokenCategoryGrid">
        {tokenCategories.map((category) => (
          <article className="tokenCategoryCard" key={category.name}>
            <span>{category.prefix}</span>
            <h3>{category.name}</h3>
            <p>{category.purpose}</p>
            <code>{category.example}</code>
          </article>
        ))}
      </div>

      <section className="tokenSnippetGrid" aria-label="Token snippets">
        {tokenSnippets.map((snippet) => (
          <article className="tokenSnippetCard" key={snippet.title}>
            <h3>{snippet.title}</h3>
            <pre><code>{snippet.code}</code></pre>
          </article>
        ))}
      </section>

      <section className="tokenImplementationPanel">
        <div>
          <p className="eyebrow">Implementation rule</p>
          <h3>Use tokens in components before adding custom values.</h3>
        </div>
        <ul>
          <li>Use <code>color.bg.elevated</code> for cards before inventing a new dark surface.</li>
          <li>Use <code>space.4</code>, <code>space.5</code>, and <code>space.6</code> for standard component spacing.</li>
          <li>Use <code>radius.card</code> and <code>radius.button</code> for consistent shape language.</li>
          <li>Use semantic tokens for status instead of raw red, green, amber, or cyan values.</li>
        </ul>
      </section>
    </section>
  );
}