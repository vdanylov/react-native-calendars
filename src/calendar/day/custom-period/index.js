import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styleConstructor from "./style";

class Day extends PureComponent {
  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
  }

  render() {
    const {
      state,
      date,
      marking: { selected, startingDay, endingDay, today, singleDay },
      onPress
    } = this.props;
    const isSelectedInAnyOption =
      selected || startingDay || endingDay || today || singleDay;

    return (
      <TouchableOpacity
        onPress={() => onPress(date.dateString)}
        style={this.style.dayWrapper}
      >
        <View style={this.style.dayWrapper}>
          <View
            style={[
              this.style.background,
              selected && this.style.backgroundSelected,
              startingDay && this.style.backgroundStartingDay,
              endingDay && this.style.backgroundEndingDay
            ]}
          />
          <View
            style={[
              this.style.textWrapper,
              singleDay && this.style.textWrapperSingleDay,
              today && this.style.textWrapperToday
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
    );
  }
}
export default Day;
