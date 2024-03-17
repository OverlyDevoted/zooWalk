import Animal from "../Animal/Animal";
import Employee from "../Employee/Employee";
import { Food } from "../Food/Food";

export type Item = Animal | Employee | Food;
export type BuyItem = { item: Item; price: number };
export type BuyCallback = (item: BuyItem) => void;
