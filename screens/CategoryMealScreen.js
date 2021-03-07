import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
const CategoriesMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList navigation={props.navigation} listData={displayedMeals} />;
};

CategoriesMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({});
export default CategoriesMealScreen;
