import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerCols = [
  {
    title: 'Per chi',
    items: ['Lavoratori', 'Aziende', 'HR', 'Professionisti'],
  },
  {
    title: 'Casi',
    items: ['Licenziamento', 'Differenze retributive', 'Busta paga', 'Accordi conciliativi'],
  },
  {
    title: 'Garanzie',
    items: ['Giuslavoristi senior', 'Consulenti del lavoro', 'AI Act', 'Professionisti abilitati'],
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.from(gridRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 90%', once: true },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-[46px]" style={{ background: '#081423', color: '#cbd5e1', fontSize: '14px' }}>
      <div className="container-main">
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-8">
          {/* Logo Column */}
          <div>
            <div className="flex items-center gap-3 font-extrabold text-white mb-3.5">
              <span className="w-[38px] h-[38px] rounded-xl grid place-items-center font-serif font-black text-lg bg-white text-navy">
                §
              </span>
              <span>[Nome Società]</span>
            </div>
            <p>
              Piattaforma AI-assisted per gestire più rapidamente controversie di lavoro, vertenze, accordi conciliativi e conciliazione telematica.
            </p>
          </div>

          {/* Link Columns */}
          {footerCols.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold mb-3">{col.title}</h4>
              <ul className="grid gap-2 list-none">
                {col.items.map((item, j) => (
                  <li key={j} className="transition-colors duration-200 hover:text-white cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Note */}
        <div className="mt-8 pt-5 border-t text-xs" style={{ borderColor: 'rgba(255,255,255,.1)', color: '#94a3b8' }}>
          Nota mockup: la piattaforma è uno strumento AI-assisted di supporto operativo, simulazione e facilitazione conciliativa. Non sostituisce il giudice, non emette decisioni vincolanti e non garantisce esiti. La formalizzazione degli accordi avviene tramite commissioni, organismi o professionisti abilitati secondo la normativa applicabile.
        </div>
      </div>
    </footer>
  );
}
