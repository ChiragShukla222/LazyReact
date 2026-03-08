import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import StatsBand from './components/StatsBand.jsx';
import TopicsSection from './components/TopicsSection.jsx';
import StateDemo from './components/StateDemo.jsx';
import HooksSection from './components/HooksSection.jsx';
import VDomDiff from './components/VDomDiff.jsx';
import PerfTimeline from './components/PerfTimeline.jsx';
import PropsFlow from './components/PropsFlow.jsx';
import Roadmap from './components/Roadmap.jsx';
import Footer from './components/Footer.jsx';
import Stars from './components/Stars.jsx';
import Cursor from './components/Cursor.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';

export default function App() {
  return (
    <>
      <Stars />
      <Cursor />

      <Nav />

      <main>
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <StatsBand />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <TopicsSection />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <StateDemo />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <HooksSection />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <VDomDiff />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <PerfTimeline />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <PropsFlow />
        </ScrollReveal>

        <div className="section-divider" />

        <ScrollReveal>
          <Roadmap />
        </ScrollReveal>
      </main>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}

