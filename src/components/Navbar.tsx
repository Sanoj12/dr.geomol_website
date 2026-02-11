"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Development', href: '/development' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-container">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link href="/" className="logo" onClick={closeMenu}>
          Dr.Geomol George
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active-link' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active-link' : ''}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-container {
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: -0.02em;
          z-index: 60; /* Ensure logo is clickable above mobile menu if needed, or consistent */
          position: relative;
        }
        
        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .desktop-nav li a {
           font-size: 0.95rem;
           font-weight: 500;
           color: var(--secondary);
           text-transform: uppercase;
           letter-spacing: 0.05em;
        }
        .desktop-nav li a:hover {
          color: var(--primary);
        }
        .active-link {
          color: var(--primary) !important;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 4px;
        }

        .hamburger {
          display: none;
          font-size: 1.5rem;
          color: var(--primary);
          cursor: pointer;
          z-index: 60; /* Keep hamburger above the mobile menu */
          position: relative;
        }
        
        /* Mobile Navigation */
        .mobile-nav {
          display: none; /* Hidden by default on desktop */
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .hamburger {
            display: block;
          }

          .mobile-nav {
            display: flex; /* Make it exist in DOM for transition, but control visibility */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #fff;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 55; /* Below hamburger and logo */
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            opacity: 0; /* extra precaution */
            visibility: hidden;
          }

          .mobile-nav.open {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-nav-links {
            list-style: none;
            text-align: center;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .mobile-nav-links li a {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--secondary);
            display: block; /* Ensure large hit area */
            padding: 10px;
          }
          
          .mobile-nav-links li a:hover, .mobile-nav-links li a.active-link {
            color: var(--primary);
          }
        }
      `}</style>
    </nav>
  );
}
