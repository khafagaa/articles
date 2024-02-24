import {NavigationContainer} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {ThemeProvider} from '@providers/Theme.provider';
import {store} from '../redux/store';
import {Provider} from 'react-redux';
import DrawerStack from '@navigation/index';
import {I18nextProvider} from 'react-i18next';
const ProvidersWrapper: FC = () => (
  <ThemeProvider>
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  </ThemeProvider>
);

export default ProvidersWrapper;
