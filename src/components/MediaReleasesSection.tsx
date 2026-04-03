import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const releaseImages = Object.entries(
  import.meta.glob('@/assets/madiaImage/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string);

const releases = [
  {
    title: 'Video: Langerbaur tegi EM-il õnnestunud debüüdi',
    url: 'https://sport.err.ee/1609219125/video-langerbaur-tegi-em-il-onnestunud-debuudi',
    source: 'ERR Sport',
    image: releaseImages[0],
  },
  {
    title: 'Video: Langerbaur kerkis vabakavaga EM-il 14. kohale',
    url: 'https://sport.err.ee/1609221600/video-langerbaur-kerkis-vabakavaga-em-il-14-kohale',
    source: 'ERR Sport',
    image: releaseImages[1],
  },
  {
    title: 'Langerbaur: MM-i eel ettevalmistus oli hea',
    url: 'https://sport.err.ee/1609975566/langerbaur-mm-i-eel-ettevalmistus-oli-hea',
    source: 'ERR Sport',
    image: releaseImages[2],
  },
  {
    title: 'Langerbaur tegi EM-i eel kaks nadalat rasket trenni, ettevalmistus sai hea',
    url: 'https://sport.err.ee/1609909864/langerbaur-tegi-em-i-eel-kaks-nadalat-rasket-trenni-ettevalmistus-sai-hea',
    source: 'ERR Sport',
    image: releaseImages[3],
  },
];

const MediaReleasesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="media-releases" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInSection className="mb-10 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('mediaReleases.title')}
          </h2>
          <div className="mx-auto h-px w-12 bg-primary" />
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {releases.map((item) => (
            <FadeInSection key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3 rounded-lg border border-border/70 bg-card/95 p-6 text-left transition-shadow duration-300 hover:shadow-md"
              >
                {item.image && (
                  <div className="overflow-hidden rounded-md border border-border bg-muted">
                    <img
                      src={item.image}
                      alt=""
                      className="h-56 w-full object-contain bg-white"
                      loading="lazy"
                    />
                  </div>
                )}
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.source}</span>
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <span className="mt-auto text-sm font-medium text-primary">{t('mediaReleases.read')}</span>
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaReleasesSection;
