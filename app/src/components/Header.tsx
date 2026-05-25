import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Cosa fa', href: '#cosa-fa' },
  { label: 'Controversie', href: '#controversia' },
  { label: 'Casi', href: '#casi' },
  { label: 'Team', href: '#team' },
  { label: 'Report', href: '#report' },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Entrance animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.1,
      });
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 74;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'shadow-header backdrop-blur-[20px]'
            : 'backdrop-blur-[14px]'
        }`}
        style={{
          background: 'rgba(247,243,234,.94)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="container-main">
          <div className="h-[74px] flex items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 font-extrabold text-navy tracking-tight">
              <span
                className="w-[38px] h-[38px] rounded-xl grid place-items-center text-white font-serif font-black text-lg"
                style={{ background: 'linear-gradient(135deg, var(--navy), var(--blue))' }}
              >
                §
              </span>
              <span className="hidden sm:inline">[Nome Società]</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-[22px] text-sm" style={{ color: '#344054' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 transition-colors duration-200 hover:text-navy after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="btn btn-secondary hidden sm:inline-flex text-sm py-2.5 px-4"
              >
                Area riservata
              </a>
              <a
                href="#accesso"
                onClick={(e) => handleNavClick(e, '#accesso')}
                className="btn btn-primary text-sm py-2.5 px-4"
              >
                Richiedi accesso
              </a>
              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 text-navy"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ paddingTop: '74px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-[74px]">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold text-navy transition-all duration-300 hover:text-gold"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease ${i * 0.08}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#accesso"
            onClick={(e) => handleNavClick(e, '#accesso')}
            className="btn btn-primary mt-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.4s ease ${navLinks.length * 0.08}s`,
            }}
          >
            Richiedi accesso
          </a>
        </nav>
      </div>
    </>
  );
}
