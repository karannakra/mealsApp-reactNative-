import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import Colors from "../constant/Colors";
const FilterScreen = (props) => {
  return (
    <View>
      <Text>The Filter Screen!</Text>
    </View>
  );
};
FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FilterScreen;
