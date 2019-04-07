import { StyleSheet } from "react-native";
import * as defaultStyle from "../../../style";

const STYLESHEET_ID = "stylesheet.day.period";

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    dayWrapper: {
      height: 34,
      width: 50,
      alignItems: "center",
      justifyContent: "center"
    },
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      height: 34,
      width: 50,
      backgroundColor: "white"
    },
    backgroundSelected: {
      backgroundColor: "rgb(246,246,246)"
    },
    backgroundStartingDay: {
      backgroundColor: "rgb(246,246,246)",
      borderBottomLeftRadius: 20,
      borderTopLeftRadius: 20
    },
    backgroundEndingDay: {
      backgroundColor: "rgb(246,246,246)",
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20
    },
    textWrapper: {
      width: 34,
      height: 34,
      alignItems: "center",
      justifyContent: "center"
    },
    textWrapperSingleDay: {
      backgroundColor: "rgb(246,246,246)",
      borderRadius: 20
    },
    textWrapperToday: {
      backgroundColor: "white",
      borderRadius: 20,
      shadowColor: "rgb(34,34,34)",
      shadowOpacity: 0.08,
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowRadius: 12,
      elevation: 1
    },
    text: {
      fontSize: 14,
      fontWeight: "600"
    },
    textSelected: {
      color: "rgb(34,34,34)"
    },
    textNotSelected: {
      color: "rgb(155,154,163)"
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
