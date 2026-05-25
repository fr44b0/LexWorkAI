import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const darkPoints = [
  { title: 'Giuslavoristi senior', desc: 'Definiscono logiche, template, rischi, scenari e percorsi conciliativi.' },
  { title: 'Consulenti del lavoro', desc: 'Supportano verifiche su cedolini, TFR, CCNL, ferie, permessi e inquadramenti.' },
  { title: 'Professionisti abilitati', desc: "Intervengono quando serve formalizzare o validare l'accordo." },
];

const notList = [
  'Non è un giudice AI.',
  'Non emette decisioni vincolanti.',
  'Non è un software paghe.',
  'Non è un gestionale HR generico.',
];

const isList = [
  "Un motore AI per gestire controversie di lavoro.",
  'Una piattaforma per simulare rischi e scenari.',
  'Uno strumento per preparare accordi conciliativi.',
  "Un percorso AI-assisted per arrivare più velocemente alla formalizzazione.",
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);
  const whiteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (darkRef.current) {
        gsap.from(darkRef.current, {
          opacity: 0,
          x: -40,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: darkRef.current, start: 'top 80%', once: true },
        });

        const points = darkRef.current.querySelectorAll('.dark-point');
        gsap.from(points, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: { trigger: darkRef.current, start: 'top 80%', once: true },
        });
      }

      if (whiteRef.current) {
        gsap.from(whiteRef.current, {
          opacity: 0,
          x: 40,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: { trigger: whiteRef.current, start: 'top 80%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-[78px] bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-8 items-stretch">
          {/* Dark Card */}
          <div ref={darkRef}
            className="bg-navy text-white rounded-[32px] p-[34px] shadow-card transition-all duration-300 hover:shadow-[0_28px_65px_rgba(16,31,53,.22)]">
            <div className="eyebrow">COMPETENZA PRIMA DELLA TECNOLOGIA</div>
            <h2 className="text-white font-extrabold leading-[1.08] tracking-[-.045em] mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              Dietro la piattaforma ci sono giuslavoristi, consulenti del lavoro e professionisti abilitati.
            </h2>
            <p className="mb-6 text-[17px]" style={{ color: '#dbe5f0' }}>
              L'AI serve a ridurre tempi, costi e lavoro manuale. La credibilità nasce dal metodo giuslavoristico e dalla supervisione professionale.
            </p>

            <div className="grid gap-3.5">
              {darkPoints.map((p, i) => (
                <div key={i} className="dark-point rounded-[18px] p-4 border transition-all duration-200 hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,.14)', background: 'rgba(255,255,255,.06)' }}>
                  <strong className="block text-white mb-1">{p.title}</strong>
                  <span className="text-sm" style={{ color: '#cbd5e1' }}>{p.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* White Card */}
          <div ref={whiteRef}
            className="bg-white rounded-[32px] p-[34px] border transition-all duration-300 hover:shadow-card-hover"
            style={{ borderColor: 'var(--line)' }}>
            <h3 className="text-navy font-extrabold text-[26px] tracking-tight mb-4">Cosa non è</h3>
            <ul className="grid gap-3.5 list-none">
              {notList.map((item, i) => (
                <li key={i} className="grid gap-2.5 items-start" style={{ gridTemplateColumns: '28px 1fr', color: '#344054', fontSize: '15px' }}>
                  <span className="cross-icon">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-navy font-extrabold text-[26px] tracking-tight mb-4 mt-7">Cosa è</h3>
            <ul className="grid gap-3.5 list-none">
              {isList.map((item, i) => (
                <li key={i} className="grid gap-2.5 items-start" style={{ gridTemplateColumns: '28px 1fr', color: '#344054', fontSize: '15px' }}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
