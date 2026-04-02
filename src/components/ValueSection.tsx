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
    <section className="py-24 md:py-32 bg-ice">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4 tracking-wide">
            {t('value.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <FadeInSection key={i}>
              <div className="bg-card rounded-lg p-8 text-center shadow-sm">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
