// import EN from '../locales/en/EN.json';
// import AR from '../locales/ar/AR.json';

// type TranslationResources = {
//   translation: Record<string, string>;
// };

// export interface Sources extends Record<string, TranslationResources> {}

import AR from '../locales/ar/AR.json';
import EN from '../locales/en/EN.json';
import {Resources} from 'react-i18next'; // Import the Resources interface from react-i18next

declare module 'react-i18next' {
  interface Resources extends Resources {
    en: {
      translation: typeof EN;
    };
    ar: {
      translation: typeof AR;
    };
  }
}

type TranslationKey = string;
type NestedTranslationKey = {
  key1: string;
  key2?: string; // Optional key
};
interface TranslationFunction<T extends TranslationKey> {
  (key: T): string;
}
