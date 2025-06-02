"use client";

import { Suspense, lazy, ComponentType } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazySectionProps {
  importFn: () => Promise<{ default: ComponentType }>;
  fallback?: React.ReactNode;
  rootMargin?: string;
}

export default function LazySection({ importFn, fallback, rootMargin = "200px" }: LazySectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ 
    threshold: 0, 
    rootMargin,
    triggerOnce: true 
  });

  // Only load component when it's about to be visible
  const Component = isIntersecting ? lazy(importFn) : null;

  return (
    <div ref={ref} style={{ minHeight: '100px' }}>
      {Component && (
        <Suspense fallback={fallback || <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Component />
        </Suspense>
      )}
    </div>
  );
}