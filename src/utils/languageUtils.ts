import i18next from 'i18next';
import { storage } from '@/utils/storage';

export const loadSavedLanguage = async (): Promise<void> => {
  const savedLanguage = storage.getString('selectedLanguage');
  if (savedLanguage) {
    await i18next.changeLanguage(savedLanguage);
  }
};
