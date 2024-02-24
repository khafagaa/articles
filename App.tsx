import React, {useEffect, useState} from 'react';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import Navigation from '@navigation/index';
import {Provider} from 'react-redux';
import {store} from '@redux/store';
import {Linking} from 'react-native';

import 'react-native-gesture-handler';
import './src/locales';
import './src/locales';
import {getURlParams} from '@utils/getURlPamas';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ProvidersWrapper />
    </Provider>
  );
}

export default App;
