import { StyleSheet, Dimensions } from "react-native";
import * as defaultStyle from "../../../style";

const { width } = Dimensions.get("window");

const STYLESHEET_ID = "stylesheet.day.period";

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    dayWrapper: {
      alignItems: "center",
      alignSelf: "stretch",
      width: (width - 30) / 7
    },
    background: {
      position: "absolute",
      right: 0,
      top: 0,
      left: 0,
      height: 34,
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
      elevation: 3
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
    textToday: {
      fontSize: 18,
      fontWeight: "700"
    },
    extraDay: {
      color: "rgb(155,154,163)"
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
