"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullName = "Cristian Herrera";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedText(fullName.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" style={{ 
      position: 'relative', 
      minHeight: 'calc(100vh - 60px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden', 
      paddingTop: '60px',
      padding: '60px 0'
    }}>
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column - Main Content */}
          <div style={{ textAlign: 'left' }}>
            {/* <div style={{ marginBottom: '2rem' }}>
              <span style={{ 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                marginBottom: '1.5rem'
              }}>
                👋 Available for opportunities
              </span>
            </div> */}
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 700, 
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              <span style={{ display: 'block', marginBottom: '0.5rem' }} className="text-gray-static">
                Hi, I&apos;m
              </span>
              <span className="gradient-text" style={{ display: 'inline-block', minHeight: '1.2em' }}>
                {typedText}
                <span style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>|</span>
              </span>
            </h1>
            
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', 
              fontWeight: 600, 
              marginBottom: '0.75rem',
              lineHeight: '1.3'
            }} className="text-gray-static">
              Full Stack Developer & Data Engineer
            </h2>
            
            {/* Professional Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '1.5rem',
              fontSize: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="text-gray-static">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Remote / US</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="text-gray-static">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>4+ Years Experience</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="text-gray-static">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Available for hire</span>
              </div>
            </div>
            
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
              marginBottom: '3rem',
              maxWidth: '500px',
              lineHeight: '1.6'
            }} className="text-gray-static">
              Passionate about building scalable web applications and robust data pipelines. I transform complex problems into elegant solutions that drive business growth.
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap', 
              gap: '1rem'
            }}>
              <Link href="#contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link href="#projects" className="btn btn-secondary">
                View My Work
              </Link>
            </div>
          </div>

          {/* Right Column - Skills Card */}
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Skills Header */}
            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 600, 
                marginBottom: '0.5rem',
                color: 'var(--foreground)'
              }}>
                Technical Skills
              </h3>
              <div style={{
                width: '60px',
                height: '3px',
                background: 'var(--color-primary)',
                margin: '0 auto',
                borderRadius: '2px'
              }} />
            </div>

            {/* Languages Section */}
            <div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '0.5rem'
              }}>
                Web Development
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem'
              }}>
                {[
                  { name: "HTML5", svg: "/tech/HTML5.svg" },
                  { name: "Tailwind CSS", svg: "/tech/Tailwind CSS.svg" },
                  { name: "JavaScript", svg: "/tech/JavaScript.svg" },
                  { name: "React", svg: "/tech/React.svg" },
                  { name: "Node.js", svg: "/tech/Node.js.svg" },
                  { name: "MongoDB", svg: "/tech/MongoDB.svg" }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem',
                      transition: 'transform 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Image
                      src={skill.svg}
                      alt={skill.name}
                      width={48}
                      height={48}
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'contain'
                      }}
                    />
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      textAlign: 'center'
                    }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Section */}
            <div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '0.5rem'
              }}>
                Data & Cloud
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem'
              }}>
                {[
                  { name: "Python", svg: "/tech/Python.svg" },
                  { name: "Azure", svg: "/tech/Azure.svg" },
                  { name: "Data Factory", svg: "/tech/Data-Factory.svg" },
                  { name: "Synapse", svg: "/tech/Azure-Synapse-Analytics.svg" },
                  { name: "SQL Database", svg: "/tech/Azure SQL Database.svg" },
                  { name: "Blob Storage", svg: "/tech/storage-blob.svg" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem',
                      transition: 'transform 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Image
                      src={skill.svg}
                      alt={skill.name}
                      width={48}
                      height={48}
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'contain'
                      }}
                    />
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      textAlign: 'center'
                    }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '0.5rem'
              }}>
                Tools
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem'
              }}>
                {[
                  { name: "Git", svg: "/tech/Git.svg" },
                  { name: "GitHub", svg: "/tech/GitHub.svg" },
                  { name: "BitBucket", svg: "/tech/BitBucket.svg" }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem',
                      transition: 'transform 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Image
                      src={skill.svg}
                      alt={skill.name}
                      width={48}
                      height={48}
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'contain'
                      }}
                    />
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      textAlign: 'center'
                    }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Background decoration */}
            <div style={{ 
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
              borderRadius: '50%',
              filter: 'blur(40px)',
              zIndex: -1
            }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-bounce-slow" style={{ 
        position: 'absolute', 
        bottom: '2rem', 
        left: '50%', 
        transform: 'translateX(-50%)' 
      }}>
        <svg
          style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-accent)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}