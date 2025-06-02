"use client";

import Hero from "./sections/Hero";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load sections with dynamic imports
const About = dynamic(() => import("./sections/About"), {
  loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>,
});

const Experience = dynamic(() => import("./sections/Experience"), {
  loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>,
});

const Projects = dynamic(() => import("./sections/Projects"), {
  loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>,
});

const Contact = dynamic(() => import("./sections/Contact"), {
  loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <About />
      </Suspense>
      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Contact />
      </Suspense>
    </>
  );
}