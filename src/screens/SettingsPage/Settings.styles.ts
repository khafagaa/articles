import {
  calcFont,
  calcHeight,
  calcWidth,
} from '@utils/responsive-helper.service';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';

export const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: calcHeight(25),
      paddingStart: calcWidth(10),
      backgroundColor: color.darkBlue,
    },
    drawerHeaderText: {
      fontSize: calcFont(20),
      fontWeight: 'bold',
      marginBottom: 10,
      color: color.txt,
      marginTop: calcHeight(15),
    },
    drawerItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    txt: {
      fontSize: calcFont(19),
      color: color.txt,
    },
    toggle: {marginHorizontal: calcWidth(20), alignSelf: 'center'},
  });
