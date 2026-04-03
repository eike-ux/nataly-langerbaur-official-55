import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import { Eye, Share2, Star } from 'lucide-react';

const ValueSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Eye, title: t('value.visibility'), detail: t('value.visibility.detail') },
    { icon: Share2, title: t('value.social'), detail: t('value.social.detail') },
    { icon: Star, title: t('value.association'), detail: t('value.association.detail') },
  ];

  return (
    <section className="bg-ice py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInSection className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('value.title')}
          </h2>
          <div className="mx-auto h-px w-12 bg-primary" />
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeInSection key={i}>
              <div className="rounded-lg bg-card p-8 text-center shadow-sm">
                <item.icon className="mx-auto mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mb-3 font-serif text-xl font-medium text-foreground">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
