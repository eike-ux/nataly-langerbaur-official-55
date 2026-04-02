import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <FadeInSection>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            {t('contact.title')}
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            {t('contact.subtitle')}
          </p>
          <a
            href="mailto:info@natalylangerbaur.com"
            className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            {t('contact.email')}
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
