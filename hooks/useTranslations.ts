
import { translations } from '../translations/content';
import type { Language } from '../types';

export const useTranslations = (lang: Language) => {
  return translations[lang];
};
