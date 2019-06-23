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
        singleDay,
        color,
        disabled,
        icon
      },
      onPress
    } = this.props;
    const isSelectedInAnyOption =
      selected || startingDay || endingDay || today || singleDay;
    const iconSource = this.getIconSource(icon);
    const backgroundColor = {
      backgroundColor: color ? color : null
    };
    return (
      <Fragment>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => onPress(date.dateString)}
          style={this.style.dayWrapper}
        >
          <View style={this.style.dayWrapper}>
            <View
              style={[
                this.style.background,
                selected && this.style.backgroundSelected,
                startingDay && this.style.backgroundStartingDay,
                endingDay && this.style.backgroundEndingDay,
                !singleDay && backgroundColor
              ]}
            />
            <View
              style={[
                this.style.textWrapper,
                singleDay && this.style.textWrapperSingleDay,
                today && this.style.textWrapperToday,
                singleDay && backgroundColor
              ]}
            >
              <Text
                style={[
                  this.style.text,
                  isSelectedInAnyOption
                    ? this.style.textSelected
                    : this.style.textNotSelected,
                  today && this.style.textToday
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
      </Fragment>
    );
  }
}
export default Day;
