import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoriesMeals: {
    screen: CategoriesMealScreen,
  },
  MealDetail: MealDetailScreen,
});
export default createAppContainer(MealsNavigator);
