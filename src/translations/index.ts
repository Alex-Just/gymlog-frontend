import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from './en';
import * as es from './es';
import * as ru from './ru';

const nsKeys = Object.keys(en) as Array<keyof typeof en>;
const ns = nsKeys.reduce((acc, key) => acc.concat(key), [] as string[]);

export const defaultNS = ns[0];

void i18n.use(initReactI18next).init({
  ns,
  defaultNS,
  resources: {
    en,
    es,
    ru,
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  compatibilityJSON: 'v3',
});

export default i18n;
