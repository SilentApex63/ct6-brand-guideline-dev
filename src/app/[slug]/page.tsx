import { notFound } from 'next/navigation';
import { BrandShell } from '@/components/BrandShell';
import { GuidePage } from '@/components/GuidePage';
import { guideContent } from '@/data/guideContent';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(guideContent).map((slug) => ({
    slug,
  }));
}

type StaticGuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StaticGuidePage({ params }: StaticGuidePageProps) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(guideContent, slug)) {
    notFound();
  }

  return (
    <BrandShell activeSlug={slug}>
      <GuidePage slug={slug} />
    </BrandShell>
  );
}