import getColor from '@utils/getColor';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';
import Shadow from '@constants/Shadow';
import {
  calcFont,
  calcHeight,
  calcWidth,
  screenWidth,
} from '@utils/responsive-helper.service';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      marginHorizontal: calcWidth(10),
      marginTop: calcHeight(40),
      ...Shadow(color.primary),
      backgroundColor: color.card,
      borderRadius: 20,
    },
    img: {
      width: calcWidth(110),
      height: calcHeight(170),
      borderRadius: calcWidth(10),
      bottom: calcHeight(20),
      marginHorizontal: calcWidth(18),
    },
    titleTxt: {
      width: calcWidth(180),
      color: color.primary,
      fontWeight: 'bold',
      fontSize: calcFont(12),
    },
    txt: {
      width: calcWidth(150),
      marginTop: calcHeight(12),
      fontSize: calcFont(14),
      color: color.primary,
    },
    txt2: {
      marginBottom: calcHeight(15),
      fontSize: calcFont(14),
      color: color.txt,
    },
  });

export default styles;
