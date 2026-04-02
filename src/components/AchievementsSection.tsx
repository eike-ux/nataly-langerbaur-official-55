import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import { Trophy, Medal, Globe, Award } from 'lucide-react';

const AchievementsSection = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Globe, title: t('achievements.worlds'), detail: t('achievements.worlds.detail') },
    { icon: Trophy, title: t('achievements.euros'), detail: t('achievements.euros.detail') },
    { icon: Medal, title: t('achievements.intl'), detail: t('achievements.intl.detail') },
    { icon: Award, title: t('achievements.national'), detail: t('achievements.national.detail') },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-ice">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4 tracking-wide">
            {t('achievements.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {achievements.map((a, i) => (
            <FadeInSection key={i}>
              <div className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <a.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">{a.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">{a.detail}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
