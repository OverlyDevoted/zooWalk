import { Icons } from "./helpers.type";
export enum FoodCalories {
  RABBIT = 200,
  BEEF = 550,
  GRAIN_PORRIDGE = 400,
  VEGETATION = 300,
}

type FoodIcons = "🌾" | "🌿" | "🐇" | "🐄";
export type Food = { calories: FoodCalories } & Icons<FoodIcons>;
