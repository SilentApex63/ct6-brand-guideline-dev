export function SectionHeader({ eyebrow, title, summary }: { eyebrow: string; title: string; summary: string }) {
  return (
    <header className="sectionHeader">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="summary">{summary}</p>
    </header>
  );
}
