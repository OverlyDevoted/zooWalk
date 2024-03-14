import { Food } from "../../types/food.type";
import GameObject from "../Game/GameObject";
import { Animals, AnimalInfo, AnimalOrigins, Gender } from "./animal.type";
abstract class Animal extends GameObject {
  protected hungerKcal: number = 1000;
  protected hungerModifier: number = 1;
  protected currentHunger: number = this.hungerKcal;
  constructor(
    protected name: string,
    protected age: number,
    protected icon: Animals,
    protected gender: Gender,
    protected origins: AnimalOrigins
  ) {
    super();
  }
  makeSound(): void {
    this.hungerKcal -= 5 * this.hungerModifier;
    console.log(`${this.icon} ${this.name} made a sound`);
  }
  feed(food: Food) {
    this.hungerKcal -= food.calories;
  }
  getInfo(): AnimalInfo {
    return {
      icon: this.icon,
      name: this.name,
      origins: this.origins,
      gender: this.gender,
    };
  }
  override start(): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override update(deltaT: number): void {}
}

export interface Herbivores {
  sleep(): void;
  walk(): void;
}
export interface Predator {
  swim(): void;
  hunt(): void;
}
export interface Terrestrial {
  jump(): void;
  run(): void;
}

export default Animal;
