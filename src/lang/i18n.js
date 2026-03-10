
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './fr.json';
import ar from './ar.json';

export const languageResources = {
  fr: { translation: fr },
  ar: { translation: ar },
};

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'fr',
    fallbackLng: 'fr',
    resources: languageResources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;