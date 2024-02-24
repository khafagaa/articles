import React, {useEffect} from 'react';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RouteConfig, StackNavigationState} from '@react-navigation/native';

import {Details, Home, LoadingPage} from '@screens/index';
import {useSelector} from 'react-redux';
import {
  AppStackRoutesType,
  DetailsScreenProps,
  RootStackParamList,
} from 'src/types/navigation.type';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';

export default function Navigation() {
  const {loading} = useAppSelector(state => state.loading);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  // strictly typed array of app stack routes
  const appStackRoutes: AppStackRoutesType[] = [
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'Details',
      component: Details,
    },
  ];
  return (
    <>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {appStackRoutes.map(stackRoute => (
          <Stack.Screen key={stackRoute.name} {...stackRoute} />
        ))}
      </Stack.Navigator>

      {loading && <LoadingPage />}
    </>
  );
}
