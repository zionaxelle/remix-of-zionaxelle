import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    works: 'Works',
    bio: 'Bio',
    contact: 'Contact',
    
    // Bio page
    bioTitle: 'About the Artist',
    bioDescription: 'Zion Axelle is a Filipina multidisciplinary artist whose work explores themes of identity, culture, and contemporary society through various mediums including painting, sculpture, and digital art.',
    
    // Contact page
    contactTitle: 'Get In Touch',
    contactTitleFirst: 'GET IN',
    contactTitleSecond: 'TOUCH',
    contactName: 'Name',
    contactEmail: 'Email',
    contactSubject: 'Subject',
    contactMessage: 'Message',
    contactSend: 'Send Message',
    contactInfo: 'Contact Information',
    contactPhone: 'Phone',
    contactStudio: 'Studio',
    contactSocial: 'Follow Me',
    
    // Footer
    websiteDeveloped: 'Website Developed by',
    
    // Works page
    worksTitle: 'Artworks',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    works: 'Œuvres',
    bio: 'Biographie',
    contact: 'Contact',
    
    // Bio page
    bioTitle: 'À Propos de l\'Artiste',
    bioDescription: 'Zion Axelle est une artiste multidisciplinaire philippine dont le travail explore les thèmes de l\'identité, de la culture et de la société contemporaine à travers divers médiums incluant la peinture, la sculpture et l\'art numérique.',
    
    // Contact page
    contactTitle: 'Contactez-moi',
    contactTitleFirst: 'CONTACTEZ',
    contactTitleSecond: 'MOI',
    contactName: 'Nom',
    contactEmail: 'Email',
    contactSubject: 'Sujet',
    contactMessage: 'Message',
    contactSend: 'Envoyer le Message',
    contactInfo: 'Informations de Contact',
    contactPhone: 'Téléphone',
    contactStudio: 'Atelier',
    contactSocial: 'Suivez-moi',
    
    // Footer
    websiteDeveloped: 'Site Web Développé par',
    
    // Works page
    worksTitle: 'Œuvres d\'Art',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};