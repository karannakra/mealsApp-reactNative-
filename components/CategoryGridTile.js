import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS == "android") {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    height: 150,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: "flex-end",
    padding: 10,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "right",
  },
});
export default CategoryGridTile;
