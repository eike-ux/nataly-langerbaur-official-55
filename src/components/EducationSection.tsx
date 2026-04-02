import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <FadeInSection>
          <GraduationCap className="w-8 h-8 text-primary mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-8 tracking-wide">
            {t('education.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-10" />
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            {t('education.p1')}
          </p>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            {t('education.p2')}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default EducationSection;
