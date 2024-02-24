import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import getColor from '@utils/getColor';
import styles from './LoadingPage.styles';
import {useAppDispatch} from '@hooks/useRedux';

export default function LoadingPage() {
  const colors = getColor();
  const dispatch = useAppDispatch();
  const style = styles(colors);
  return (
    <View style={style.container} testID="loading-screen">
      {<ActivityIndicator size="large" color={getColor().blue} />}
    </View>
  );
}
