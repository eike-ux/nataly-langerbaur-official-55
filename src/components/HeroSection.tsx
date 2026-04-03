import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-nataly2-2.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nataly Langerbaur figure skating"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 font-serif text-5xl font-light tracking-wide text-primary-foreground md:text-7xl lg:text-8xl"
        >
          Nataly Langerbaur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mb-10 font-sans text-sm uppercase tracking-[0.2em] text-primary-foreground/80 md:text-base"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-block rounded-full border border-background/80 bg-foreground px-8 py-3 font-sans text-sm uppercase tracking-widest text-background transition-all duration-300 hover:bg-foreground/90"
          >
            {t('hero.cta.partner')}
          </a>
          <a
            href="#achievements"
            className="inline-block rounded-full border border-primary-foreground/40 px-8 py-3 font-sans text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
          >
            {t('hero.cta.achievements')}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-primary-foreground/40 pt-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-primary-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
