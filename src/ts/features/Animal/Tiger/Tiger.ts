import Animal from "../Animal";
import { AnimalOrigins, Animals, Gender } from "../animal.type";

export class Tiger extends Animal {
  private wasInCage: boolean;
  constructor(name: string, age: number, origin: AnimalOrigins) {
    super(name, age, Animals.TIGER, Gender.FEMALE, origin);
    this.wasInCage = false;
  }
}
