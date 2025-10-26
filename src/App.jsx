import HeroShowcase from './components/HeroShowcase';
import AboutMeCard from './components/AboutMeCard';
import TechStackCard from './components/TechStackCard';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(29,185,84,0.15),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(255,255,255,0.08),transparent)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-8 space-y-6 md:space-y-8">
        <HeroShowcase />

        {/* Grid layout */}
        <section
          className="grid auto-rows-[1fr] grid-cols-1 md:grid-cols-6 gap-4 md:gap-4"
        >
          {/* About (2x1) */}
          <div className="md:col-span-3">
            <AboutMeCard />
          </div>
          {/* Tech Stack (3x1) */}
          <div className="md:col-span-3">
            <TechStackCard />
          </div>
          {/* Contact (1x1) */}
          <div className="md:col-span-2">
            <ContactCard />
          </div>
          {/* Spacer/empty aesthetic card */}
          <div className="md:col-span-4 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.03] border border-white/10 shadow-xl hidden md:block">
            <div className="text-white/70">
              This section is ready for additional cards like Resume, Spotify, or WakaTime stats.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
