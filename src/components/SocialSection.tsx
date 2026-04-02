import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import { Instagram } from 'lucide-react';

const SocialSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-ice">
      <div className="container mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-8 tracking-wide">
            {t('social.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-10" />
          <a
            href="https://www.instagram.com/nataskating/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full hover:shadow-md hover:border-primary/30 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span className="font-sans text-base text-foreground tracking-wide">{t('social.handle')}</span>
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SocialSection;
