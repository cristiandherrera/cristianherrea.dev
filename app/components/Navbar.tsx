"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 300ms',
      paddingTop: scrolled ? '1rem' : '1.5rem',
      paddingBottom: scrolled ? '1rem' : '1.5rem',
      backgroundColor: scrolled ? 'rgba(13, 21, 32, 0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent'
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            CH
          </Link>

          {/* Desktop Menu */}
          <ul style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="md-flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  style={{
                    transition: 'color 200ms',
                    color: activeSection === link.href.substring(1) ? 'var(--color-primary)' : 'var(--color-accent)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = activeSection === link.href.substring(1) ? 'var(--color-primary)' : 'var(--color-accent)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md-hidden"
            style={{ position: 'relative', width: '1.5rem', height: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            <span style={{
              position: 'absolute',
              height: '2px',
              width: '1.5rem',
              backgroundColor: 'white',
              transition: 'all 300ms',
              transform: isOpen ? 'rotate(45deg)' : 'none',
              top: isOpen ? '11px' : '4px'
            }} />
            <span style={{
              position: 'absolute',
              height: '2px',
              width: '1.5rem',
              backgroundColor: 'white',
              top: '11px',
              transition: 'all 300ms',
              opacity: isOpen ? 0 : 1
            }} />
            <span style={{
              position: 'absolute',
              height: '2px',
              width: '1.5rem',
              backgroundColor: 'white',
              transition: 'all 300ms',
              transform: isOpen ? 'rotate(-45deg)' : 'none',
              top: isOpen ? '11px' : '18px'
            }} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md-hidden ${isOpen ? '' : ''}`} style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '100%',
          transition: 'all 300ms',
          overflow: 'hidden',
          maxHeight: isOpen ? '24rem' : '0',
          paddingTop: isOpen ? '1rem' : '0',
          paddingBottom: isOpen ? '1rem' : '0',
          backgroundColor: isOpen ? 'rgba(13, 21, 32, 0.8)' : 'transparent',
          backdropFilter: isOpen ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isOpen ? 'blur(12px)' : 'none',
          borderBottom: isOpen ? '1px solid var(--color-border)' : '1px solid transparent'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  style={{
                    display: 'block',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                    transition: 'color 200ms',
                    color: activeSection === link.href.substring(1) ? 'var(--color-primary)' : 'var(--color-accent)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = activeSection === link.href.substring(1) ? 'var(--color-primary)' : 'var(--color-accent)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}