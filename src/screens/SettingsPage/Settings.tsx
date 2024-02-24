// DrawerContent.tsx
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
  I18nManager,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import ThemeToggle from '@components/atoms/ThemeToggle';
import getColor from '@utils/getColor';
import {colors} from 'src/types/color.type';
import {ThemeContext} from '@hooks/useThemeContext';
import {styles} from './Settings.styles';
import {t, changeLanguage} from 'i18next';

import i18n from '../../locales';

import {localization} from '@constants/enums';
import RNRestart from 'react-native-restart'; // Import package from node modules
import {setAppLanguage} from '@utils/language';

const Settings: React.FC<{}> = ({}) => {
  const {theme} = useContext(ThemeContext);
  const color = getColor();
  const style = styles(color);
  const Lang = i18n.language;
  const changeLang = () => {
    i18n.changeLanguage(
      i18n.language == localization.AR ? localization.EN : localization.AR,
    );
    I18nManager.allowRTL(I18nManager.isRTL ? false : true);
    I18nManager.forceRTL(I18nManager.isRTL ? false : true);
    const timeOut = setTimeout(_ => {
      RNRestart.Restart();
      clearTimeout(timeOut);
    }, 100);
  };
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.drawerHeaderText}>{`${t('Settings')}`}</Text>
      <View style={style.drawerItem}>
        <Text style={style.txt}>{`${t('Change_Language')}`}</Text>
        <TouchableOpacity style={style.toggle} onPress={changeLang}>
          <Text style={style.txt}>{`${t(Lang)}`}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.drawerItem}>
        <Text style={style.txt}>{`${t(
          `${I18nManager.isRTL ? 'light' : 'dark'}`,
        )}`}</Text>
        <ThemeToggle />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
