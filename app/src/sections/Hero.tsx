import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column animations
      const leftEls = leftRef.current?.querySelectorAll('.animate-in');
      if (leftEls) {
        gsap.from(leftEls, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.15,
          delay: 0.3,
        });
      }

      // Plain items stagger
      const plainItems = leftRef.current?.querySelectorAll('.plain-item');
      if (plainItems) {
        gsap.from(plainItems, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.15,
          delay: 0.9,
        });
      }

      // Speed cards stagger
      const speedCards = leftRef.current?.querySelectorAll('.speed-card');
      if (speedCards) {
        gsap.from(speedCards, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.1,
          delay: 1.1,
        });
      }

      // Platform card entrance
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          opacity: 0,
          x: 40,
          scale: 0.95,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.5,
        });
      }

      // Timeline steps stagger
      const steps = cardRef.current?.querySelectorAll('.step');
      if (steps) {
        gsap.from(steps, {
          opacity: 0,
          y: 15,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.12,
          delay: 1.0,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 74;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cosa-fa"
      className="pt-[88px] pb-[68px]"
      style={{
        background: `radial-gradient(circle at 82% 12%, rgba(185,155,95,.18), transparent 34%), linear-gradient(180deg, #fbf8f1 0%, var(--cream) 100%)`,
      }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_.98fr] gap-12 lg:gap-[54px] items-center">
          {/* Left Column */}
          <div ref={leftRef}>
            <div className="eyebrow animate-in">
              AI-ASSISTED · DIRITTO DEL LAVORO RAPIDO E GUIDATO
            </div>

            <h1 className="animate-in text-navy font-extrabold leading-[1.03] tracking-[-.055em] mb-6"
              style={{ fontSize: 'clamp(42px, 5vw, 68px)' }}>
              Problemi di lavoro risolti più velocemente, senza partire subito da una causa.
            </h1>

            <p className="animate-in text-lg leading-relaxed mb-7 max-w-[760px]" style={{ color: '#475467' }}>
              Una piattaforma AI-assisted per lavoratori e aziende: raccoglie documenti, ascolta le parti, simula gli scenari in tempi rapidi e prepara una possibile conciliazione con verbale già pronto.
            </p>

            {/* Plain Box */}
            <div className="grid gap-3 my-7">
              <div className="plain-item grid gap-3.5 items-start p-[18px] rounded-[22px] border transition-all duration-300 hover:shadow-card-sm"
                style={{ background: 'rgba(255,255,255,.78)', borderColor: 'var(--line)' }}>
                <div className="w-[38px] h-[38px] rounded-pill bg-navy text-white grid place-items-center font-black text-sm flex-shrink-0">1</div>
                <div>
                  <strong className="block text-navy text-[17px] mb-1">Hai un dubbio su busta paga, TFR, straordinari, ferie, CCNL o licenziamento?</strong>
                  <span className="text-muted text-sm">Carichi i documenti e ricevi un primo report chiaro per capire se c'è qualcosa che non torna.</span>
                </div>
              </div>

              <div className="plain-item grid gap-3.5 items-start p-[18px] rounded-[22px] border transition-all duration-300 hover:shadow-card-sm"
                style={{ background: 'rgba(255,255,255,.78)', borderColor: 'var(--line)' }}>
                <div className="w-[38px] h-[38px] rounded-pill bg-navy text-white grid place-items-center font-black text-sm flex-shrink-0">2</div>
                <div>
                  <strong className="block text-navy text-[17px] mb-1">C'è già una controversia tra lavoratore e azienda?</strong>
                  <span className="text-muted text-sm">La piattaforma aiuta le parti a confrontarsi, stimare rischi e tempi, trovare un accordo e fissare la conciliazione telematica.</span>
                </div>
              </div>
            </div>

            {/* Speed Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              <div className="speed-card p-4 rounded-[20px] border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                style={{ borderColor: '#e8ddcc', background: '#fffdf8', boxShadow: '0 10px 24px rgba(16,31,53,.06)' }}>
                <strong className="block text-navy text-xl leading-tight mb-1 tracking-tight">In pochi minuti</strong>
                <span className="text-muted text-xs block">prima raccolta guidata e controllo documentale</span>
              </div>
              <div className="speed-card p-4 rounded-[20px] border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                style={{ borderColor: '#e8ddcc', background: '#fffdf8', boxShadow: '0 10px 24px rgba(16,31,53,.06)' }}>
                <strong className="block text-navy text-xl leading-tight mb-1 tracking-tight">In poche ore</strong>
                <span className="text-muted text-xs block">scenari, proposta e dossier operativo</span>
              </div>
              <div className="speed-card p-4 rounded-[20px] border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                style={{ borderColor: '#e8ddcc', background: '#fffdf8', boxShadow: '0 10px 24px rgba(16,31,53,.06)' }}>
                <strong className="block text-navy text-xl leading-tight mb-1 tracking-tight">Molto meno attrito</strong>
                <span className="text-muted text-xs block">meno email, meno attese, meno passaggi manuali</span>
              </div>
            </div>

            {/* AI Note */}
            <div className="mt-3 p-4 rounded-[18px] border text-sm transition-all duration-300 hover:shadow-sm"
              style={{ background: 'rgba(16,31,53,.06)', borderColor: 'rgba(16,31,53,.1)', color: '#344054' }}>
              <strong className="text-navy">L'AI accelera il lavoro operativo:</strong> legge documenti, ordina informazioni, genera scenari e prepara bozze. La competenza professionale resta centrale dove serve validazione o formalizzazione.
            </div>

            {/* Proof Row */}
            <div className="flex flex-wrap gap-2.5 my-5">
              {['Vertenze lavoro', 'Conciliazione lavoro', 'Busta paga e TFR', 'Licenziamento', 'Giuslavoristi senior', 'Analisi rapida AI-assisted'].map((pill) => (
                <span key={pill} className="proof-pill transition-all duration-200 hover:bg-white hover:shadow-sm">{pill}</span>
              ))}
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap gap-3.5 my-7">
              <a href="#controversia" onClick={(e) => handleNavClick(e, '#controversia')} className="btn btn-primary">
                Riduci tempi della controversia
              </a>
              <a href="#casi" onClick={(e) => handleNavClick(e, '#casi')} className="btn btn-secondary">
                Ho solo un dubbio
              </a>
            </div>

            {/* Hero Note */}
            <p className="text-sm text-muted max-w-[700px]">
              Non è un software paghe e non è una chat generica. È una piattaforma costruita con esperti di diritto del lavoro e tecnologia AI per ridurre tempi, costi e passaggi manuali nella gestione di problemi, vertenze e accordi conciliativi.
            </p>
          </div>

          {/* Right Column - Platform Card */}
          <div
            ref={cardRef}
            className="bg-white rounded-[32px] p-6 border shadow-card transition-all duration-500 hover:shadow-[0_30px_70px_rgba(16,31,53,.18)]"
            style={{ borderColor: 'var(--line)' }}
          >
            {/* Platform Top */}
            <div className="flex justify-between gap-4 items-start pb-[18px] mb-[18px] border-b" style={{ borderColor: 'var(--line)' }}>
              <div>
                <strong className="block text-navy text-lg">Controversia di esempio</strong>
                <span className="text-muted text-[13px]">Licenziamento · differenze retributive · TFR</span>
              </div>
              <div className="rounded-pill px-[11px] py-[7px] text-xs font-black whitespace-nowrap flex-shrink-0"
                style={{ background: '#edf5f1', color: 'var(--green)' }}>
                Accordo in corso
              </div>
            </div>

            {/* Case Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: 'Lavoratore', value: 'Richiesta iniziale: € 28.000' },
                { label: 'Azienda', value: 'Offerta iniziale: € 9.500' },
                { label: 'Scenario stimato', value: '€ 14.000 – 18.000' },
                { label: 'Prossimo passo', value: 'Slot conciliazione entro 48h' },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-2xl border transition-all duration-200 hover:shadow-sm"
                  style={{ borderColor: '#eee8dd', background: '#fffdf8' }}>
                  <small className="block text-muted text-[11px] mb-1">{item.label}</small>
                  <strong className="text-navy text-sm">{item.value}</strong>
                </div>
              ))}
            </div>

            {/* Risk Box */}
            <div className="my-4 p-4 rounded-[18px] border" style={{ borderColor: '#eee8dd', background: '#fffdf8' }}>
              <div className="flex justify-between mb-2 text-navy text-[13px] font-extrabold">
                <span>Probabilità indicativa di accordo</span>
                <span>72%</span>
              </div>
              <div className="h-[9px] rounded-pill overflow-hidden" style={{ background: '#ede6d9' }}>
                <div className="h-full rounded-pill transition-all duration-1000 ease-out" 
                  style={{ width: '72%', background: 'linear-gradient(90deg, var(--green), var(--gold))' }} />
              </div>
            </div>

            {/* Timeline */}
            <div className="grid gap-2.5 mt-4">
              {[
                { num: '1', title: 'Versioni delle parti', desc: 'Entrambe le parti hanno caricato documenti e raccontato i fatti.', badge: 'Completo' },
                { num: '2', title: 'Simulazione scenari', desc: 'Ogni parte riceve rapidamente il proprio scenario privato di rischio.', badge: 'Pronto' },
                { num: '3', title: 'Verbale conciliativo', desc: 'Bozza pronta per revisione e formalizzazione.', badge: 'In bozza' },
                { num: '4', title: 'Appuntamento telematico', desc: 'Slot disponibile con commissione o professionista abilitato.', badge: 'Da fissare' },
              ].map((step) => (
                <div key={step.num} className="step grid gap-3 items-center p-3.5 rounded-2xl border transition-all duration-200 hover:shadow-sm"
                  style={{ gridTemplateColumns: '34px 1fr auto', borderColor: '#eee8dd', background: '#fffdf8' }}>
                  <div className="w-[34px] h-[34px] rounded-full bg-navy text-white grid place-items-center font-black text-[13px]">{step.num}</div>
                  <div>
                    <h4 className="text-sm text-navy font-bold mb-0.5">{step.title}</h4>
                    <p className="text-muted text-xs">{step.desc}</p>
                  </div>
                  <span className="text-xs font-black flex-shrink-0" style={{ color: 'var(--green)' }}>{step.badge}</span>
                </div>
              ))}
            </div>

            {/* Platform Footer */}
            <div className="mt-[18px] rounded-[22px] bg-navy text-white p-[18px] transition-all duration-300 hover:shadow-card">
              <h3 className="text-white text-lg font-bold mb-1.5">Dal problema all'accordo</h3>
              <p className="text-sm" style={{ color: '#cbd5e1' }}>
                Documenti, scenari, proposta, verbale e appuntamento conciliativo in un unico percorso guidato e molto più rapido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
