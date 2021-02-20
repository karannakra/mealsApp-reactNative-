import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View>
      <Text>The Categories Screen!</Text>
      <Button
        title="go to meal"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoriesMeals" });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesScreen;
