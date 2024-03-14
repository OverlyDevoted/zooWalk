import Animal from "../Animal";
import { AnimalOrigins, Animals, Gender } from "../animal.type";
export class Zebra extends Animal {
  private maxSpeed: number;
  constructor(
    name: string,
    age: number,
    maxSpeed: number,
    origin: AnimalOrigins
  ) {
    super(name, age, Animals.ZEBRA, Gender.MALE, origin);
    this.maxSpeed = maxSpeed;
  }
}
