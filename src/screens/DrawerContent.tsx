// DrawerContent.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import ThemeToggle from '@components/atoms/ThemeToggle';
import getColor from '@utils/getColor';
import {colors} from 'src/types/color.type';
import {t} from 'i18next';

const DrawerContent: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  const color = getColor();
  const style = styles(color);

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.drawerHeaderText}>{t('Drawer_Header')}</Text>
      <TouchableOpacity
        style={style.drawerItem}
        onPress={() => navigation.navigate('Home')}>
        <Text style={style.txt}>{`${t('Home')}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.drawerItem}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={style.txt}>{`${t('Settings')}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.drawerItem}
        onPress={() =>
          Linking.openURL(
            'https://techcrunch.com/2024/02/22/unitedhealth-change-healthcare-hacked-nation-state-outage/',
          )
        }>
        <Text style={style.drawerItemText}>{`${t('zkArt')}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.drawerItem}
        onPress={() =>
          Linking.openURL(
            'https://www.theverge.com/2024/2/22/24080165/google-reddit-ai-training-data',
          )
        }>
        <Text style={style.drawerItemText}>{`${t('emArt')}`}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 25,
      paddingStart: 10,
    },
    drawerHeaderText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    drawerItem: {},
    drawerItemText: {
      fontSize: 19,
      textDecorationLine: 'underline',
      textDecorationColor: color.green,
    },
    txt: {
      fontSize: 19,
    },
  });

export default DrawerContent;
