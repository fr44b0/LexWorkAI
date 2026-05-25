import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Report della controversia',
  'Scenari di rischio privati per ciascuna parte',
  'Proposta conciliativa',
  'Bozza di verbale',
  'Appuntamento telematico con soggetto abilitato',
];

const reportLines = [
  { title: '1. Sintesi delle posizioni', desc: "Cosa chiede il lavoratore e cosa contesta l'azienda." },
  { title: '2. Documenti analizzati', desc: 'Contratto, cedolini, presenze, lettere e comunicazioni.' },
  { title: '3. Scenari indicativi', desc: 'Range economici, rischi, tempi e possibili esiti.' },
  { title: '4. Proposta conciliativa', desc: 'Importo, tempi di pagamento, rinunce e condizioni.' },
  { title: '5. Verbale e appuntamento', desc: 'Testo preliminare del verbale e slot per incontro telematico.' },
];

export default function Report() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%', once: true },
        });
      }

      if (docRef.current) {
        gsap.from(docRef.current, {
          opacity: 0,
          x: 30,
          scale: 0.98,
          duration: 0.7,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: { trigger: docRef.current, start: 'top 80%', once: true },
        });

        const lines = docRef.current.querySelectorAll('.report-line');
        gsap.from(lines, {
          opacity: 0,
          y: 15,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.1,
          delay: 0.5,
          scrollTrigger: { trigger: docRef.current, start: 'top 80%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="report" className="py-[78px] bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[.95fr_1.05fr] gap-11 items-center">
          {/* Left Column */}
          <div ref={leftRef} className="section-head">
            <div className="eyebrow">OUTPUT CONCRETO</div>
            <h2 className="text-navy font-extrabold leading-[1.08] tracking-[-.045em] mb-3.5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
              Report, proposta e verbale pronti per essere usati.
            </h2>
            <p className="text-muted text-lg">
              Il valore non è solo capire il problema. Il valore è arrivare rapidamente, grazie all'AI, a una soluzione concreta e formalizzabile.
            </p>

            <ul className="feature-list mt-6">
              {features.map((f, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Document Preview */}
          <div ref={docRef}
            className="rounded-[32px] p-7 border shadow-card transition-all duration-500 hover:shadow-[0_28px_65px_rgba(16,31,53,.18)]"
            style={{ background: '#fffdf8', borderColor: 'var(--line)' }}>
            {/* Doc Header */}
            <div className="flex justify-between items-start pb-[18px] mb-[18px] border-b" style={{ borderColor: 'var(--line)' }}>
              <div>
                <h3 className="text-navy font-extrabold text-[23px] tracking-tight">Dossier conciliativo</h3>
                <p className="text-muted text-[13px]">Pratica LC-3821 · Versione v0.7 · Bozza verbale pronta</p>
              </div>
              <span className="rounded-pill px-[11px] py-[7px] text-xs font-black flex-shrink-0"
                style={{ background: '#edf5f1', color: 'var(--green)' }}>
                Pronto
              </span>
            </div>

            {/* Report Lines */}
            <div className="grid gap-3">
              {reportLines.map((line, i) => (
                <div key={i}
                  className="report-line rounded-2xl p-3.5 border bg-white transition-all duration-200 hover:shadow-sm hover:border-gold/30"
                  style={{ borderColor: '#eee8dd' }}>
                  <strong className="block text-navy text-sm mb-1">{line.title}</strong>
                  <span className="text-muted text-[13px]">{line.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
