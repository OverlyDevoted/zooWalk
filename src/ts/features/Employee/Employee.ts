abstract class Employee {
  isEmployeeAtZoo: boolean = false;
  safetyTrainingCompletionDate: Date | null = null;
  abstract enterZoo(): void;
  abstract leaveZoo(): void;
  abstract takeSafetyTraining(): void;
}

export default Employee;
