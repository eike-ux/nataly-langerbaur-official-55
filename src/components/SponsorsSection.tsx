import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

// Easily editable sponsor data
const sponsors = [
  { name: 'Sponsor 1', logo: '', url: '#' },
  { name: 'Sponsor 2', logo: '', url: '#' },
  { name: 'Sponsor 3', logo: '', url: '#' },
  { name: 'Sponsor 4', logo: '', url: '#' },
];

const SponsorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sponsors" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4 tracking-wide">
            {t('sponsors.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {sponsors.map((s, i) => (
            <FadeInSection key={i}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-24 bg-card rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 px-6"
              >
                {s.logo ? (
                  <img src={s.logo} alt={s.name} className="max-h-12 max-w-full object-contain" loading="lazy" />
                ) : (
                  <span className="font-sans text-sm text-muted-foreground tracking-wide">{s.name}</span>
                )}
              </a>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            {t('sponsors.cta')}
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SponsorsSection;
