import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Nataly Langerbaur. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
