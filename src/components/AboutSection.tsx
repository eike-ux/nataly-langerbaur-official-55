import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <FadeInSection>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-8 tracking-wide">
            {t('about.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-10" />
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            {t('about.p1')}
          </p>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            {t('about.p2')}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutSection;
