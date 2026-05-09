import { notFound } from 'next/navigation';
import { BrandShell } from '@/components/BrandShell';
import { GuidePage } from '@/components/GuidePage';
import { guideContent } from '@/data/guideContent';
import { navigation } from '@/data/navigation';

export function generateStaticParams() {
  return navigation.map((item) => ({ slug: item.slug }));
}

export default function StaticGuidePage({ params }: { params: { slug: string } }) {
  if (!(params.slug in guideContent)) {
    notFound();
  }

  return (
    <BrandShell activeSlug={params.slug}>
      <GuidePage slug={params.slug} />
    </BrandShell>
  );
}
