import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Dispatch, FC, SetStateAction, memo, useState} from 'react';
import {card} from 'src/types/card.type';
import styles from './Card.styles';
import getColor from '@utils/getColor';
import {NewsArticle} from 'src/types/article.type';
import FastImage from 'react-native-fast-image';
import {t} from 'i18next';

const Card: FC<{
  results: card;
  pressArticle: (item: NewsArticle) => void;
}> = ({results, pressArticle}) => {
  let color = getColor();
  const style = styles(color);

  const RenderItem: ListRenderItem<NewsArticle> = ({item}) => {
    return (
      <TouchableOpacity
        style={style.container}
        onPress={() => pressArticle(item)}>
        <View style={{flexDirection: 'row'}}>
          <FastImage
            style={style.img}
            source={{
              uri: `${item?.urlToImage}`,
            }}
          />
          <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <Text numberOfLines={3} style={style.titleTxt}>
              {`${t('title')}: ${item?.title}`}
            </Text>
            <Text numberOfLines={2} style={style.txt}>
              {`${t('content')}: ${item?.content?.slice(0, 51)}`}
            </Text>
            <Text numberOfLines={2} style={style.txt}>
              {`${t('author')}: ${item?.author}`}
            </Text>
            <Text style={style.txt}>{`${t('publishedAt')}: ${
              item?.publishedAt
            }`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={results}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, indx) => String(indx)}
        renderItem={RenderItem}
        //* performance properities
        removeClippedSubviews={false}
        maxToRenderPerBatch={15}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
      />
    </View>
  );
};

export default memo(Card);
