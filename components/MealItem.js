import { React } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MealItem = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={styles.mealRow}>
            <Text>{title}</Text>
          </View>
          <View style={styles.mealRow}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  mealRow: {
    flexDirection: "row",
  },
});
export default MealItem;
