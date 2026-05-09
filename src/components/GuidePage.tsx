import { guideContent } from '@/data/guideContent';
import { getAdjacentNavigation, getNavigationItem } from '@/data/navigation';
import { SectionHeader } from './SectionHeader';
import { ColorSwatches } from './ColorSwatches';
import { TokenTables } from './TokenTables';
import { ComponentShowcase } from './ComponentShowcase';
import { ColorSystemShowcase } from './ColorSystemShowcase';
import { TypographyShowcase } from './TypographyShowcase';
import { TokenSystemShowcase } from './TokenSystemShowcase';

export function GuidePage({ slug }: { slug: string }) {
  const page = guideContent[slug] ?? guideContent.overview;
  const current = getNavigationItem(slug);
  const { previous, next } = getAdjacentNavigation(slug);

  return (
    <article className="guidePage">
      <SectionHeader
        eyebrow={page.eyebrow}
        title={page.title}
        summary={page.summary}
        meta={[current?.index ? `Section ${current.index}` : 'Guideline', current?.group ?? 'Brand System', 'Static reference']}
      />

      <div className="sectionGrid">
        {page.sections.map((section, index) => (
          <section className="panel guidePanel" key={section.heading}>
            <span className="panelIndex">{String(index + 1).padStart(2, '0')}</span>
            <h2>{section.heading}</h2>
            {section.body ? <p>{section.body}</p> : null}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {slug === 'colors' ? <ColorSystemShowcase /> : null}
      {slug === 'typography' ? <TypographyShowcase /> : null}
      {slug === 'tokens' ? <TokenSystemShowcase /> : null}
      {slug === 'components' ? <ComponentShowcase /> : null}
      {slug === 'colors' ? <ColorSwatches /> : null}
      {slug === 'tokens' || slug === 'colors' || slug === 'typography' || slug === 'layout' ? <TokenTables variant={slug} /> : null}

      <footer className="pageNav" aria-label="Section navigation">
        {previous ? (
          <a href={previous.href}>
            <span>Previous</span>
            <strong>{previous.label}</strong>
          </a>
        ) : <span />}
        {next ? (
          <a href={next.href} className="pageNavNext">
            <span>Next</span>
            <strong>{next.label}</strong>
          </a>
        ) : <span />}
      </footer>
    </article>
  );
}