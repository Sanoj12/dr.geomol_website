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
        <Link href="/" className="logo">
          Geomol George
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active-link' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
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
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links li a {
           font-size: 0.95rem;
           font-weight: 500;
           color: var(--secondary);
           text-transform: uppercase;
           letter-spacing: 0.05em;
        }
        .nav-links li a:hover {
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
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 79px; /* adjust for border */
            left: 0;
            width: 100%;
            flex-direction: column;
            background: #fff;
            padding: 2rem;
            gap: 1.5rem;
            border-bottom: 1px solid var(--border);
            /* Reset clip-path for cleaner slide/fade or keep simple display toggle logic */
            display: none; 
          }
          .nav-links.active {
            display: flex;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
