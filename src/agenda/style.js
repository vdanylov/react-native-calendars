import { StyleSheet } from "react-native";
import * as defaultStyle from "../style";
import platformStyles from "./platform-style";


const STYLESHEET_ID = 'stylesheet.agenda.main';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  const { knob, weekdays, weekdaysWrapper } = platformStyles(appStyle);
  return StyleSheet.create({
    knob,
    weekdays,
    weekdaysWrapper,
    header: {
      overflow: 'hidden',
      justifyContent: 'flex-end',
      position:'absolute',
      height:'100%',
      width:'100%'
    },
    knobContainer: {
      flex: 1,
      position: "absolute",
      left: 0,
      right: 0,
      height: 24,
      bottom: 0,
      alignItems: "center",
      backgroundColor: appStyle.calendarBackground
    },
    weekday: {
      width: 32,
      textAlign: "center",
      fontSize: 13,
      color: appStyle.textSectionTitleColor
      textAlign: 'center',
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight
    },
    reservations: {
      flex: 1,
      marginTop: 104,
      backgroundColor: appStyle.backgroundColor
    },
    monthName: {
      fontSize: 24,
      color: "black"
    },
    headerWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingHorizontal: 11
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
