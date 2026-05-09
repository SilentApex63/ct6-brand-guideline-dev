import { BrandShell } from '@/components/BrandShell';
import { GuidePage } from '@/components/GuidePage';

export default function HomePage() {
  return (
    <BrandShell>
      <GuidePage slug="overview" />
    </BrandShell>
  );
}
