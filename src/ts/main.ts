import "./../scss/style.css";
import {
  generateAnimalCard,
  generateEmployeeCard,
  generateFoodCard,
} from "./components/card";
import { getRandomAnimal } from "./features/Animal/animalHelper";
import { getRandomZookeeper } from "./features/Employee/Zookeeper/zookeeperHelper";
import { getRandomFood } from "./features/Food/Food";
import GameManager from "./features/Game/GameManager";

const animalShopContainer = document.getElementById("animal-shop");
const employeeShopContainer = document.getElementById("employee-shop");
const foodShopContainer = document.getElementById("food-shop");

const gameManager = new GameManager();
gameManager.addOnNewDay(() => {
  console.log("Day end");
  if (
    animalShopContainer === null ||
    employeeShopContainer === null ||
    foodShopContainer === null
  )
    return;
  console.log("Generate")
  animalShopContainer.innerHTML = "";
  employeeShopContainer.innerHTML = "";
  foodShopContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const animalCard = generateAnimalCard(getRandomAnimal());
    animalShopContainer.append(animalCard);
    const employeeCard = generateEmployeeCard(getRandomZookeeper());
    employeeShopContainer.append(employeeCard);
    const foodCard = generateFoodCard(getRandomFood());
    foodShopContainer.append(foodCard);
  }
});
