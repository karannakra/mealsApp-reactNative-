import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DefaultText from "../components/DefaultText";

const MealItem = (props) => {
  const image = { uri: props.image };
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={image} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordable.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "95%",
    backgroundColor: "#f1e2f7",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
export default MealItem;
