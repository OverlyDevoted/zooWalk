import "./../scss/style.css";
import { generateAnimalCard } from "./components/card";
import { Zebra } from "./features/Animal/Zebra/Zebra";
import GameManager from "./features/Game/GameManager";

const gameManager = new GameManager();
const newAnimalsContainer = document.getElementById("animal-shop");
gameManager.addOnNewDay(() => {
  newAnimalsContainer?.append(
    generateAnimalCard(new Zebra("Zebra", 4, 3, "Africa"))
  );
});
