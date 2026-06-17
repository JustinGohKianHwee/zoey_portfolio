import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24 md:mt-32">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-serif text-base text-ink">Sze Zo Ey</p>
            <p className="font-sans text-xs text-stone mt-1">
              Architecture — National University of Singapore
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <a
              href="mailto:e0774841@u.nus.edu"
              className="font-sans text-xs text-stone hover:text-ink transition-colors duration-300"
            >
              e0774841@u.nus.edu
            </a>
            <Link
              href="/contact"
              className="font-sans text-xs text-muted hover:text-stone transition-colors duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-sans text-xs text-muted">
            © {year} Sze Zo Ey. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-5">
              {[
                { label: 'Work', href: '/work' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-xs text-muted hover:text-stone transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
