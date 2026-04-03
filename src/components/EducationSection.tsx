import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import yearSportsman from '@/assets/yearSportsman.jpg';

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeInSection>
          <h2 className="mb-8 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('education.title')}
          </h2>
          <div className="mx-auto mb-10 h-px w-12 bg-primary" />
          <p className="mb-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('education.p1')}
          </p>
          <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('education.p2')}
          </p>
          <div className="mx-auto mt-10 h-64 w-64 overflow-hidden rounded-2xl border border-border bg-muted">
            <img
              src={yearSportsman}
              alt="Nataly in front of the academy emblem"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default EducationSection;
