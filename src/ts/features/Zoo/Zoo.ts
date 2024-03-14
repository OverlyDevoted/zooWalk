import Animal from "../Animal/Animal";
import Employee from "../Employee/Employee";

class Zoo {
  private animals: Animal[] = [];
  private employees: Employee[] = [];
  private startingCapital: number = 1000;
  private currentCapital: number = this.startingCapital;
}

export default Zoo;
