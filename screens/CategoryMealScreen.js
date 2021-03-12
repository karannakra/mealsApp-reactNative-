import React from "react";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import { StyleSheet, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
const CategoriesMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  if (displayedMeals.length == 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found may be check your filters</DefaultText>
      </View>
    );
  }
  return <MealList navigation={props.navigation} listData={displayedMeals} />;
};

CategoriesMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesMealScreen;
