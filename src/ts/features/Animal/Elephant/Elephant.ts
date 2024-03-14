import Animal from "../Animal";
import { AnimalOrigins, Animals, Gender } from "../animal.type";

export class Elephant extends Animal {
  private weight: number;
  constructor(
    name: string,
    age: number,
    origin: AnimalOrigins,
    weight: number
  ) {
    super(name, age, Animals.ELEPHANT, Gender.MALE, origin);
    this.weight = weight;
  }
}
