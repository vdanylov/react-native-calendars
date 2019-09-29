import React, { PureComponent, Fragment } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styleConstructor from "./style";

class Day extends PureComponent {
  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
  }

  getIconSource = icon => {
    switch (icon) {
      case "PASTDAY":
        return require("./icons/iconStar.png");
      case "PASTDAYACTIVE":
        return require("./icons/iconStarActive.png");
      case "DELIVERYDAY":
        return require("./icons/iconDelivery.png");
      case "FUTUREDAY":
        return require("./icons/iconMenu.png");
      case "FUTUREDAYACTIVE":
        return require("./icons/iconMenuActive.png");
      default:
        return null;
    }
  };

  render() {
    const {
      state,
      date,
      withIcons,
      marking: {
        selected,
        startingDay,
        endingDay,
        today,
        chosen,
        singleDay,
        color,
        disabled,
        icon
      },
      onPress
    } = this.props;
    // state "disabled" for hideExtraDays option
    const isExtraDay = state === "disabled";
    const isSelectedInAnyOption =
      selected || startingDay || endingDay || today || chosen || singleDay;
    const iconSource = this.getIconSource(icon);
    const backgroundColor = color
      ? {
          backgroundColor: color
        }
      : null;
    // temporary today and chosen days are styled same
    return (
      <>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => onPress(date.dateString)}
          style={this.style.dayWrapper}
        >
          <View style={this.style.dayWrapper}>
            <View
              style={[
                this.style.background,
                selected && !singleDay && this.style.backgroundSelected,
                startingDay && this.style.backgroundStartingDay,
                endingDay && this.style.backgroundEndingDay,
                selected && !singleDay && backgroundColor
              ]}
            />
            <View
              style={[
                this.style.textWrapper,
                singleDay && this.style.textWrapperSingleDay,
                singleDay && backgroundColor,
                today && this.style.textWrapperToday,
                chosen && this.style.textWrapperToday
              ]}
            >
              <Text
                style={[
                  this.style.text,
                  isSelectedInAnyOption
                    ? this.style.textSelected
                    : this.style.textNotSelected,
                  withIcons && this.style.textSelected,
                  isExtraDay && this.style.extraDay,
                  today && this.style.textToday,
                  chosen && this.style.textToday
                ]}
              >
                {date.day}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {withIcons && (
          <Image source={iconSource} style={{ marginTop: 5, height: 13 }} />
        )}
      </>
    );
  }
}
export default Day;
