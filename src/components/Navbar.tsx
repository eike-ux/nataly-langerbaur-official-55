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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-card/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-semibold tracking-wide text-foreground">
          Nataly Langerbaur
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'et' : 'en')}
            className="ml-4 text-xs font-sans font-medium tracking-widest uppercase border border-border rounded-full px-3 py-1 text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
          >
            {lang === 'en' ? 'ET' : 'EN'}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'et' : 'en')}
            className="text-xs font-sans font-medium tracking-widest uppercase border border-border rounded-full px-3 py-1 text-muted-foreground"
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
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-sm font-sans text-muted-foreground hover:text-foreground tracking-wide uppercase">
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
