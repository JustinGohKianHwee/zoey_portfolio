'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/96 backdrop-blur-sm border-b border-border' : ''
        }`}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-base text-ink hover:text-accent transition-colors duration-300"
          >
            Sze Zo Ey
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation">
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-ink ${
                      pathname === href || pathname.startsWith(href + '/')
                        ? 'text-ink'
                        : 'text-stone'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col pt-14 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-0 px-6 pt-10" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-2xl text-ink border-b border-border py-6 hover:text-accent transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
