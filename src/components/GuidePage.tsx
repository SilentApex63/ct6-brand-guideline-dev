import { guideContent } from '@/data/guideContent';
import { SectionHeader } from './SectionHeader';
import { ColorSwatches } from './ColorSwatches';
import { TokenTables } from './TokenTables';

export function GuidePage({ slug }: { slug: string }) {
  const page = guideContent[slug] ?? guideContent.overview;

  return (
    <article className="guidePage">
      <SectionHeader eyebrow={page.eyebrow} title={page.title} summary={page.summary} />
      <div className="sectionGrid">
        {page.sections.map((section) => (
          <section className="panel" key={section.heading}>
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
      {slug === 'colors' ? <ColorSwatches /> : null}
      {slug === 'tokens' || slug === 'colors' || slug === 'typography' || slug === 'layout' ? <TokenTables variant={slug} /> : null}
    </article>
  );
}
