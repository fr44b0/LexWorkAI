import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  stagger?: number;
  delay?: number;
  triggerStart?: string;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
    stagger = 0,
    delay = 0,
    triggerStart = 'top 80%',
    once = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = stagger > 0 ? element.children : element;

    gsap.set(children, from);

    const animation = gsap.to(children, {
      ...to,
      duration: 0.6,
      ease: 'power2.out',
      stagger,
      delay,
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        once,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === element) st.kill();
      });
    };
  }, []);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.to(element, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed]);

  return ref;
}
