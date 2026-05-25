import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '1', title: 'Raccolta', desc: 'Le parti caricano documenti, contratti, buste paga, lettere e comunicazioni.' },
  { num: '2', title: 'Contraddittorio', desc: 'Ogni parte spiega la propria versione e risponde alle domande guidate.' },
  { num: '3', title: 'Simulazione rapida', desc: "La piattaforma stima scenari, rischi, tempi e possibili importi in modo molto più veloce." },
  { num: '4', title: 'Accordo', desc: 'Viene proposta una soluzione conciliativa con bozza di verbale.' },
  { num: '5', title: 'Conciliazione', desc: "Si fissa l'appuntamento telematico con commissione o professionista abilitato." },
];

export default function Flow() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.flow-card');
        const numbers = cardsRef.current.querySelectorAll('.flow-num');

        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true },
        });

        gsap.from(numbers, {
          scale: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
          stagger: 0.12,
          delay: 0.2,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[78px] bg-cream">
      <div className="container-main">
        <div ref={headRef} className="section-head center mb-10">
          <div className="eyebrow">COME FUNZIONA</div>
          <h2 className="text-navy font-extrabold leading-[1.08] tracking-[-.045em] mb-3.5"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Dalla raccolta dei documenti alla conciliazione telematica, più velocemente.
          </h2>
          <p className="text-muted text-lg">
            Il percorso è semplice per l'utente: l'AI riduce i tempi di lettura, ordinamento, simulazione e preparazione delle bozze.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {steps.map((step) => (
            <div key={step.num}
              className="flow-card bg-white rounded-[22px] p-5 border min-h-[170px] flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              style={{ borderColor: 'var(--line)' }}>
              <div className="flow-num w-[34px] h-[34px] rounded-full bg-navy text-white grid place-items-center font-black text-[13px] mb-3.5">
                {step.num}
              </div>
              <strong className="block text-navy mb-1.5">{step.title}</strong>
              <span className="text-muted text-[13px]">{step.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
