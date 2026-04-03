import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const achievementImages = Object.entries(
  import.meta.glob('../assets/achivementsImg/*.{png,jpg,jpeg,webp,svg}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string);

const findAchievementImage = (filename: string) =>
  achievementImages.find((src) => src.includes(filename));

const AchievementsSection = () => {
  const { t } = useLanguage();

  const achievements: Array<{
    title: string;
    detail: string;
    image?: string;
  }> = [
    {
      title: t('achievements.worlds'),
      detail: t('achievements.worlds.detail'),
      image: findAchievementImage('01-worlds2026.jpg'),
    },
    {
      title: t('achievements.euros'),
      detail: t('achievements.euros.detail'),
      image: findAchievementImage('02-euros2026.jpg'),
    },
    {
      title: t('achievements.intl'),
      detail: t('achievements.intl.detail'),
      image: findAchievementImage('03-intComp.jpg'),
    },
    {
      title: t('achievements.national'),
      detail: t('achievements.national.detail'),
      image: findAchievementImage('04-estComp.jpg'),
    },
    {
      title: t('achievements.volvo'),
      detail: t('achievements.volvo.detail'),
      image: findAchievementImage('05-volvo.jpg'),
    },
    {
      title: t('achievements.abudhabi'),
      detail: t('achievements.abudhabi.detail'),
      image: findAchievementImage('06-abu.jpg'),
    },
    {
      title: t('achievements.tallink'),
      detail: t('achievements.tallink.detail'),
      image: findAchievementImage('07-tallink.jpg'),
    },
    {
      title: t('achievements.sonja'),
      detail: t('achievements.sonja.detail'),
      image: findAchievementImage('08-sonja.jpg'),
    },
  ];

  return (
    <section id="achievements" className="bg-ice py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInSection className="mb-10 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('achievements.title')}
          </h2>
          <div className="mx-auto h-px w-12 bg-primary" />
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <FadeInSection key={i}>
              <div className="flex h-full w-full max-w-[280px] flex-col items-center rounded-lg border border-border/70 bg-card/95 px-6 pb-8 pt-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
                {a.image ? (
                  <div className="mx-auto mb-4 h-44 w-44 overflow-hidden rounded-full border border-border bg-muted">
                    <img
                      src={a.image}
                      alt=""
                      className="h-full w-full object-cover"
                      style={{ objectPosition: '50% 35%' }}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 h-44 w-44 rounded-full border border-border bg-muted" />
                )}
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">{a.title}</h3>
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
