import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesMealScreen from "../screens/CategoryMealScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constant/Colors";
import FavoriteScreen from "../screens/FavoriteScreen";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal categories",
      },
    },
    CategoriesMeals: {
      screen: CategoriesMealScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarColor: Colors.primaryColor,
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarColor: Colors.accentColor,
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={23} color={tabInfo.tintColor} />;
      },
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS == "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });
export default createAppContainer(MealsFavTabNavigator);
