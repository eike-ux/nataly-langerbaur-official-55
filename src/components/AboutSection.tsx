import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeInSection>
          <h2 className="mb-8 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('about.title')}
          </h2>
          <div className="mx-auto mb-10 h-px w-12 bg-primary" />
          <p className="mb-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('about.p1')}
          </p>
          <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('about.p2')}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutSection;
