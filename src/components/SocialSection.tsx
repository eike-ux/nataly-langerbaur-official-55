import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import { Instagram } from 'lucide-react';
import { useEffect } from 'react';

const SocialSection = () => {
  const { t } = useLanguage();
  useEffect(() => {
    const existing = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-ice py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="mb-8 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('social.title')}
          </h2>
          <div className="mx-auto mb-10 h-px w-12 bg-primary" />
          <a
            href="https://www.instagram.com/nataskating/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-8 py-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
          >
            <Instagram className="h-5 w-5 text-primary" />
            <span className="font-sans text-base tracking-wide text-foreground">{t('social.handle')}</span>
          </a>
        </FadeInSection>

        <div className="mt-12">
          <div
            className="elfsight-app-c6ca0a62-db55-4e65-9a74-273e6f170044"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
