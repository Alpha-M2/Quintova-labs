import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ValueProposition from '@/components/ValueProposition';
import ProjectShowcase from '@/components/ProjectShowcase';
import EngineRoom from '@/components/EngineRoom';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ValueProposition />
      <ProjectShowcase />
      <EngineRoom />
      <Footer />
    </main>
  );
}
