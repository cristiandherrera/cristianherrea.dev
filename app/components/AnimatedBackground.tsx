"use client";

import { useEffect, useState } from 'react';
import { useDevicePerformance } from '../hooks/usePerformance';

export default function AnimatedBackground() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isLowEnd = useDevicePerformance();

  useEffect(() => {
    // Only start animations after initial page load
    const timer = setTimeout(() => {
      if (!isLowEnd) {
        setShouldAnimate(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLowEnd]);

  return (
    <div className="background-decoration" style={{ position: 'fixed', inset: 0, zIndex: -20, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Gradient blob - GPU optimized */}
      <div 
        className={shouldAnimate ? "gradient-blob animate-blob" : "gradient-blob"} 
        aria-hidden="true" 
        style={{ 
          position: 'absolute', 
          left: 'calc(50% - 4rem)', 
          top: '10px', 
          transform: 'translateZ(0)', 
          filter: 'blur(60px)', 
          willChange: shouldAnimate ? 'transform' : 'auto', 
          contain: 'layout style paint' 
        }}
      >
        <div 
          className="gradient-blob-inner" 
          style={{ 
            aspectRatio: '1108 / 632', 
            width: '69.25rem', 
            background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #6366f1 100%)', 
            opacity: 0.28, 
            clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)', 
            transform: 'translateZ(0)' 
          }} 
        />
      </div>
      
      {/* SVG Wave Pattern - static initially */}
      <svg 
        className="wave-pattern" 
        aria-hidden="true" 
        viewBox="0 0 1422 800" 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          opacity: shouldAnimate ? 0.3 : 0.1, 
          transform: 'scaleX(0.85)',
          transition: 'opacity 1s ease-in-out'
        }}
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
            <stop stopColor="hsl(230, 55%, 50%)" stopOpacity="1" offset="0%"></stop>
            <stop stopColor="hsl(230, 55%, 70%)" stopOpacity="1" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="fade-gradient">
            <stop stopColor="white" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="white" stopOpacity="1" offset="10%"></stop>
            <stop stopColor="white" stopOpacity="1" offset="90%"></stop>
            <stop stopColor="white" stopOpacity="0" offset="100%"></stop>
          </linearGradient>
          <mask id="fade-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-gradient)" />
          </mask>
        </defs>
        <g strokeWidth="2" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round" mask="url(#fade-mask)">
          {/* Only render a subset of paths initially */}
          {shouldAnimate ? (
            <>
              <path d="M 0 572 Q 355.5 150 711 400 Q 1066.5 650 1422 572" opacity="0.05"></path>
              <path d="M 0 550 Q 355.5 150 711 400 Q 1066.5 650 1422 550" opacity="0.09"></path>
              <path d="M 0 528 Q 355.5 150 711 400 Q 1066.5 650 1422 528" opacity="0.13"></path>
              <path d="M 0 506 Q 355.5 150 711 400 Q 1066.5 650 1422 506" opacity="0.16"></path>
              <path d="M 0 484 Q 355.5 150 711 400 Q 1066.5 650 1422 484" opacity="0.20"></path>
              <path d="M 0 462 Q 355.5 150 711 400 Q 1066.5 650 1422 462" opacity="0.24"></path>
              <path d="M 0 440 Q 355.5 150 711 400 Q 1066.5 650 1422 440" opacity="0.28"></path>
              <path d="M 0 418 Q 355.5 150 711 400 Q 1066.5 650 1422 418" opacity="0.32"></path>
              <path d="M 0 396 Q 355.5 150 711 400 Q 1066.5 650 1422 396" opacity="0.35"></path>
              <path d="M 0 374 Q 355.5 150 711 400 Q 1066.5 650 1422 374" opacity="0.39"></path>
              <path d="M 0 352 Q 355.5 150 711 400 Q 1066.5 650 1422 352" opacity="0.43"></path>
              <path d="M 0 330 Q 355.5 150 711 400 Q 1066.5 650 1422 330" opacity="0.47"></path>
              <path d="M 0 308 Q 355.5 150 711 400 Q 1066.5 650 1422 308" opacity="0.51"></path>
              <path d="M 0 286 Q 355.5 150 711 400 Q 1066.5 650 1422 286" opacity="0.54"></path>
              <path d="M 0 264 Q 355.5 150 711 400 Q 1066.5 650 1422 264" opacity="0.58"></path>
              <path d="M 0 242 Q 355.5 150 711 400 Q 1066.5 650 1422 242" opacity="0.62"></path>
              <path d="M 0 220 Q 355.5 150 711 400 Q 1066.5 650 1422 220" opacity="0.66"></path>
              <path d="M 0 198 Q 355.5 150 711 400 Q 1066.5 650 1422 198" opacity="0.70"></path>
              <path d="M 0 176 Q 355.5 150 711 400 Q 1066.5 650 1422 176" opacity="0.77"></path>
              <path d="M 0 154 Q 355.5 150 711 400 Q 1066.5 650 1422 154" opacity="0.81"></path>
              <path d="M 0 132 Q 355.5 150 711 400 Q 1066.5 650 1422 132" opacity="0.85"></path>
              <path d="M 0 110 Q 355.5 150 711 400 Q 1066.5 650 1422 110" opacity="0.89"></path>
              <path d="M 0 88 Q 355.5 150 711 400 Q 1066.5 650 1422 88" opacity="0.92"></path>
              <path d="M 0 66 Q 355.5 150 711 400 Q 1066.5 650 1422 66" opacity="0.96"></path>
            </>
          ) : (
            <>
              {/* Render only a few paths for initial load */}
              <path d="M 0 396 Q 355.5 150 711 400 Q 1066.5 650 1422 396" opacity="0.35"></path>
              <path d="M 0 330 Q 355.5 150 711 400 Q 1066.5 650 1422 330" opacity="0.47"></path>
              <path d="M 0 264 Q 355.5 150 711 400 Q 1066.5 650 1422 264" opacity="0.58"></path>
              <path d="M 0 198 Q 355.5 150 711 400 Q 1066.5 650 1422 198" opacity="0.70"></path>
            </>
          )}
        </g>
      </svg>
    </div>
  );
}