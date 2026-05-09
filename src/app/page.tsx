import { BrandShell } from '@/components/BrandShell';
import { LandingPage } from '@/components/LandingPage';

export default function HomePage() {
  return (
    <BrandShell activeSlug="overview">
      <LandingPage />
    </BrandShell>
  );
}
