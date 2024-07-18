import React, { createContext, useState, useEffect } from 'react';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    fetch(`/translations/${language}.json`)
      .then(response => response.json())
      .then(data => setTranslations(data));
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ translations, changeLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
};
