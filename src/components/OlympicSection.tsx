import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const OlympicSection = () => {
  const { t } = useLanguage();

  return (
    <section id="olympic" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <FadeInSection>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-8 tracking-wide">
            {t('olympic.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-10" />
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            {t('olympic.p1')}
          </p>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            {t('olympic.p2')}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default OlympicSection;
