import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import Colors from "../constant/Colors";
const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (newValue) => {
    setIsGlutenFree(newValue);
    setIsEnabled(newValue);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters /Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          thumbColor={isEnabled ? "white" : Colors.primaryColor}
          trackColor={{ true: Colors.primaryColor }}
          value={isGlutenFree}
          onValueChange={toggleSwitch}
        />
      </View>
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
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});
export default FilterScreen;
