import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

class Day extends PureComponent {
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
      <TouchableOpacity onPress={() => onPress(date.dateString)}>
        <View style={styles.dayWrapper}>
          <View
            style={[
              styles.background,
              selected && styles.backgroundSelected,
              startingDay && styles.backgroundStartingDay,
              endingDay && styles.backgroundEndingDay
            ]}
          />
          <View
            style={[
              styles.textWrapper,
              singleDay && styles.textWrapperSingleDay,
              today && styles.textWrapperToday
            ]}
          >
            <Text
              style={[
                styles.text,
                isSelectedInAnyOption
                  ? styles.textSelected
                  : styles.textNotSelected
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
