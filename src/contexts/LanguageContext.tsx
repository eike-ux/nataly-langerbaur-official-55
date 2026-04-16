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
    et: 'Eesti iluuisutaja | MM Top 20 | Tee olümpiale',
  },
  'hero.cta.partner': { en: 'Partner with Nataly', et: 'Hakka partneriks' },
  'hero.cta.achievements': { en: 'View Achievements', et: 'Vaata saavutusi' },

  // About
  'about.title': { en: 'About Nataly', et: 'Natalyst' },
  'about.p1': {
    en: 'Nataly Langerbaur is a 21-year-old Estonian figure skater who has steadily established herself on the international stage. She has represented Estonia at both European and World Championships, finishing among the world’s top athletes, including a Top 20 placement at the World Championships.',
    et: 'Nataly Langerbaur on 21-aastane Eesti iluuisutaja, kes on viimastel aastatel tõusnud rahvusvahelisel tasemel kindlaks konkurendiks. Ta on esindanud Eestit Euroopa- ja maailmameistrivõistlustel, jõudes maailma tugevaimate sportlaste hulka ning lõpetades maailmameistrivõistlused 20 parema seas.',
  },
  'about.p2': {
    en: 'Her journey is defined by consistency, discipline, and continuous growth. Each season brings new personal bests and stronger performances against world-class competitors.\n' +
        'Nataly is more than an athlete — she is a dedicated professional with a clear vision: to reach the highest level of her sport and inspire others through her journey.',
    et: 'Tema arengut iseloomustab järjepidevus, tööeetika ja sihikindlus. Iga hooaeg on toonud kaasa uusi isiklikke rekordeid ning tugevama positsiooni rahvusvahelises konkurentsis.\n' +
        'Nataly ei ole ainult sportlane – ta on sihikindel noor professionaal, kelle eesmärk on jõuda maailma tippu ning inspireerida oma teekonnaga ka teisi.',
  },

  // Achievements
  'achievements.title': { en: 'Achievements', et: 'Saavutused' },
  'achievements.worlds': { en: 'World Championships', et: 'Maailmameistrivõistlused' },
  'achievements.worlds.detail': { en: 'Top 20', et: 'Top 20' },
  'achievements.euros': { en: 'European Championships', et: 'Euroopa meistrivõistlused' },
  'achievements.euros.detail': { en: 'Best SP result: 10th place. Best result: 14th place.', et: 'Parim lühikava: 10. koht. Parim tulemus: 14. koht' },
  'achievements.intl': { en: 'International Competitions', et: 'Rahvusvahelised võistlused' },
  'achievements.intl.detail': { en: 'Multiple medals', et: 'Mitmeid medaleid' },
  'achievements.national': { en: 'Estonian Championships', et: 'Eesti meistrivõistlused' },
  'achievements.national.detail': { en: 'Multiple medals', et: 'Mitmeid medaleid' },
  'achievements.volvo': { en: 'Volvo Open', et: 'Volvo Open' },
  'achievements.volvo.detail': { en: '1st place', et: '1. koht' },
  'achievements.abudhabi': { en: 'Abu Dhabi', et: 'Abu Dhabi' },
  'achievements.abudhabi.detail': { en: '1st place', et: '1. koht' },
  'achievements.tallink': { en: 'Tallink Cup', et: 'Tallink Cup' },
  'achievements.tallink.detail': { en: '2nd place', et: '2. koht' },
  'achievements.sonja': { en: 'Sonja Henie', et: 'Sonja Henie' },
  'achievements.sonja.detail': { en: '3rd place', et: '3. koht' },

  // Olympic
  'olympic.title': { en: 'Olympic Journey', et: 'Tee olümpiale' },
  'olympic.p1': {
    en: 'The start of a new Olympic cycle marks an important step in Nataly’s career. Her goal is to qualify for the Olympic Games and establish herself among the top athletes in the world.',
    et: 'Uue olümpiatsükli algus tähistab Nataly karjääris järgmist suurt sammu. Tema eesmärk on kvalifitseeruda olümpiamängudele ning kinnitada oma koht rahvusvahelises tipptasemel.',
  },
  'olympic.p2': {
    en: 'Currently ranked among the top Estonian skaters, she is consistently progressing toward this goal. Each season involves new programs, intensive training camps, and continuous refinement — the details that separate good athletes from great ones.',
    et: 'Tänaseks on ta maailmareitingu põhjal eestlastest teisel kohal ning liigub järjekindlalt oma eesmärkide suunas. Iga hooaeg tähendab uusi kavasid, intensiivseid treeninglaagreid ja pidevat arengut detailides, mis eristavad häid sportlasi tippudest.',
  },

  // Media
  'media.title': { en: 'Videos', et: 'Videod' },
  'mediaReleases.title': { en: 'Media Releases', et: 'Meediakajastused' },
  'mediaReleases.read': { en: 'Read', et: 'Loe lähemalt' },

  // Sponsors
  'sponsors.title': { en: 'Partners & Sponsors', et: 'Partnerid ja sponsorid' },
  'sponsors.cta': { en: 'Become a Partner', et: 'Hakka partneriks' },

  // Value
  'value.title': { en: 'Value for Sponsors', et: 'Väärtus sponsoritele' },
  'value.visibility': { en: 'Brand Visibility', et: 'Brändi nähtavus' },
  'value.visibility.detail': {
    en: 'Your brand showcased at European and World Championship events, reaching global audiences.',
    et: 'Teie bränd esitletud Euroopa ja maailmameistrivõistlustel, jõudes globaalse publikuni.',
  },
  'value.social': { en: 'Social Media Exposure', et: 'Sotsiaalmeedia kajastus' },
  'value.social.detail': {
    en: 'Active presence on Instagram @nataskating with an engaged audience passionate about figure skating.',
    et: 'Aktiivne kohalolek Instagramis @nataskating pühendunud jälgijaskonnaga.',
  },
  'value.association': { en: 'Olympic Association', et: 'Maailmatase' },
  'value.association.detail': {
    en: 'Align your brand with a rising Olympic-level athlete, embodying excellence and determination.',
    et: 'Seostage oma bränd tõusva maailmatasemel sportlasega, kehastades tipptaset ja sihikindlust.',
  },

  // Education
  'education.title': { en: 'Education & Personality', et: 'Haridus ja isiksus' },
  'education.p1': {
    en: 'Alongside her athletic career, Nataly is committed to her education. She is currently studying tax and customs at the Estonian Academy of Security Sciences, balancing demanding training schedules with academic responsibilities.',
    et: 'Lisaks tippspordile panustab Nataly teadlikult ka oma haridusse. Ta õpib Sisekaitseakadeemia finantskolledžis tolli- ja maksunduse erialal, ühendades igapäevaselt intensiivse treeninggraafiku õppetööga.',
  },
  'education.p2': {
    en: 'Maintaining this balance requires discipline, time management, and mental resilience — qualities that also define her as an athlete.\n' +
        'Nataly believes in building a strong foundation for the future, ensuring she grows not only in sport but also as a professional beyond it.',
    et: 'Selline tasakaal nõuab distsipliini, ajaplaneerimist ja vaimset vastupidavust – omadusi, mis iseloomustavad ka tema sportlikku teekonda. Nataly peab oluliseks olla realistlik ning luua tugev vundament ka eluks pärast tippsporti.\n' +
        'Tema eesmärk on areneda nii sportlasena kui ka inimesena, investeerides teadlikult oma tulevikku.',
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
  const [lang, setLang] = useState<Lang>('et');
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
