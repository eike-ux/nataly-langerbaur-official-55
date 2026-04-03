import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#achievements', label: t('nav.achievements') },
    { href: '#olympic', label: t('nav.olympic') },
    { href: '#media', label: t('nav.media') },
    { href: '#sponsors', label: t('nav.sponsors') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-card/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl font-semibold tracking-wide text-foreground">
          Nataly Langerbaur
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm uppercase tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'et' : 'en')}
            className="ml-4 rounded-full border border-border px-3 py-1 font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground"
          >
            {lang === 'en' ? 'ET' : 'EN'}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === 'en' ? 'et' : 'en')}
            className="rounded-full border border-border px-3 py-1 font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            {lang === 'en' ? 'ET' : 'EN'}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card/95 backdrop-blur-md md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
