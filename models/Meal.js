import { lazy } from "react";

class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordibility,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
      this.id=id;
      this.categoryIds=categoryIds;
      this.title=title;
      this.imageUrl=imageUrl;
      this.ingredients=ingredients;
      this.steps=steps;
      this.duration=duration;
      this.complexity=complexity;
      this.isGlutenFree=isGlutenFree;
      this.isLactoseFree=isLactoseFree;
      this.isVegan=isVegan;
      this.isVegetarian=isVegetarian;
  }
}

export default Meal;