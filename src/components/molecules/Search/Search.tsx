import {View, Text, TextInput} from 'react-native';
import React, {FC, useRef} from 'react';
import styles from './Search.styles';
import getColor from '@utils/getColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';
// import 'src/types/react-i18next';

type props = {
  callBack: Function;
};
const Search: FC<props> = ({callBack}) => {
  const {t} = useTranslation();
  const colors = getColor();
  const style = styles(colors);
  const textInputRef = useRef(null);
  return (
    <View style={style.search}>
      <Icon
        name="search"
        size={20}
        color={colors.white}
        style={{marginStart: 20, alignSelf: 'center'}}
      />
      <TextInput
        ref={textInputRef}
        onChangeText={value => {
          textInputRef.current.text = value;
        }}
        // i can directly give the callBack => event.nativeEvent.text
        onEndEditing={event => callBack(textInputRef?.current?.text ?? '')}
        style={style.txtInput}
        placeholder={`${t('search')} ...`}
        placeholderTextColor={colors.white}
        cursorColor={colors.white}
      />
      {/* <ThemeToggle /> */}
    </View>
  );
};

export default Search;
