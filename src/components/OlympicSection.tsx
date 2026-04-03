import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const OlympicSection = () => {
  const { t } = useLanguage();

  return (
    <section id="olympic" className="py-24 md:py-32">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeInSection>
          <div className="mb-6 inline-flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-2 w-2 rounded-full bg-gold" />
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-2 w-2 rounded-full bg-gold" />
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <h2 className="mb-8 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('olympic.title')}
          </h2>
          <div className="mx-auto mb-10 h-px w-12 bg-primary" />
          <p className="mb-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('olympic.p1')}
          </p>
          <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('olympic.p2')}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default OlympicSection;
