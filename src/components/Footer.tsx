import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-sans text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Nataly Langerbaur. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
