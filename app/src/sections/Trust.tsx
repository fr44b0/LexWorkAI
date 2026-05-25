import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trustCards = [
  { title: 'AI Act', desc: 'Output chiari, scenari indicativi, logging, audit trail e supervisione umana nei casi rilevanti.' },
  { title: 'Privacy', desc: 'Protezione dei dati, separazione informativa tra le parti e gestione sicura dei documenti.' },
  { title: 'Professionisti', desc: 'Reviewer, giuslavoristi e soggetti abilitati intervengono dove serve validazione.' },
  { title: 'Formalizzazione', desc: 'Gli accordi vengono formalizzati tramite commissioni o professionisti abilitati, ove previsto.' },
];

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headRef.current) {
        gsap.from(headRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 80%', once: true },
        });
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.trust-card');
        gsap.from(cards, {
          opacity: 0,
          y: 25,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[78px] bg-white">
      <div className="container-main">
        <div ref={headRef} className="section-head center mb-10">
          <div className="eyebrow">FIDUCIA E COMPLIANCE</div>
          <h2 className="text-navy font-extrabold leading-[1.08] tracking-[-.045em] mb-3.5"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            AI sì: per fare prima, ma con regole, tracciabilità e supervisione.
          </h2>
          <p className="text-muted text-lg">
            La piattaforma usa l'AI per accelerare lettura dei documenti, simulazioni e bozze, ma deve restare chiara, verificabile e compatibile con GDPR, AI Act e procedure conciliative applicabili.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {trustCards.map((card, i) => (
            <div key={i}
              className="trust-card rounded-3xl p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover cursor-default"
              style={{ borderColor: '#eee8dd', background: '#fffdf8' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(185,155,95,.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#eee8dd';
              }}
            >
              <h3 className="text-navy text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-muted text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
