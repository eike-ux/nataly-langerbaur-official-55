import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'et';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.about': { en: 'About', et: 'Meist' },
  'nav.achievements': { en: 'Achievements', et: 'Saavutused' },
  'nav.olympic': { en: 'Olympic Journey', et: 'Olümpiatee' },
  'nav.media': { en: 'Media', et: 'Meedia' },
  'nav.sponsors': { en: 'Partners', et: 'Partnerid' },
  'nav.contact': { en: 'Contact', et: 'Kontakt' },

  // Hero
  'hero.subtitle': {
    en: 'Estonian Figure Skater | World Championship Top 20 | Olympic Cycle Athlete',
    et: 'Eesti iluuisutaja | MM Top 20 | Olümpiatsükli sportlane',
  },
  'hero.cta.partner': { en: 'Partner with Nataly', et: 'Hakka partneriks' },
  'hero.cta.achievements': { en: 'View Achievements', et: 'Vaata saavutusi' },

  // About
  'about.title': { en: 'About Nataly', et: 'Natalyst' },
  'about.p1': {
    en: 'Nataly Langerbaur is a 21-year-old Estonian figure skater who competes at the highest international level, representing Estonia at European and World Championships.',
    et: 'Nataly Langerbaur on 21-aastane Eesti iluuisutaja, kes võistleb kõrgeimal rahvusvahelisel tasemel, esindades Eestit Euroopa ja maailmameistrivõistlustel.',
  },
  'about.p2': {
    en: 'With a strong upward trajectory in international rankings, Nataly embodies dedication, artistry, and the pursuit of excellence on ice.',
    et: 'Tugeva tõusutrajektooriga rahvusvahelises edetabelis kehastab Nataly pühendumust, kunstilisust ja tipptaseme poole püüdlemist jääl.',
  },

  // Achievements
  'achievements.title': { en: 'Achievements', et: 'Saavutused' },
  'achievements.worlds': { en: 'World Championships', et: 'Maailmameistrivõistlused' },
  'achievements.worlds.detail': { en: 'Top 20', et: 'Top 20' },
  'achievements.euros': { en: 'European Championships', et: 'Euroopa meistrivõistlused' },
  'achievements.euros.detail': { en: 'Best result: 14th place', et: 'Parim tulemus: 14. koht' },
  'achievements.intl': { en: 'International Competitions', et: 'Rahvusvahelised võistlused' },
  'achievements.intl.detail': { en: 'Multiple medals', et: 'Mitmeid medaleid' },
  'achievements.national': { en: 'Estonian Championships', et: 'Eesti meistrivõistlused' },
  'achievements.national.detail': { en: 'Multiple medals', et: 'Mitmeid medaleid' },

  // Olympic
  'olympic.title': { en: 'Olympic Journey', et: 'Olümpiatee' },
  'olympic.p1': {
    en: 'A new Olympic cycle has begun, and Nataly is training with one clear goal: qualifying for the Olympic Games.',
    et: 'Uus olümpiatsükkel on alanud ja Nataly treenib ühe selge eesmärgiga: kvalifitseeruda olümpiamängudele.',
  },
  'olympic.p2': {
    en: 'As one of the top-ranked Estonian figure skaters in the world standings, she is on a trajectory that makes this dream achievable.',
    et: 'Ühe parima Eesti iluuisutajana maailma edetabelis on ta trajektooril, mis muudab selle unistuse saavutatavaks.',
  },

  // Media
  'media.title': { en: 'Media & Videos', et: 'Meedia & Videod' },

  // Sponsors
  'sponsors.title': { en: 'Partners & Sponsors', et: 'Partnerid & Sponsorid' },
  'sponsors.cta': { en: 'Become a Partner', et: 'Hakka partneriks' },

  // Value
  'value.title': { en: 'Value for Sponsors', et: 'Väärtus sponsoritele' },
  'value.visibility': { en: 'Brand Visibility', et: 'Brändi nähtavus' },
  'value.visibility.detail': {
    en: 'Your brand showcased at European and World Championship events, reaching global audiences.',
    et: 'Teie bränd esitletud Euroopa ja maailmameistrivõistlustel, jõudes globaalse publikuni.',
  },
  'value.social': { en: 'Social Media Exposure', et: 'Sotsiaalmeedia katvus' },
  'value.social.detail': {
    en: 'Active presence on Instagram @nataskating with an engaged audience passionate about figure skating.',
    et: 'Aktiivne kohalolek Instagramis @nataskating pühendunud jälgijaskonnaga.',
  },
  'value.association': { en: 'Olympic Association', et: 'Olümpiasidem' },
  'value.association.detail': {
    en: 'Align your brand with a rising Olympic-level athlete, embodying excellence and determination.',
    et: 'Seostage oma bränd tõusva olümpiataseme sportlasega, kehastades tipptaset ja sihikindlust.',
  },

  // Education
  'education.title': { en: 'Education & Personality', et: 'Haridus & Isiksus' },
  'education.p1': {
    en: 'Nataly studies at the Estonian Academy of Security Sciences in tax and customs, balancing elite sport with higher education.',
    et: 'Nataly õpib Sisekaitseakadeemias maksu- ja tollierialal, tasakaalustades tippsporti kõrgharidusega.',
  },
  'education.p2': {
    en: 'This dual commitment reflects her disciplined, reliable, and long-term mindset — qualities that extend to every partnership.',
    et: 'See kahekordne pühendumine peegeldab tema distsiplineeritud, usaldusväärset ja pikaajalist mõtteviisi — omadusi, mis laienevad igale partnerlusele.',
  },

  // Social
  'social.title': { en: 'Follow the Journey', et: 'Jälgi teekonda' },
  'social.handle': { en: '@nataskating', et: '@nataskating' },

  // Contact
  'contact.title': { en: "Let's Collaborate", et: 'Teeme koostööd' },
  'contact.subtitle': {
    en: 'Interested in partnering with Nataly? Get in touch with her management team.',
    et: 'Huvitatud koostööst Natalyga? Võtke ühendust tema meeskonnaga.',
  },
  'contact.email': { en: 'Contact via Email', et: 'Võta ühendust e-postiga' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', et: 'Kõik õigused kaitstud.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
