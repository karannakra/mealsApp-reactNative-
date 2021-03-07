import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesMealScreen from "../screens/CategoryMealScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform, Text } from "react-native";
import Colors from "../constant/Colors";
import FavoriteScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterScreen";

const defaultNavigation = {
  mode: "modal",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primaryColor : "white",
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
};
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
  defaultNavigation
);
const favoriteNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  defaultNavigation
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS == "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: favoriteNavigator,
    navigationOptions: {
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS == "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
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
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
          activeTintColor: Colors.accentColor,
        },
      });
const FilterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  defaultNavigation
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: {
      screen: FilterNavigator,
      navigationOptions: {
        drawerLabel: "Filters!!!",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
