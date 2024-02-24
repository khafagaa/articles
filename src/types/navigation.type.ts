import {
  RouteConfig,
  RouteProp,
  StackNavigationState,
} from '@react-navigation/native';
import {NewsArticle} from './article.type';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Details: {article: NewsArticle};
};

export type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
  // Add more screens as needed
};
export type AppDrawerRoutesType = {
  name: string;
  component: React.ComponentType<any>;
  options?: any;
};

//*   type of the single route in app stack
export type AppStackRoutesType = RouteConfig<
  RootStackParamList,
  keyof RootStackParamList,
  StackNavigationState<RootStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

export type RouteObject = {
  name: keyof RootStackParamList;
  component: React.ComponentType<ScreenProps>;
};

// const appStackRoutes:Array<React.ComponentProps<typeof Stack.Screen>> = [

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList>;
}
export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
  route: RouteProp<RootStackParamList, 'Details'>;
}
