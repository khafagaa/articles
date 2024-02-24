import {
  calcFont,
  calcHeight,
  calcWidth,
  screenHeigh,
  screenWidth,
} from '@utils/responsive-helper.service';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.darkBlue,
    },
    img: {
      width: calcWidth(150),
      height: calcHeight(220),
      borderRadius: calcWidth(10),
      alignSelf: 'flex-start',
      marginTop: calcHeight(50),
      marginLeft: calcWidth(25),
    },
    imgContainer: {
      height: screenHeigh / 1.7,
    },
    titleTxt: {
      color: color.white,
      fontWeight: 'bold',
      fontSize: calcFont(20),
      // margin: calcWidth(25),
      textDecorationLine: 'underline',
    },
    title2Txt: {
      color: color.white,
      fontWeight: 'bold',
      fontSize: calcFont(15),
    },

    titleoverView: {
      color: color.white,
      fontWeight: 'bold',
      fontSize: calcFont(17),
      padding: calcHeight(20),
    },
    icn: {
      alignSelf: 'flex-start',
      margin: calcWidth(10),
      backgroundColor: color.shadow,
      borderRadius: calcWidth(15),
      overflow: 'hidden',
      alignItems: 'center',
    },
    star: {marginLeft: 20},
    overTxt: {
      color: color.primary,
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: calcHeight(20),
      paddingHorizontal: calcWidth(20),
    },
    txts: {
      gap: calcHeight(20),
      paddingHorizontal: calcWidth(10),
      marginTop: calcHeight(20),
      marginBottom: calcHeight(40),
    },
  });

export default styles;
