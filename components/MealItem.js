import { React } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MealItem = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow,...styles.mealHeader}}>
            <Text>{title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail}}></View>
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
  mealHeader: {
    height: '80%',
    
  }
  mealDetail: {
    
  }
});
export default MealItem;
