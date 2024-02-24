import {calcHeight} from '@utils/responsive-helper.service';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';
const styles = (color: colors) =>
  StyleSheet.create({
    search: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: color.card,
      borderRadius: 25,
      marginHorizontal: 10,
      marginBottom: calcHeight(10),
    },
    txtInput: {
      height: 50,
      borderColor: color.card,
      paddingLeft: 10,
      color: color.white,
      fontSize: 20,
      // width: '100%',
    },
  });

export default styles;
