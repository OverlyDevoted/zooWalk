import "./../scss/style.css";
import { showGameStartModal } from "./components/gameStartModal";
import GameManager from "./features/Game/GameManager";
const gameManager = new GameManager(0.1);

showGameStartModal();

// () => {ю
//   console.log("Day end");
//   if (!animalShopContainer || !employeeShopContainer || !foodShopContainer)
//     return;
//   console.log("Generate");
//   animalShopContainer.innerHTML = "";
//   employeeShopContainer.innerHTML = "";
//   foodShopContainer.innerHTML = "";

//   for (let i = 0; i < 3; i++) {
//     const animalCard = generateAnimalCard(getRandomAnimal());
//     animalShopContainer.append(animalCard);
//     const employeeCard = generateEmployeeCard(getRandomZookeeper());
//     employeeShopContainer.append(employeeCard);
//     const foodCard = generateFoodCard(getRandomFood());
//     foodShopContainer.append(foodCard);
//   }
// }