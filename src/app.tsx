import { Background } from './components/background';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Reasons } from './components/reasons';
import { Economy } from './components/economy';
import { Operations } from './components/operations';
import { Arena } from './components/arena';
import { Future } from './components/future';
import { FooterCTA } from './components/footerCTA';
import { Deck } from './components/deck';
import { TimeCards } from './components/TimeCards';

export default function App() {
  return (
    <div className="relative min-h-[100dvh] bg-codex-black text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-50 font-sans overflow-x-hidden">
      <Background />
      <TimeCards />
      <Deck />
      
      {/* We use a main container relative to the background */}
      <main className="relative z-10">
        <Hero />
        
        {/* Connector lines between sections */}
        <div className="w-px h-24 mx-auto bg-gradient-to-b from-cyan-500/50 to-transparent" />
        
        <About />
        
        <div className="w-px h-32 mx-auto bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        
        <Reasons />
        
        <div className="w-px h-32 mx-auto bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />
        
        <Economy />
        
        <div className="w-px h-32 mx-auto bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        
        <Operations />
        
        <Arena />
        
        <Future />
        
        <FooterCTA />
      </main>
    </div>
  );
}
