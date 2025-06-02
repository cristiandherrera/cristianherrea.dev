"use client";

import { ReactNode, useEffect, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useReducedMotion } from "../hooks/usePerformance";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay, hasAnimated]);

  const shouldAnimate = hasAnimated && !prefersReducedMotion;

  return (
    <div
      ref={ref}
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0)' : 'translateY(20px)',
        transition: prefersReducedMotion ? 'none' : 'opacity 0.5s ease-out, transform 0.5s ease-out',
        willChange: isIntersecting && !hasAnimated ? 'opacity, transform' : 'auto'
      }}
    >
      {children}
    </div>
  );
}