import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const videos = [
  'https://www.youtube.com/embed/ofBiS-9tT0Y?si=EbJou7Ml5qgwtZ-2',
  'https://www.youtube.com/embed/Wjpa6oOl0Vo?si=LM629ms37vTd2IxX',
  'https://www.youtube.com/embed/quXA7Zahu5I?si=hQR7t6Hn_zV_fQvu',
];

const MediaSection = () => {
  const { t } = useLanguage();

  return (
    <section id="media" className="bg-ice py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInSection className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('media.title')}
          </h2>
          <div className="mx-auto h-px w-12 bg-primary" />
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((url, i) => (
            <FadeInSection key={i}>
              <div className="aspect-video overflow-hidden rounded-lg bg-card shadow-sm">
                <iframe
                  src={url}
                  title={`Performance ${i + 1}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
