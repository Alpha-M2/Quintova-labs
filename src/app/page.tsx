import Hero from '@/components/Hero';
import TrustBanner from '@/components/TrustBanner';
import ValueProposition from '@/components/ValueProposition';
import ProjectShowcase from '@/components/ProjectShowcase';
import EngineRoom from '@/components/EngineRoom';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBanner />
      <ValueProposition />
      <ProjectShowcase />
      <EngineRoom />
      <Footer />
    </main>
  );
}
