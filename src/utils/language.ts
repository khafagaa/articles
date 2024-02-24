import {localization} from '@constants/enums';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';

export const getAppLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem('language');
    return language || localization.EN;
  } catch (err) {
    console.error('Error getting app language:', err);
  }
};
export const setAppLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem('language', language);
    await i18n.changeLanguage(language);
  } catch (err) {
    console.error('Error setting app language:', err);
  }
};
