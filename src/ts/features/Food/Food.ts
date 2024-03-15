type FoodIcons = "🥩" | "🌿" | "🌾";
export type Food = { name: string; icon: FoodIcons; calories: number; price: number };
export const foods: Food[] = [
  { name: "Meat", icon: "🥩", calories: 500, price: 50 },
  { name: "Leaves", icon: "🌿", calories: 200, price: 20 },
  { name: "Grain", icon: "🌾", calories: 350, price: 35 },
];

export const getRandomFood = (): Food => {
  return foods[Math.floor(Math.random()*foods.length)]
}