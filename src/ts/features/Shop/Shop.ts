import Animal from "../Animal/Animal";
import { getRandomAnimal } from "../Animal/animalHelper";
import Employee from "../Employee/Employee";
import { getRandomZookeeper } from "../Employee/Zookeeper/zookeeperHelper";
import { Food, getRandomFood } from "../Food/Food";

class Shop {
  private static instance: Shop;
  private animalLevel: number;
  private animalShopLevel: number;
  private employeeShopLevel: number;
  private foodLevel: number;
  private foodShopLevel: number;

  private currentAnimals: Animal[];
  private currentEmployees: Employee[];
  private currentFood: Food[];

  constructor() {
    console.log("Shop constructor");
    this.animalLevel = 1;
    this.animalShopLevel = 1;
    this.employeeShopLevel = 1;
    this.foodLevel = 1;
    this.foodShopLevel = 1;

    this.currentAnimals = [];
    this.currentEmployees = [];
    this.currentFood = [];

  }

  generateNewAnimals(): Animal[] {
    this.currentAnimals = [];

    for (let i = 0; i < this.animalShopLevel; i++) {
      this.currentAnimals.push(getRandomAnimal());
    }
    return this.currentAnimals;
  }
  generateNewFood(): Food[] {
    this.currentFood = [];

    for (let i = 0; i < this.foodShopLevel; i++) {
      this.currentFood.push(getRandomFood());
    }
    return this.currentFood;
  }
  generateNewEmployeees(): Employee[] {
    this.currentEmployees = [];

    for (let i = 0; i < this.employeeShopLevel; i++) {
      this.currentEmployees.push(getRandomZookeeper());
    }
    return this.currentEmployees;
  }

  static getInstance(): Shop {
    if (this.instance == null) {
      this.instance = new Shop();
    }
    return this.instance;
  }
  getRandomPrice = () => {
    return Math.floor(Math.random() * 300) + 100;
  };
}

export default Shop;
