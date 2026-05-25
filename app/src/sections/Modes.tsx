import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dualFeatures = [
  'Ogni parte racconta la propria versione',
  'Documenti e prove vengono raccolti in modo ordinato',
  'Ogni parte riceve scenari privati di rischio',
  "L'AI accelera il confronto e propone possibili soluzioni",
  'Il verbale conciliativo viene predisposto',
  "Si può fissare l'appuntamento telematico",
];

const singleFeatures = [
  'Verifica busta paga, TFR, ferie e permessi',
  'Controllo CCNL, livello e mansioni',
  'Analisi di lettera disciplinare o licenziamento',
  'Report semplice e comprensibile',
  'Possibile passaggio alla modalità controversia',
];

export default function Modes() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

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

      if (card1Ref.current) {
        gsap.from(card1Ref.current, {
          opacity: 0,
          x: -30,
          duration: 0.7,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: { trigger: card1Ref.current, start: 'top 80%', once: true },
        });
      }

      if (card2Ref.current) {
        gsap.from(card2Ref.current, {
          opacity: 0,
          x: 30,
          duration: 0.7,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: { trigger: card2Ref.current, start: 'top 80%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="controversia" className="py-[78px] bg-white">
      <div className="container-main">
        <div ref={headRef} className="section-head center mb-10">
          <div className="eyebrow">IL CUORE DELLA PIATTAFORMA</div>
          <h2 className="text-navy font-extrabold leading-[1.08] tracking-[-.045em] mb-3.5"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Gestire una controversia di lavoro in modo più rapido, senza partire subito da una causa.
          </h2>
          <p className="text-muted text-lg">
            La piattaforma usa l'AI per velocizzare raccolta documenti, simulazioni e bozze; le parti possono arrivare più rapidamente a una proposta e alla conciliazione.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 - Featured Dual Mode */}
          <div ref={card1Ref}
            className="bg-white rounded-[32px] p-[34px] border-2 shadow-card transition-all duration-300 hover:shadow-[0_28px_65px_rgba(16,31,53,.18)] hover:-translate-y-1"
            style={{ borderColor: 'var(--gold)' }}>
            <div className="inline-flex items-center px-3 py-2 rounded-pill text-xs font-black uppercase tracking-widest mb-[18px]"
              style={{ background: 'rgba(185,155,95,.13)', color: 'var(--gold)' }}>
              DUAL MODE · LAVORATORE E AZIENDA
            </div>

            <h3 className="text-navy font-extrabold text-[30px] leading-[1.08] tracking-tight mb-3">
              Controversia fra lavoratore e azienda
            </h3>
            <p className="text-muted text-base mb-6">
              Per vertenze, licenziamenti, accordi transattivi e conciliazioni.
            </p>

            <ul className="feature-list">
              {dualFeatures.map((f, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-[18px] rounded-[22px] border" style={{ background: '#fffdf8', borderColor: '#eee8dd' }}>
              <strong className="block text-navy mb-1.5">Risultato</strong>
              <span className="text-muted text-sm">
                Una controversia disordinata diventa rapidamente un percorso chiaro: documenti, rischio, proposta, verbale e conciliazione.
              </span>
            </div>
          </div>

          {/* Card 2 - Standard Single Mode */}
          <div ref={card2Ref}
            className="rounded-[32px] p-[34px] border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            style={{ background: 'var(--soft)', borderColor: 'var(--line)' }}>
            <div className="inline-flex items-center px-3 py-2 rounded-pill text-xs font-black uppercase tracking-widest mb-[18px]"
              style={{ background: 'rgba(185,155,95,.08)', color: 'var(--gold)' }}>
              SINGLE MODE · LAVORATORE O AZIENDA
            </div>

            <h3 className="text-navy font-extrabold text-[30px] leading-[1.08] tracking-tight mb-3">
              Interfaccia singola per azienda o lavoratore
            </h3>
            <p className="text-muted text-base mb-6">
              Hai un potenziale problema che vuoi approfondire prima di parlarne con controparte?
            </p>

            <ul className="feature-list">
              {singleFeatures.map((f, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-[18px] rounded-[22px] border" style={{ background: '#fffdf8', borderColor: '#eee8dd' }}>
              <strong className="block text-navy mb-1.5">Risultato</strong>
              <span className="text-muted text-sm">Capisci come e se conviene procedere.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
