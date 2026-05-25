import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const h2 = contentRef.current.querySelector('h2');
        const p = contentRef.current.querySelector('p');
        const btn = contentRef.current.querySelector('a');

        if (h2) {
          gsap.from(h2, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: contentRef.current, start: 'top 80%', once: true },
          });
        }

        if (p) {
          gsap.from(p, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: { trigger: contentRef.current, start: 'top 80%', once: true },
          });
        }

        if (btn) {
          gsap.from(btn, {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.4,
            scrollTrigger: { trigger: contentRef.current, start: 'top 80%', once: true },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="accesso" className="bg-navy text-white py-16">
      <div className="container-main">
        <div ref={contentRef} className="text-center">
          <h2 className="text-white font-extrabold leading-[1.08] tracking-[-.045em] mb-4 mx-auto max-w-[840px]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            Riduci drasticamente tempi, costi e attrito nella gestione di una controversia di lavoro.
          </h2>
          <p className="text-lg mx-auto max-w-[760px] mb-7" style={{ color: '#cbd5e1' }}>
            Dalla raccolta documenti alla simulazione AI-assisted, dalla proposta conciliativa al verbale pronto per la formalizzazione.
          </p>
          <a href="#" className="btn btn-cta inline-flex">
            Richiedi accesso al prototipo
          </a>
        </div>
      </div>
    </section>
  );
}
