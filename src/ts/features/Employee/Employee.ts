import { Icons } from "../../types/helpers.type";

abstract class Employee {
  isEmployeeAtZoo: boolean = false;
  safetyTrainingCompletionDate: Date | null = null;
  info: Icons<string>;
  constructor(info: Icons<string>) {
    this.info = info;
  }
  abstract enterZoo(): void;
  abstract leaveZoo(): void;
  abstract takeSafetyTraining(): void;
}

export default Employee;
