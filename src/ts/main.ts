import "./../scss/style.css";

import { showGameStartModal } from "./components/gameStartModal";
import GameManager from "./features/Game/GameManager";

const gameManager = new GameManager(0.01);
showGameStartModal(gameManager);
