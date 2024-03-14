import { Food } from "../../../types/food.type";
import Animal from "../../Animal/Animal";
import Employee from "../Employee";

class Zookeeper extends Employee {
  enterZoo(): void {
    throw new Error("Method not implemented.");
  }
  leaveZoo(): void {
    throw new Error("Method not implemented.");
  }
  takeSafetyTraining(): void {
    throw new Error("Method not implemented.");
  }

  feedAnimal(animal: Animal, food: Food): void {
    animal.feed(food);
  }
}

export default Zookeeper;
