import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const videos = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
];

const MediaSection = () => {
  const { t } = useLanguage();

  return (
    <section id="media" className="py-24 md:py-32 bg-ice">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4 tracking-wide">
            {t('media.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((url, i) => (
            <FadeInSection key={i}>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm bg-card">
                <iframe
                  src={url}
                  title={`Performance ${i + 1}`}
                  className="w-full h-full"
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
