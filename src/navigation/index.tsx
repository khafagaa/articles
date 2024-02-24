import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, LoadingPage, Settings} from '@screens/index';
import AppStack from '@navigation/stack';
import {
  AppDrawerRoutesType,
  AppStackRoutesType,
  DrawerParamList,
} from 'src/types/navigation.type';
import DrawerContent from '@screens/DrawerContent';
import {extractObject} from '@utils/getURlPamas';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NewsArticle} from 'src/types/article.type';

export default function DrawerStack() {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  useEffect(() => {
    const handleDeepLink = (event: {url: string}) => {
      // Handle deep link URL
      const params: {[key: string]: NewsArticle} = extractObject(event.url);
      console.log('Deep link received:', params);
      navigation.navigate('Details', {article: params});
    };

    // Add event listener for deep linking
    Linking.addEventListener('url', handleDeepLink);

    // Remove event listener on component unmount
    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);
  const appDrawerRoutes: AppDrawerRoutesType[] = [
    {
      name: 'AppStack',
      component: AppStack,
    },
    {
      name: 'Settings',
      component: Settings,
    },
  ];
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true, headerTitle: ''}}
      initialRouteName="AppStack"
      drawerContent={props => <DrawerContent {...props} />}>
      {appDrawerRoutes.map(drawerRoute => (
        <Drawer.Screen
          key={drawerRoute.name}
          component={drawerRoute.component}
          name={drawerRoute.name}
        />
      ))}
      {/* <Drawer.Screen component={AppStack} name="AppStack" />
      <Drawer.Screen component={Home} name="Home" />
      <Drawer.Screen component={Settings} name="Settings" /> */}
    </Drawer.Navigator>
  );
}
