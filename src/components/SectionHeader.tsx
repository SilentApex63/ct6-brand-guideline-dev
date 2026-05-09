export function SectionHeader({
  eyebrow,
  title,
  summary,
  meta = [],
}: {
  eyebrow: string;
  title: string;
  summary: string;
  meta?: string[];
}) {
  return (
    <header className="sectionHeader">
      <div className="sectionHeaderGrid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="summary">{summary}</p>
        </div>
        {meta.length ? (
          <div className="sectionMeta" aria-label="Page metadata">
            {meta.map((item) => <span key={item}>{item}</span>)}
          </div>
        ) : null}
      </div>
    </header>
  );
}
