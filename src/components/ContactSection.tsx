import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto max-w-2xl px-6 text-center">
        <FadeInSection>
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t('contact.title')}
          </h2>
          <div className="mx-auto mb-8 h-px w-12 bg-primary" />
          <p className="mb-10 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('contact.subtitle')}
          </p>
          <a
            href="mailto:eikelangerbaur@gmail.com"
            className="inline-flex items-center gap-3 rounded-full border border-background/80 bg-foreground px-8 py-3 font-sans text-sm uppercase tracking-widest text-background transition-all duration-300 hover:bg-foreground/90"
          >
            <Mail className="h-4 w-4" />
            {t('contact.email')}
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
