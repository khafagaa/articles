import {
  View,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  I18nManager,
  Platform,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import getColor from '@utils/getColor';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Home.styles';
import ThemeToggle from '@components/atoms/ThemeToggle';
import Card from '@components/molecules/Card/Card';
import {NewsArticle} from 'src/types/article.type';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeScreenProps, RootStackParamList} from 'src/types/navigation.type';
import {useGetArticleQuery} from '@services/articlesApis';
import {useDispatch} from 'react-redux';
import Search from '@components/molecules/Search/Search';
import i18n from '../../locales';
import {localization} from '@constants/enums';
import RNRestart from 'react-native-restart'; // Import package from node modules

const Home: FC<HomeScreenProps> = ({navigation}) => {
  const colors = getColor();
  const style = styles(colors);
  const {data, isFetching, refetch} = useGetArticleQuery('');
  const [articles, setArticles] = useState<NewsArticle[] | undefined>([]);

  //* initialize the movies
  useEffect(() => {
    data?.length && !articles?.length && setArticles(data);
  }, [data]);

  const filterArticles = (value: string) => {
    if (value) {
      const filtration = data?.filter(article =>
        article.title.toLowerCase().toString().match(value.toLowerCase()),
      );
      setArticles(filtration);
    } else setArticles(data);
  };
  const pressArticle = (item: NewsArticle) => {
    navigation.navigate('Details', {article: item});
  };
  const ReFetchData = () => (
    <View
      style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}
      testID="view">
      <View>
        <Text style={style.txt}>refetch data</Text>
        <TouchableOpacity onPress={refetch}>
          <Ionicons
            name="reload-circle"
            size={50}
            color={getColor().white}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={style.container} testID="home-screen">
      <Search callBack={filterArticles} />
      {articles?.length && !isFetching ? (
        <Card results={articles} pressArticle={pressArticle} />
      ) : (
        <React.Fragment>
          {isFetching ? (
            <ActivityIndicator
              color={colors.primary}
              size={'large'}
              style={{flex: 1}}
            />
          ) : (
            <ReFetchData />
          )}
        </React.Fragment>
      )}
    </SafeAreaView>
  );
};

export default Home;
