import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {DetailsScreenProps} from 'src/types/navigation.type';
import getColor from '@utils/getColor';
import styles from './Details.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {useTranslation} from 'react-i18next';

const Details: FC<DetailsScreenProps> = ({navigation, route}) => {
  const color = getColor();
  const style = styles(color);
  const {t} = useTranslation();

  const {article} = route.params ?? {};
  console.log(`ehhh ${JSON.stringify(article)}`);
  return (
    <ScrollView style={style.container} testID="details-screen">
      <FastImage
        style={style.imgContainer}
        resizeMode="stretch"
        source={{
          uri: `${article?.urlToImage}`,
        }}>
        <SafeAreaView>
          <Ionicons
            name="caret-back"
            size={35}
            color={getColor().darkBlue}
            onPress={() => navigation.goBack()}
            style={style.icn}
          />
        </SafeAreaView>
      </FastImage>
      <View style={style.txts}>
        <View style={{flexDirection: 'column'}}>
          <Text style={style.titleTxt}>{`${t('title')}:`}</Text>
          <Text style={style.title2Txt}>{`${article?.title}`}</Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={style.titleTxt}>{`${t('content')}:`}</Text>
          <Text
            style={style.title2Txt}
            numberOfLines={5}>{`${article?.content}`}</Text>
        </View>
        <Text style={style.titleTxt}>{`${t('author')}: ${
          article?.author
        }`}</Text>
        <Text style={style.titleTxt}>{`${t('publishedAt')}: ${
          article?.publishedAt
        }`}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
