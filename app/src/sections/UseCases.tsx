import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { title: 'Impugnazione licenziamento', desc: 'Valutazione dei documenti, dei tempi e dei possibili rischi.' },
  { title: 'Differenze retributive', desc: 'Verifica di importi, mansioni, livelli e periodi.' },
  { title: 'Busta paga', desc: 'Controllo delle voci che possono non tornare.' },
  { title: 'Calcolo TFR', desc: 'Verifica dei dati disponibili e degli importi indicativi.' },
  { title: 'Straordinari non pagati', desc: 'Confronto tra presenze, orari e documenti.' },
  { title: 'Lettera disciplinare', desc: 'Ordine dei fatti, date, prove e possibili risposte.' },
  { title: 'Accordo conciliativo lavoro', desc: 'Proposta, verbale e appuntamento telematico.' },
  { title: 'Vertenza lavoro', desc: 'Simulazione dei rischi e possibile soluzione stragiudiziale.' },
];

export default function UseCases() {
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
        const cards = gridRef.current.querySelectorAll('.use-card');
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          scale: 0.97,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="casi" className="py-[78px] bg-white">
      <div className="container-main">
        <div ref={headRef} className="section-head mb-10">
          <div className="eyebrow">CASI FREQUENTI CERCATI ONLINE</div>
          <h2 className="text-navy font-extrabold leading-[1.08] tracking-[-.045em] mb-3.5"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Per quali problemi di lavoro puoi usarla
          </h2>
          <p className="text-muted text-lg">
            Usiamo parole semplici perché il servizio deve essere capito da tutti: lavoratori, aziende, HR e professionisti.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {cases.map((c, i) => (
            <div key={i}
              className="use-card rounded-[20px] p-[18px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-default"
              style={{ borderColor: '#eee8dd', background: '#fffdf8' }}>
              <strong className="block text-navy text-[15px] mb-1.5">{c.title}</strong>
              <span className="text-muted text-[13px]">{c.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
