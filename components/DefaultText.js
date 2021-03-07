import React from "react";
import { StyleSheet, Text } from "react-native";
const DefaultText = (props) => {
  return <Text style={styles.TextStyle}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  TextStyle: {
    fontFamily: "open-sans-bold",
  },
});

export default DefaultText;
