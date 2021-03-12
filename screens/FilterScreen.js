import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import Colors from "../constant/Colors";
import { setFilters } from "../store/actions/mealActions";
import { useDispatch } from "react-redux";
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        thumbColor={props.state ? "white" : Colors.primaryColor}
        trackColor={{ true: Colors.primaryColor }}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactose, setIsLactose] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const dispatch = useDispatch();
  const saveFilter = useCallback(() => {
    const savedState = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactose,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(savedState));
  }, [isGlutenFree, isLactose, isVegan, isVegetarian, dispatch]);
  useEffect(() => {
    navigation.setParams({ save: saveFilter });
  }, [saveFilter]);
  const toggleSwitch = (newValue, prop) => {
    switch (prop) {
      case "gluten":
        setIsGlutenFree(newValue);
        break;
      case "lactose":
        setIsLactose(newValue);
        break;
      case "vegan":
        setIsVegan(newValue);
        break;
      case "Vegetarian":
        console.log("inside");
        setIsVegetarian(newValue);
        break;
    }
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters /Restrictions</Text>
      <FilterSwitch
        label={"Gluten-free"}
        onChange={(newVal) => toggleSwitch(newVal, "gluten")}
        state={isGlutenFree}
      />
      <FilterSwitch
        label={"Lactose-free"}
        onChange={(newVal) => toggleSwitch(newVal, "lactose")}
        state={isLactose}
      />
      <FilterSwitch
        label={"vegan"}
        onChange={(newVal) => toggleSwitch(newVal, "vegan")}
        state={isVegan}
      />
      <FilterSwitch
        label={"Vegetarian"}
        onChange={(newVal) => toggleSwitch(newVal, "Vegetarian")}
        state={isVegetarian}
      />
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu1"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
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
    marginVertical: 15,
  },
});
export default FilterScreen;
