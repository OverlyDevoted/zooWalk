import Animal from "../Animal/Animal";
import Employee from "../Employee/Employee";
import { Food } from "../Food/Food";
import GameObject from "../Game/GameObject";
import { Item } from "../Shop/shop.type";
//visitors visit the zoo based on it's appeal, the higher appeal the zoo has, the more often visitors come in a day.
//animals add appeal. Animal appeal is based on their condition. If they are hungry, they will give less appeal. Rarer animals give more appeal, but are also more expensive to take care off.
//tidyness. Animals can make a mess, if the zoo is not clean you will lose appeal
//there is appeal thresholds, at certain thresholds you will have a possiblity to gain more than one visitor at the same time
//More appeal, equals more visitors
//you can set ticket prices, but it also may affect appeal
//visitors earn money
class Zoo extends GameObject {
  private animals: Animal[] = [];
  private employees: Employee[] = [];
  private food: Food[] = [];
  private appeal: number = 0;
  private tideness: number = 100;

  calculateAppeal() {}
  addItem(item: Item) {
    console.log(item);
  }
  override start(): void {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override update(deltaT: number): void {}
}

export default Zoo;
