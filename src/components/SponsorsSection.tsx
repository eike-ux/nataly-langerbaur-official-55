import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import primostarLogo from '@/assets/Primostar EST.png';
import jivLogo from '@/assets/JIV.jpeg';

// Easily editable sponsor data
const sponsors = [
  { name: 'Primostar', logo: primostarLogo, url: 'https://www.primostar.eu/et' },
  { name: 'JIV', logo: jivLogo, url: 'https://jivsport.com' },

];

const SponsorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sponsors" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInSection className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('sponsors.title')}
          </h2>
          <div className="mx-auto h-px w-12 bg-primary" />
        </FadeInSection>

        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-2">
          {sponsors.map((s, i) => (
            <FadeInSection key={i}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-40 items-center justify-center rounded-lg border border-border bg-card px-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                {s.logo ? (
                  <img src={s.logo} alt={s.name} className="max-h-28 max-w-full object-contain" loading="lazy" />
                ) : (
                  <span className="font-sans text-sm tracking-wide text-muted-foreground">{s.name}</span>
                )}
              </a>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-background/80 bg-foreground px-8 py-3 font-sans text-sm uppercase tracking-widest text-background transition-all duration-300 hover:bg-foreground/90"
          >
            {t('sponsors.cta')}
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SponsorsSection;
